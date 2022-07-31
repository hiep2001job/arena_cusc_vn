import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import './products.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Title from '../../components/shared/Title';
import Description from '../../components/shared/Description';
import testImg_1 from '../../assets/images/san_pham_cua_sinh_vien/3Dcharactercover.jpg';
import testImg_2 from '../../assets/images/san_pham_cua_sinh_vien/sapixarvirtualbgcoco16x99ccd7110-800x450.jpeg';

const data = [
  {
    slides: [
      {
        img: testImg_1,
        title: 'co van quan',
        subTitle: '',
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
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    initialSlide: 0,
    arrows: false,
    infinite: false,
    rows: 2,
    dots: true,
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
  const ref = useRef({});
  return (
    <div id="products m-[50px]">
      <div className="text-center ">
        {/* <h3 className="text-color-700 uppercase">san pham noi bat cua sinh vien</h3> */}
        <Title className="text-primary-color">sản phẩm nổi bật của sinh viên</Title>
        <Description className="text-center">
          Sinh viên là niềm tự hào của chúng tôi. hãy cùng <span className="uppercase">cusc arena</span> khám phá các
          sản phẩm tuyệt vời từ sinh viên
        </Description>
      </div>
      {/* <div className="products-horizontal-line flex justify-center mt-8 content-center border-b-4 border-sky-500">
        <List />
      </div> */}
      {/* <SimpleSlider /> */}
      {/* <CircleList /> */}
      <Tab
        data={data}
        renderItem={(item) => {
          return (
            <Slider ref={ref} {...settings}>
              {/* <div>
                  {JSON.stringify(
                    item.slides.map((val) => {
                      return val.img;
                    }),
                  )}
                </div> */}

              {item.slides.map((val) => {
                return (
                  <div>
                    <img src={val.img} alt="" />
                  </div>
                );
              })}
            </Slider>
          );
        }}
      />
    </div>
  );
}
const Tab = ({ defaultSelectIdx, data, renderItem }) => {
  const [selectTagIdx, setSelectTagIdx] = React.useState(
    Math.min(Math.max(defaultSelectIdx || 0, 0), data?.length || 0),
  );
  const clickHeader = (idx) => {
    setSelectTagIdx(idx);
  };
  return (
    <div className={'tag'}>
      <TabHeader selectTagIdx={selectTagIdx} size={data?.length} selectIdx={clickHeader} />
      <TabContent selectTagIdx={selectTagIdx} data={data} renderItem={renderItem} />
    </div>
  );
};

const TabHeader = ({ selectTagIdx, size, selectIdx }) => {
  const activeStyle = {
    backgroundColor: 'red',
  };
  return (
    <div className="tab-process-bar flex justify-center mt-8 content-center border-b-4 border-sky-500">
      <div className="tag-header w-4/5 absolute flex justify-between content-center list-none m-auto">
        {new Array(size || 0).fill(0).map((_, idx) => {
          const active = selectTagIdx === idx;
          return (
            <div
              className={`tag-header-item bg-white border-solid border-primary-color rounded-full w-[25px] h-[25px] border-[3px] mt-[-11px] ${
                active ? 'active' : ''
              }`}
              key={`tag-header-idx-${idx}`}
              onClick={() => !active && selectIdx(idx)}
              style={active ? activeStyle : {}}
            >
              {/* {'header-' + idx} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TabContent = ({ selectTagIdx, data, renderItem }) => {
  return (
    <div className="tag-content mt-10">
      {data
        ?.filter((_, idx) => selectTagIdx === idx)
        .map((item, idx) => {
          return (
            <div className="tag-content-item" key={`tag-content-idx-${idx}`}>
              {renderItem(item)}
            </div>
          );
        })}
    </div>
  );
};

export default Products;

// const circles = [1, 2, 3, 4, 5];
// const List = (props) => {
//   const [active, setActive] = useState(1);
//   let value = active;
//   const handleOnClick = (id) => {
//     setActive(id);
//   };
//   const activeStyle = {
//     backgroundColor: 'red',
//   };

//   return (
//     <ul className="w-4/5 absolute flex justify-between content-center list-none m-auto">
//       {circles.map((val, idx) => (
//         <li
//           key={idx}
//           className="bg-white border-solid border-red-700 rounded-full w-[25px] h-[25px] border-[3px] mt-[-11px]"
//           style={active === idx ? activeStyle : {}}
//           onClick={() => handleOnClick(idx)}
//         ></li>
//       ))}
//     </ul>
//   );
// };
