import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import './products.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Title from '../shared/Title';
import Description from '../shared/Description';
import testImg_1 from '../../assets/images/san_pham_cua_sinh_vien/3Dcharactercover.jpg';
import testImg_2 from '../../assets/images/san_pham_cua_sinh_vien/sapixarvirtualbgcoco16x99ccd7110-800x450.jpeg';

const data = [
  {
    groupName: 'bộ nhận diện thương hiệu',
    slides: [
      {
        img: testImg_1,
        title: 'co van quan',
        subTitle: 'abc',
        time: '2021-2022',
      },
      {
        img: testImg_1,
        title: 'co van quanabc',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_1,
        title: 'co van quanefg',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_1,
        title: 'co van quan1234',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_1,
        title: 'co van quan1234',
        subTitle: '',
        time: '2021-2022',
      },
    ],
  },
  {
    groupName: 'phim ngắn',
    slides: [
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
    ],
  },
  {
    groupName: 'nhân vật game',
    slides: [
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
    ],
  },
  {
    groupName: '3d animation',
    slides: [
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
    ],
  },
  {
    groupName: 'sketching',
    slides: [
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
    ],
  },
];

function Products() {
  const settings = {
    className: 'section-outstanding__slider',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    initialSlide: 0,
    arrows: false,
    infinite: true,
    rows: 2,
    dots: true,
    beforeChange: (current, next) => () => {
      setactiveItem(next);
      console.log(next);
    },
    responsive: [
      {
        breakpoint: 1198,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };
  const [activeGroup, setActiveGroup] = useState(0);
  const [activeItem, setactiveItem] = useState(0);
  // const ref = useRef({});
  return (
    <div id="products m-[50px]">
      <div className="text-center ">
        <Title className="text-primary-color my-8">sản phẩm nổi bật của sinh viên</Title>
        <Description className="text-center">
          Sinh viên là niềm tự hào của chúng tôi. hãy cùng <span className="uppercase">cusc arena</span> khám phá các
          sản phẩm tuyệt vời từ sinh viên
        </Description>
      </div>
      <div className="tab">
        {/* Header */}
        {/*  */}
        <div className="process-bar">
          <ul className="w-4/5 absolute flex justify-between content-center list-none m-auto">
            {data.map((group, index) => (
              <li
                key={index}
                // ${ index === activeGroup ? 'bg-primary-color' : 'bg-white'}
                className={`tag-header-item after:bg-red ${index === activeGroup ? 'active' : ''}`}
                onClick={() => {
                  index !== activeGroup && setActiveGroup(index);
                }}
              >
                <div className="group-name uppercase absolute w-full">{group.groupName}</div>
              </li>
            ))}
          </ul>
          {/* horizontal line*/}
          <div>
            <div className="w-full m-auto bg-primary-color h-1 absolute top-[24px]"></div>
          </div>
        </div>
        {/* Content */}
        <div className="tag-content mt-10">
          <div className="tag-content-item">
            <Slider {...settings}>
              {/* start slide image */}
              {data[activeGroup].slides.map((slide, index) => (
                <div key={`slide${index}`}>
                  <div className="box rounded-[20px] m-[10px]">
                    <div className="box-container h-[300px] relative flex  justify-center items-center rounded-[20px] bg-[#fdf34e]">
                      <div className="overflow-hidden rounded-[20px] h-full">
                        <div>
                          <img className="slide-img h-full w-full" src={slide.img} alt={slide.title} />
                        </div>
                      </div>
                      <div className="overlay">
                        <div className="pl-[10%]">
                          <h3>{slide.title}</h3>
                          <p>{slide.subTitle}</p>
                          <p>{slide.time}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* end slide image */}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;