import React from 'react';

import './instructors.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Description from '../shared/Description';
import Title from '../shared/Title';

import instr1 from '../../assets/images/Instructors/DoanHoHanhNguyen.jpg';
import instr2 from '../../assets/images/Instructors/NguyenHongSon.jpg';
import instr3 from '../../assets/images/Instructors/NguyenTrungKien.jpg';
import instr4 from '../../assets/images/Instructors/NguyenVietNga.jpg';
import instr5 from '../../assets/images/Instructors/VoDuyAnh.jpg';

//Intructors
const instructors = [
  { name: 'Ms. Nguyễn Việt Nga', image: instr4 },
  { name: 'Ms. Hạnh Nguyên', image: instr1 },
  { name: 'Mr. Nguyễn Hồng Sơn', image: instr2 },
  { name: 'Mr. Nguyễn Trung Kiên', image: instr3 },
  { name: 'Mr. Võ Duy Anh', image: instr5 },
];

//Slider settings
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
       
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Instructors = () => {
  return (
    <div className="w-full relative">
      <div className="relative px-5 xl:px-36 z-10">
        <Title className="text-center text-primary-color">Đội ngũ giảng viên</Title>

        <Description className="mt-5 text-left font-medium">
          Trong suốt quá trình phát triển, CUSC - ARENA tự hào có một lực lượng giảng viên chuyên nghiệp, trẻ trung,
          năng động, tận tâm giảng dạy sinh viên,... từ đó bồi dưỡng thêm nhiều chuyên gia thiết kế đồ họa, truyền
          thông, ấn phẩm PR, thiêt kế Game, kỹ xảo điện ảnh,...
        </Description>

        <Slider className="mt-10" {...settings}>
          {instructors.map((instructor, index) => (
            <div key={index} className="instr-wrapper relative min-h-fit">
              <div className="instr-img-wrapper  h-[20rem] overflow-hidden">
                <img
                  alt="Ảnh giảng viên Arena Cusc"
                  className="instr-img w-full top-0"
                  src={instructor.image}
                />
              </div>
              <div className="text-lg font-bold text-center mt-10">{instructor.name}</div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="horizontal-bar block relative h-32  -translate-y-28 z-1 w-full bg-[#fdf34e]"></div>
    </div>
  );
};

export default Instructors;

// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class Instructors extends Component {
//   render() {
//     var settings = {
//       dots: false,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };
//     return (
//       <div>
//         <h2> Responsive </h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }