import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Slide.css';

import Description from '../shared/Description';
import { apispreadsheets, imgFromDriveUrl } from '../shared/ApiSpreadSheets';

function Slide() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [sheets, setSheets] = useState([]);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const sheetName = 'slide';
    fetch(`${apispreadsheets}/${sheetName}`)
      .then((res) => res.json())
      .then(
        (results) => {
          setSheets(results);
          setIsLoaded(true);
        },
        (error) => {
          // console.log('error: ', error);
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

  return (
    <>
      <div className="w-[100%] h-[900px] md:h-[1200px] relative mt-[-25%] md:mt-[-45%] z-[1]">
        <div
          className="w-[100%] bg-slide px-5 md:px-28 md:bg-[length:100%_100%]"
          style={{ backgroundImage: `url(${isLoaded && imgFromDriveUrl(sheets[currentImage].hinh_anh)})` }}
        >
          <p>{isLoaded && imgFromDriveUrl(sheets[currentImage].hinh_anh)}</p>
          <div className="overlay-slide"></div>
          <div className="relative">
            <h1 className="md:text-3xl font-bold text-center uppercase text-[yellow] mt-40 md:mt-[14rem] lg:mt-[19rem] xl:mt-[28rem]">
              {isLoaded && sheets[0].tieu_de}
            </h1>
            <Description className="mt-5 text-white">{isLoaded && sheets[0].mo_ta}</Description>
          </div>

          <Slider {...settings} className="mt-5 md:mt-0">
            {sheets.map((image, index) => (
              <div key={index} className="img-slide">
                <img className="rounded-3xl" src={isLoaded && imgFromDriveUrl(image.hinh_anh)} alt={image.tieu_de} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Slide;
