import React from 'react';
import "./news.css";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import new1 from "../../assets/images/Hinh_tin_tuc_su_kien/b77839fc-bcf0-4af0-b3fc-30094b68c776-16446124676671541864493.jpeg"
import new2 from "../../assets/images/Hinh_tin_tuc_su_kien/photo-1-15578104309281896500448.jpg"
import new3 from "../../assets/images/Hinh_tin_tuc_su_kien/photo-1-15935390062371952258920.jpg"

const newsData = [
    { text: '', image: new1 },
    { text: '', image: new2 },
    { text: '', image: new3 },
    { text: '', image: new4 },
    { text: '', image: new5 },
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
const News = () => {
  return (
    <></>
  )
}

export default News