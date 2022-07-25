import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Slide.css';

import spiderman from '../../assets/Slide/spider-man.jpg';
import doctorStrange from '../../assets/Slide/doctor-strange.jpg';
import squidGame from '../../assets/Slide/squildGame.png';
import milion from '../../assets/Slide/minion.jpg';
import { useState } from 'react';

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          // slidesToShow: 3,
          // slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
          swipe: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
          swipe: true,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="w-[100%] bg-slide px-5 md:px-28 md:bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${slideObj[currentImage]})` }}
      >
        <div className="overlay"></div>
        <div className="mx-auto">
          <h1 className="md:text-3xl font-bold text-center uppercase text-[yellow] mt-5 md:mt-28 relative ">
            Học Arena, vương xa sáng tạo
          </h1>
          <div className="mt-5 text-base text-white text-left relative">
            Nhu cầu càng ngày tăng của ngành truyền thông và giải trí tại Việt Nam là tiềm năng thức đẩy các sản phẩm
            sáng tạo của ARENA MULTIMEDIA trong mảng thiết kế 3D để sáng tạo nên các nhân vật game ấn tượng, hay trong
            bộ phim hoạt hình 3D với kỹ xão tuyệt đỉnh, ...xuất hiện, phát triển ở khắp nơi và có ý nghĩa vô cùng quan
            trọng đối với cuộc sống. Bạn đã sẵn sàng cùng CUSC ARENA bước chân vào con đường sáng tạo ra những sản phẩm
            tuyệt vời nảy chưa?
          </div>
          <Slider {...settings}>
            <div className="img-slide">
              <img src={spiderman} alt="1" />
            </div>
            <div className="img-slide">
              <img src={doctorStrange} alt="2" />
            </div>
            <div className="img-slide">
              <img src={squidGame} alt="3" />
            </div>
            <div className="img-slide">
              <img src={milion} alt="4" />
            </div>
          </Slider>
          {/* <div className="w-52 my-0 mx-auto border-t-4 border-yellow-300 relative bottom-32"></div> */}
        </div>
      </div>
    </>
  );
}

export default Slide;
