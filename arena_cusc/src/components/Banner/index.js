import React ,{useEffect,useState} from 'react';

import { apispreadsheets, imgFromDriveUrl } from '../shared/ApiSpreadSheets';

import './banner.css';


const Banner = () => {

  const [isBannerLoading, setIsBannerLoading] = useState(true);
  const [banner, setBanner] = useState("");

  const [isSloganLoading, setIsSloganLoading] = useState(true);
  const [slogan, setSlogan] = useState("");

  //Get Data  
  useEffect(() => {
    fetch(`${apispreadsheets}/banners`)
      .then((res) => res.json())
      .then(
        (result) => {
          setBanner(imgFromDriveUrl(result[0].hinh_anh));
          setSlogan(imgFromDriveUrl(result[1].hinh_anh));   
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsBannerLoading(true)
          setIsSloganLoading(true)
        },
      );
  }, []);

  return (
    <div className="w-full relative z-[2]">
      {/* Background image */}
      <div className="w-full md:-translate-y-40 md:min-h-[100vh]">
        <img alt="banner" className={`w-full  ${isBannerLoading?'skeleton':''}`}  
        onLoad={()=>setIsBannerLoading(false)} src={banner} />
      </div>
      {/* Banners */}
      <div
        className="right-[10vw] top-4 w-4/12 md:right-[8vw] md:top-8 
      md:w-3/12 absolute 
      flex flex-col  "
      >
        {/* Slogan banner */}
        <div className={`grow hover-grow-up w-auto ${isSloganLoading?'skeleton':''}`}>
          <img alt="slogan banner" onLoad={()=>{setIsSloganLoading(false)}} src={slogan} />
        </div>
        {/* Register banner */}
        <div className=" grow-0 mt-10 w-auto">
          <div className="regis-wrapper min-w-fit">
            <div className="regis-header ">Đăng kí xét tuyển</div>
            <div className="regis-body text-center ">
              <span className="font-bold "> Ưu tiên nộp hồ sơ sớm!</span>
              <br />
              <button className="regis-btn">Đăng ký</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
