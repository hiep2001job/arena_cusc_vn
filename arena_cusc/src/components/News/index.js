import React from 'react';
import './news.css';

import Slider from 'react-slick';

import new1 from '../../assets/images/Hinh_tin_tuc_su_kien/b77839fc-bcf0-4af0-b3fc-30094b68c776-16446124676671541864493.jpeg';
import new2 from '../../assets/images/Hinh_tin_tuc_su_kien/photo-1-15578104309281896500448.jpg';
import new3 from '../../assets/images/Hinh_tin_tuc_su_kien/photo-1-15935390062371952258920.jpg';

import Title from '../shared/Title';
import Description from '../shared/Description';
import Button from '../shared/Button';

//Slider data
const newsData = [
  { text: 'Metaverse sẽ còn phát triển và bùng nổ trong tương lai...', image: new1 },
  {
    text: '100HRS - Creative Marathon, đấu trường sáng tạo không giới hạn cho sinh viên Arena Multimedia.',
    image: new2,
  },
  { text: 'Thi Multimedia Quốc tế: Học viên trổ tài và rinh giải', image: new3 },
  { text: 'Metaverse sẽ còn phát triển và bùng nổ trong tương lai...', image: new1 },
  {
    text: '100HRS - Creative Marathon, đấu trường sáng tạo không giới hạn cho sinh viên Arena Multimedia.',
    image: new2,
  },
  { text: 'Thi Multimedia Quốc tế: Học viên trổ tài và rinh giải', image: new3 },
];
//Slider settings
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const News = () => {
  return (
    <div className="news-section w-screen mt-20 relative">
      <Title className="text-center text-primary-color mt-10">Tin tức sự kiện</Title>
      <Description className="mt-5  font-medium text-center">
        Hãy cùng theo bước CUSC ARENA khám phá những tin tức, sự kiện thú vị đang diễn ra
      </Description>
      <Slider className="mt-10" {...settings}>
        {newsData.map((news, index) => (
          <div key={index} className="news-wrapper p-4 overflow-hidden  relative">
            <div className="rotate-wrapper relative cursor-pointer overflow-hidden  w-auto h-[20rem] rounded-3xl mx-auto ">
              <div className="news-content relative  h-full  flex flex-col  justify-end">
                <div className="news-overlay"></div>
                <div className="news-img absolute left-0 bottom-0 h-full w-auto scale-150 z-[-1]">
                  <img className="h-full" src={news.image} />
                </div>

                <div
                  className="news-text relative w-full px-8 py-3 
                grid items-center  text-[#000] text-lg 
                bg-white bg-opacity-90  h-fit  rounded-3xl"
                >
                  <span> {news.text}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="w-fit relative my-10 left-[50%] translate-x-[-50%]">
        <Button className="mx-auto">Xem Thêm</Button>
      </div>
    </div>
  );
};

export default News;
