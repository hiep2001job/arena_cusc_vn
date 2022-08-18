import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Slide.css';

import Description from '../shared/Description';
import { apispreadsheets, imgFromDriveUrl } from '../shared/ApiSpreadSheets';

function Slide() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const sheetName = 'slide';
    fetch(`${apispreadsheets}/${sheetName}`)
      .then((res) => res.json())
      .then(
        (results) => {
          setIsLoaded(true);
          setTitle(results[0].tieu_de);
          setDescription(results[0].mo_ta);
          setImages(results);
        },
        (error) => {
          console.log('error: ', error);
          setIsLoaded(false);
        },
      );
  }, []);

  const settings = {
    className: 'center',
    infinite: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '40px',
    slidesToShow: 3,
    lazyLoad: true,
    swipe: false,
    arrows: false,
    speed: 1000,
    beforeChange: (current, next) => setCurrentImage(next),
    customPaging: () => <div className="customPaging"></div>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          swipe: true,
        },
      },
    ],
  };

  // useEffect(() => {
  //   const imgSlides = document.getElementsByClassName('img-slide');
  //   const lengthImg = imgSlides.length / 3;

  //   const left = currentImage - 1,
  //     right = currentImage + 1;

  //   // console.log('number - ', left);
  //   // console.log('center', currentImage);
  //   // console.log('number + ', right);

  //   console.log(imgSlides[left + lengthImg]);
  //   console.log(imgSlides[right + lengthImg]);
  //   if (imgSlides[left + lengthImg] != undefined) {
  //     console.log('left: ', imgSlides[left + lengthImg]);
  //     console.log('center: ', imgSlides[currentImage]);
  //     console.log('right: ', imgSlides[right + lengthImg]);

  //     // imgSlides[left + lengthImg].style.filter = 'blur(10px)';
  //     // imgSlides[currentImage + 1].style.filter = 'blur(nore)';
  //     // imgSlides[right + lengthImg].style.filter = 'blur(10px)';
  //   }
  //   // imgSlides[left + lengthImg].style.filter = 'blur(10px)';
  // });

  return (
    <>
      <div className="w-[100%] h-[900px] md:h-[1200px] relative mt-[-25%] md:mt-[-45%] z-[1]">
        <div
          className="w-[100%] bg-slide px-5 md:px-28 md:bg-[length:100%_100%]"
          style={{ backgroundImage: `url(${isLoaded && imgFromDriveUrl(images[currentImage].hinh_anh)})` }}
        >
          <div className="overlay-slide"></div>
          <div className="relative">
            <h1 className="md:text-3xl font-bold text-center uppercase text-[yellow] mt-40 md:mt-[14rem] lg:mt-[19rem] xl:mt-[28rem]">
              {title}
            </h1>
            <Description className="mt-5 text-white">{description}</Description>
          </div>

          <Slider {...settings} className="mt-5 md:mt-0">
            {images.map((image, index) => (
              <div key={index} className="img-slide">
                <img className="rounded-3xl" src={imgFromDriveUrl(image.hinh_anh)} alt={image.tieu_de} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Slide;
