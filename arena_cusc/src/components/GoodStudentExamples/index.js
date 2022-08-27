import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlickArrow from '../shared/SlickArrow';

import './GoodStudentExamples.css';
import '../shared/StyleGlobal/StyleGlobal.css';

import Description from '../shared/Description';
import Title from '../shared/Title';

import CustomPaging from '../shared/CustomPaging';
import { apispreadsheets, imgFromDriveUrl } from '../shared/ApiSpreadSheets';
import { useState } from 'react';
import { useEffect } from 'react';

function GoodStudentExamples() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sheets, setSheets] = useState([]);

  //FETCH DATA
  useEffect(() => {
    const sheetName = 'guong_sinh_vien_thanh_dat';
    fetch(`${apispreadsheets}/${sheetName}`)
      .then((res) => res.json())
      .then(
        (results) => {
          setIsLoaded(true);
          setSheets(results);
        },
        (error) => {
          console.log('error: ', error);
          setIsLoaded(false);
        },
      );
  }, []);

  const settingsSliderGoodStudentExamples = {
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    swipe: true,
    arrows: true,
    dots: true,
    customPaging: () => <CustomPaging />,
    nextArrow: <SlickArrow left />,
    prevArrow: <SlickArrow right />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative px-5 xl:px-36">
        <Title className="text-center text-primary-color">
          {isLoaded && sheets[0].tieu_de}
        </Title>
        <Description className="mt-5 text-left font-medium">
          {isLoaded && sheets[0].mo_ta}
        </Description>

        <Slider className="mx-auto md:mx-32 lg:mx-40 xl:mx-48 mt-10" {...settingsSliderGoodStudentExamples}>
          {sheets.map((data, index) => (
            <div key={index} className="grid grid-cols-2 gap-2">
              <div className="flex-none md:flex lg:md:flex xl:md:flex border-r-2 rounded-r-xl  ">
                <div className="w-[35%] md:w-[40rem] m-auto mb-5 md:m-0 md:mb-0">
                  <img className="rounded-3xl" src={imgFromDriveUrl(data.hinh_anh)} />
                </div>
                <div className="sogan__body ml-3 md:ml-5 xl:ml-8 justify-center">
                  <div className="font-bold uppercase text-center md:text-left lg:text-left xl:md:text-left">
                    <h4 className="text-black text-base">{data.ten}</h4>
                    <span className="text-gray-500 text-sm">{data.cong_viec}</span>
                  </div>
                  <div className="sogan__body--description">
                    <p className="mx-14 text-sm font-medium italic mb-10">
                      {data.cau_noi}
                      <span className="text-gray-500 text-sm"> xem thêm</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default GoodStudentExamples;
