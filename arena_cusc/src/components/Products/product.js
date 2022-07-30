import React, { useState, useRef, Component } from 'react';
import Slider from 'react-slick';
import './products.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const brands = [1, 2, 3, 4, 5];
const shortMovies = [1, 2, 3, 4, 5];
const figures = [1, 2, 3, 4, 5];
const animation = [1, 2, 3, 4, 5];
const sketching = [1, 2, 3, 4, 5];
function Products() {
  return (
    <div id="products" style={style.container}>
      <div className="text-center ">
        <h3 className="text-color-700 uppercase">san pham noi bat cua sinh vien</h3>
        <p>
          Sinh viên là niềm tự hào của chúng tôi. hãy cùng <span className="uppercase">cusc arena</span> khám phá các
          sản phẩm tuyệt vời từ sinh viên
        </p>
      </div>
      <div className="products-horizontal-line flex justify-center mt-8 content-center border-b-4 border-sky-500">
        <NumberList numbers={circles} />
        {/* {data.map((val, idx) => (
          <Highlighttem key={`highlight-key-${idx}`} {...val} />
        ))} */}
      </div>
      <SimpleSlider />
      <CircleList />
    </div>
  );
}

export default Products;

function ListItem(props) {
  const [active, setActive] = useState(false);
  function handleActive() {
    setActive((active) => !active);
  }
  return (
    <li className="circle bg-white border-solid border-red-700 rounded-full w-[25px] h-[25px] border-[3px] mt-[-11px]">
      {props.value}
    </li>
  );
}
// const listItems = [];
// function ListContent() {
//   for (let i = 0; i < 5; i++) {
//     listItems.push(<li className="circle bg-white border-solid border-red-700 rounded-full" style={style.circle}></li>);
//   }
//   return listItems;
// }
const circles = [1, 2, 3, 4, 5];
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <ListItem key={number.toString()} />);
  return <ul className="w-4/5 absolute flex justify-between content-center list-none m-auto">{listItems}</ul>;
}
function CircleList() {
  const values = [
    { id: 1, text: '' },
    { id: 2, text: '' },
    { id: 3, text: '' },
    { id: 4, text: '' },
    { id: 5, text: '' },
  ];
  const [activeId, setActiveId] = useState();

  return (
    <div className="products-horizontal-line flex justify-center mt-8 content-center border-b-4 border-sky-500">
      <ul className="w-4/5 absolute flex justify-between content-center list-none m-auto">
        {values.map((val) => (
          <li
            className="circle bg-white border-solid border-red-700 rounded-full w-[25px] h-[25px] border-[3px] mt-[-11px]"
            key={values.value}
            onClick={() => setActiveId(val.id)}
          ></li>
        ))}
      </ul>
    </div>
  );
}

const SimpleSlider = (props) => {
  const ref = useRef({});

  const next = () => {
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

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
  return (
    <div className="mt-10">
      <Slider ref={ref} {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

const style = {
  container: {
    margin: '50px',
  },
  circle: {
    width: '25px',
    height: '25px',
    borderWidth: '3px',
    marginTop: '-11px',
  },
};
