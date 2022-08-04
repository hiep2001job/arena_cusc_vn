import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Slide.css';

import Description from '../shared/Description';

import spiderman from '../../assets/images/slide/spider-man.jpg';
import doctorStrange from '../../assets/images/slide/doctor-strange.jpg';
import squidGame from '../../assets/images/slide/squildGame.png';
import milion from '../../assets/images/slide/minion.jpg';

function Slide() { 
  const slideObj = [spiderman, doctorStrange, squidGame, milion];
  const [currentImage, setCurrentImage] = useState(0);

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
          style={{ backgroundImage: `url(${slideObj[currentImage]})` }}
        >
          <div className="overlay-slide"></div>
          <div className="relative">
            <h1 className="md:text-3xl font-bold text-center uppercase text-[yellow] mt-40 md:mt-[14rem] lg:mt-[19rem] xl:mt-[28rem]">
              Học Arena, vương xa sáng tạo
            </h1>

            <Description className="mt-5 text-white">
              Nhu cầu càng ngày tăng của ngành truyền thông và giải trí tại Việt Nam là tiềm năng thức đẩy các sản phẩm
              sáng tạo của ARENA MULTIMEDIA trong mảng thiết kế 3D để sáng tạo nên các nhân vật game ấn tượng, hay trong
              bộ phim hoạt hình 3D với kỹ xão tuyệt đỉnh, ...xuất hiện, phát triển ở khắp nơi và có ý nghĩa vô cùng quan
              trọng đối với cuộc sống. Bạn đã sẵn sàng cùng CUSC ARENA bước chân vào con đường sáng tạo ra những sản
              phẩm tuyệt vời nảy chưa?
            </Description>
          </div>
          <Slider {...settings} className="mt-5 md:mt-0">
            <div className="img-slide">
              <img className="rounded-3xl" src={spiderman} alt="1" />
            </div>
            <div className="img-slide">
              <img className="rounded-3xl" src={doctorStrange} alt="2" />
            </div>
            <div className="img-slide">
              <img className="rounded-3xl" src={squidGame} alt="3" />
            </div>
            <div className="img-slide">
              <img className="rounded-3xl" src={milion} alt="4" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Slide;
