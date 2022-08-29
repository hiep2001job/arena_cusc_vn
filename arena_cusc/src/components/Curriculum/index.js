import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { Markup } from 'interweave';

import Title from '../shared/Title';
import './Curriculum.css';
import Description from '../shared/Description';
import backGroundCuriculum from '../../assets/images/curriculum/Background_Chuong_trinh_dao_tao.png';
import ContentModal from '../shared/PopUpModal';

import { apispreadsheets, imgFromDriveUrl } from '../shared/ApiSpreadSheets';

function Curriculum() {
  const [menuCurrent, setMenuCurrent] = useState(0);
  const animationConfig = { animationName: 'curriculumDetail', animationDuration: '0.6s', timeout: 1000 };

  const [effectCurriculumDetailDuration, setEffectCurriculumDetailDuration] = useState(
    `${animationConfig.animationName} ${animationConfig.animationDuration}`,
  );

  // Check is Mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 845);
  const isMobileController = () => {
    setIsMobile(window.innerWidth < 1280);
  };
  useEffect(() => {
    window.addEventListener('resize', isMobileController);

    return () => {
      window.removeEventListener('resize', isMobileController);
    };
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [sheets, setSheets] = useState([]);

  // FETCH DATA AND SET STATUS
  useEffect(() => {
    const sheetName = 'chuong_trinh_dao_tao';
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

  // WHEN CLICK FUNCTION HANDLE GetDataCuriculum
  const handleGetDataCuriculum = (index) => {
    setMenuCurrent(index);

    if (!isMobile) {
      setEffectCurriculumDetailDuration(`${animationConfig.animationName} ${animationConfig.animationDuration}`);
      setTimeout(() => {
        setEffectCurriculumDetailDuration('none');
      }, animationConfig.timeout);
    }
  };

  const contentStyle = {
    maxWidth: '900px',
    width: '95%',
  };

  return (
    <>
      <div className="w-[100%] h-[1280px] xl:h-[1380px] mt-5 relative">
        <div
          className="w-[100%] bg-curriculum bg-auto md:bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${backGroundCuriculum})` }}
        >
          <div className="relative px-5 xl:px-80">
            <Title className="mt-48 md:mt-[400px] lg:mt-[420px] text-center">Chương trình đào tạo</Title>
            <Description className="mt-5 text-justify md:text-center font-medium">
              {isLoaded && sheets[0].mo_ta}
            </Description>

            {/* Begin Tab Menu */}
            <div className="flex max-w-[70%] mx-auto text-white mt-4 justify-center cursor-pointer">
              {sheets.map((data, index) => (
                <div
                  key={index}
                  className={`mr-5 md:mr-6 min-w-fit ${menuCurrent == index ? 'menu-active' : ''}`}
                  onClick={() => handleGetDataCuriculum(index)}
                >
                  {data.hoc_ky}
                </div>
              ))}
            </div>
            {/* End Tab Menu */}
          </div>

          {/* BEGIN CONTENT CURRICULUM */}
          <div className="mt-2 sm:mt-10 grid grid-cols-3 md:grid-cols-5 gap-0 md:gap-10 md:mr-20">
            {/* BEGIN BOX SHORT TEXT DESCRIPTION*/}
            <div className="effect-curriculumDetail col-span-3 w-full md:bg-right">
              <div
                className="text-justify bg-no-repeat bg-cover xl:bg-contain pt-10 pl-0 pb-10 lg:pr-8 lg:pb-20 lg:pl-10 lg:pt-24 xl:pb-32 xl:pt-20 xl:pl-24 md:pb-11 xl:pr-52 xl:ml-16 ml-2"
                style={{
                  backgroundImage: `url(${
                    isLoaded && imgFromDriveUrl(sheets[menuCurrent].background_gioi_thieu_ngan)
                  })`,
                  animation: `${effectCurriculumDetailDuration}`,
                }}
              >
                <div className="m-10 xl:ml-14 xl:mr-0">
                  <h1 className="text-xl text-white font-bold">
                    {isLoaded && sheets[menuCurrent].tieu_de_gioi_thieu_ngan}
                  </h1>
                  <div className="mt-5 font-medium">{isLoaded && sheets[menuCurrent].noi_dung_mo_ta_ngan}</div>
                </div>
              </div>
            </div>
            {/* END BOX SHORT TEXT DESCRIPTION*/}

            {/* BEGIN PROJECT IMAGE HK */}
            <div className="col-span-3 md:col-span-2 w-full h-auto md:mt-0 lg:mt-0">
              {isLoaded && (
                <div class="flex justify-center mx-5 md:mx-0">
                  <div className={`md:grow`}>
                    <img className="w-full" src={imgFromDriveUrl(sheets[menuCurrent].anh_project1)} />
                  </div>
                  <div className={`md:grow ${sheets[menuCurrent].anh_project2 && 'ml-5'}`}>
                    <img className="w-full" src={imgFromDriveUrl(sheets[menuCurrent].anh_project2)} />
                  </div>
                </div>
              )}
            </div>
            {/* BEGIN PROJECT IMAGE HK */}

            {/*  BEGIN BUTTON XEM CHI TIẾT POPUP MODAL  */}
            <div className="mt-5 mr-0 xl:mr-36 col-start-1 col-span-3 md:col-start-3 md:col-span-2 text-center">
              <Popup
                contentStyle={contentStyle}
                trigger={
                  <button className="py-3 px-10 bg-[#ed3237] text-white font-bold uppercase rounded-full hover:shadow-[0_0_15px_#ed3238d4] m-auto mb-[100%]">
                    Xem chi tiết
                  </button>
                }
                modal
              >
                {(close) => (
                  <ContentModal
                    content={
                      <>
                        {/* Begin Tab Menu */}
                        {/* Title */}
                        <div className="p-4 text-sm md:text-lg font-bold uppercase text-center shadow-[0px_0px_12px_rgba(0,0,0,0.1)] rounded-[25px]">
                          {isLoaded && sheets[0].thoi_gian_dao_tao}
                        </div>
                        {/* Content */}
                        <div className="content">
                          <div className="w-full">
                            <div className="flex sm:max-w-[70%] px-5 text-[#b7b7b7] font-bold mt-4 justify-between mx-auto cursor-pointer">
                              {sheets.map((data, index) => (
                                <div
                                  key={index}
                                  className={`mr-3 md:mr-6 min-w-fit ${
                                    menuCurrent == index ? 'menu-active-detail' : ''
                                  }`}
                                  onClick={() => handleGetDataCuriculum(index)}
                                >
                                  {data.hoc_ky}
                                </div>
                              ))}
                            </div>
                            {/* End Tab Menu */}

                            <div className="mt-4 mx-5 md:mx-10 scroll-box">
                              <img
                                className="w-[100%]"
                                src={isLoaded && imgFromDriveUrl(sheets[menuCurrent].anh_minh_hoa_cho_hoc_ky)}
                              />
                              <p className="mt-3 text-sm text-black">
                                <Markup
                                  allowAttributes
                                  content={isLoaded && sheets[menuCurrent].chuong_trinh_dao_tao_chi_tiet}
                                />
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    }
                  />
                )}
              </Popup>
            </div>
            {/*  END BUTTON XEM CHI TIẾT POPUP MODAL */}
          </div>
          {/* END CONTENT CURRICULUM */}
        </div>
      </div>
    </>
  );
}

export default Curriculum;
