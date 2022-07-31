import React from 'react';

import bannerImg from '../../assets/images/Banner/Banner_1.png';
import sloganImg from '../../assets/images/Banner/Banner_2.png';

import './banner.css';

const Banner = () => {
  return (
    <div className="w-screen relative">
      {/* Background image */}
      <div className="w-full md:-translate-y-32">
        <img alt="banner" className="w-full" src={bannerImg} />
      </div>
      {/* Banners */}
      <div className="right-[10vw] top-4 w-4/12 md:right-[8vw] md:top-8 
      md:w-3/12 absolute 
      flex flex-col  ">
        {/* Slogan banner */}
        <div className="grow hover-grow-up w-auto">
          <img alt="slogan banner" src={sloganImg} />
        </div>
        {/* Register banner */}
        <div className=" grow-0 mt-10 w-auto">
          <div className="regis-wrapper min-w-fit">
            <div className="regis-header ">Đăng kí xét tuyển</div>
            <div className="regis-body text-center ">
              <span className="font-bold "> Ưu tiên nộp hồ sơ sớm!</span><br/>
              <button className='regis-btn'>Đăng ký</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
