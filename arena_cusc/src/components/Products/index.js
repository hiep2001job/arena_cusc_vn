import React, { useState } from 'react';
import Slider from 'react-slick';
import './products.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Title from '../shared/Title';
import Popup from 'reactjs-popup';
import ContentModal from '../shared/PopUpModal';
import Button from '../shared/Button';
import testImg_1 from '../../assets/images/san_pham_cua_sinh_vien/yasuo.jpg';
import testImg_2 from '../../assets/images/san_pham_cua_sinh_vien/3Dcharactercover.jpg';
import testImg_3 from '../../assets/images/3D_Game_Character.png';
import CustomPaging from '../shared/CustomPaging';

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
        img: testImg_3,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_3,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_3,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_3,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_3,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_3,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_3,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_3,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_3,
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
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
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
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
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
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
      {
        img: testImg_2,
        title: '2',
        subTitle: '',
        time: '2021-2022',
      },
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
  const [closeModal, setcloseModal] = useState(false);
  const settings = {
    className: 'section-outstanding__slider',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    initialSlide: 0,
    arrows: false,
    infinite: false,
    rows: 2,
    dots: true,
    customPaging: () => <CustomPaging className="sm:mt-5 sm:p-10px px-2.5 ml-[-15px] translate-y-2/4" />,
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
        breakpoint: 998,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 844,
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
    <div id="products px-5 xl:px-36">
      <div className="text-center ">
        <Title className="text-primary-color my-8 sm:text-3xl font-bold uppercase">
          sản phẩm nổi bật của sinh viên
        </Title>
        <p className=" justify-center text-center px-5">
          Sinh viên là niềm tự hào của chúng tôi. hãy cùng <span className="uppercase"> cusc arena</span> khám phá các
          sản phẩm tuyệt vời từ sinh viên!
        </p>
      </div>
      <div className="products-tab mx-[50px] md:block sm:flex sm:m-0">
        {/* Header */}
        {/*  */}
        <div className="process-bar relative h-[50px] mt-[65px] md:w-full sm:w-[25%]">
          <ul className="w-full absolute justify-between content-center list-none mt-[-40px] z-[1] sm:pt-0 sm:flex-col sm:border-r-2 sm:border-primary-color sm:border-t-2 sm:border-t-gray-200 md:border-none md:flex md:pt-[15px] md:flex-row">
            {data.map((group, index) => (
              <li
                key={index}
                // ${ index === activeGroup ? 'bg-primary-color' : 'bg-white'}
                className={`tag-header-item w-[20%] h-[60px] relative lg:block sm:flex sm:items-center sm:w-full sm:border-b-2 sm:border-b-gray-200 md:border-none ${
                  index === activeGroup ? 'active' : ''
                }`}
                onClick={() => {
                  index !== activeGroup && setActiveGroup(index);
                }}
              >
                <div
                  className={`group-name uppercase absolute w-full text-center uppercase md:text-base font-bold cursor-pointer sm:p-2.5 md:p-10px`}
                >
                  {group.groupName}
                </div>
              </li>
            ))}
          </ul>
          {/* horizontal line*/}
          <div>
            <div className="process-bar-line w-full m-auto bg-primary-color h-1 absolute top-[62px] md:block sm:hidden"></div>
          </div>
        </div>
        {/* Content */}
        <div className="tab-content mt-10 md:w-full sm:w-[75%]">
          <div className="tab-content-item">
            <Slider {...settings}>
              {/* start slide image */}
              {data[activeGroup].slides.map((slide, index) => (
                <Popup
                  trigger={
                    <div key={`slide${index}`}>
                      <div className="box rounded-[20px] mx-[20px] my-[15px] overflow-hidden relative rounded-[20px] xl:h-[250px] lg:h-[200px] sm:h-[220px] shadow-[0_0_10px_0px_#adb5bd]">
                        <img
                          className="product-slide-img rounded-[20px] bg-[#fdf34e] w-full h-full align-middle object-cover"
                          src={`${slide.img}`}
                          alt={slide.title}
                        />
                        <div className="overlay w-full h-full top-1/2 left-1/2 absolute translate-x-[-50%] translate-y-[-50%] rounded-[20px]">
                          <div className="pl-[10%]">
                            <h3 className="text-[#fdf34e] text-base">{slide.title}</h3>
                            <p className="text-[#fdf34e] text-base">{slide.subTitle}</p>
                            <p className="text-[#fdf34e] text-base">{slide.time}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  modal
                >
                  {(close) => (
                    <ContentModal
                      content={
                        <>
                          {/* Begin Tab Menu */}
                          <div className="w-full">
                            <div className="flex sm:max-w-[70%] px-5 text-[#b7b7b7] font-bold mt-4 justify-between mx-auto cursor-pointer">
                              {data[activeGroup].slides.map((slide, index) => (
                                <div key={index} className={`mr-3 md:mr-6 min-w-fit`}></div>
                              ))}
                            </div>
                            {/* End Tab Menu */}

                            <div className="mt-4 mx-5 md:mx-10 scroll-box">
                              <div className="mt-2 text-base font-bold">Chi tiết chương trình học</div>

                              <div className="mt-5 text-base font-bold">Lợi ích sau khóa học:</div>

                              <div className="mt-5 text-base font-bold">Cơ hội nghề nghiệp:</div>
                            </div>
                          </div>
                        </>
                      }
                    />
                  )}
                </Popup>
              ))}
              {/* end slide image */}
            </Slider>
          </div>
          {/* <div className="mt-10 flex justify-center">
            <Button className={`w-[250px]`}>Xem thêm</Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Products;
