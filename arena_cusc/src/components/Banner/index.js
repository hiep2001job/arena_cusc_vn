import React from 'react';

import bannerImg from '../../assets/images/Banner/Banner_1.png';
import sloganImg from '../../assets/images/Banner/Banner_2.png';

import './banner.css';

const Banner = () => {
  return (
    <div className="w-screen relative">
      {/* Background image */}
      <div className="z-50 w-screen -translate-y-[5rem]">
        <img alt="banner" className="w-full" src={bannerImg} />
      </div>
      {/* Banners */}
      <div className="right-[10vw] top-0 w-5/12 md:right-[8vw] md:top-20 md:w-3/12 absolute flex flex-col  ">
        {/* Slogan banner */}
        <div className="grow hover-grow-up">
          <img alt="slogan banner" src={sloganImg} />
        </div>
        {/* Register banner */}
        <div className="grow mt-10">
          <div className="regis-wrapper min-h-fit min-w-fit">
            <div className="regis-header sm:text-[0.6rem] md:text-base">Đăng kí xét tuyển</div>
            <div className="regis-body text-center ">
              <span className="font-bold sm:text-[0.6rem] md:text-base "> Ưu tiên nộp hồ sơ sớm!</span><br/>
              <button className='regis-btn'>Đăng ký</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
