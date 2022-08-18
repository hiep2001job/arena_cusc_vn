import './Curriculum.css';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { Markup } from 'interweave';

import Title from '../shared/Title';
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
      <div className="w-[100%] h-[1111px] xl:h-[1330px] mt-5 relative">
        <div
          className="w-[100%] bg-curriculum bg-auto md:bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${backGroundCuriculum})` }}
        >
          <div className="relative px-5 xl:px-80">
            <Title className="mt-48 md:mt-[370px] text-center">Chương trình đào tạo</Title>
            <Description className="mt-5 text-justify md:text-center font-medium">
              {isLoaded && sheets[0].mo_ta}
              <a href="" className="ml-2 text-primary-color font-bold">
                xem thêm
              </a>
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
          <div className="mt-10 grid grid-cols-3 md:grid-cols-5 gap-10 md:mr-20">
            {/* BEGIN BOX SHORT TEXT DESCRIPTION*/}
            <div
              className="bg-curriculumDetail effect-curriculumDetail col-span-3 w-full h-[680px] md:h-[618px] xl:h-[680px] md:bg-right xl:bg-background-position--35 bg-no-repeat bg-center bg-cover mt-[-70px]"
              style={{
                backgroundImage: `url(${isLoaded && imgFromDriveUrl(sheets[menuCurrent].background_gioi_thieu_ngan)})`,
                animation: `${effectCurriculumDetailDuration}`,
              }}
            >
              <div className="container-curriculumDetail__des mt-48 lg:ml-8 lg:mr-24 xl:ml-44 xl:text-left ml-8 mr-3 text-justify xl:mr-60">
                <h1 className="text-xl text-white font-bold">
                  {isLoaded && sheets[menuCurrent].tieu_de_gioi_thieu_ngan}
                </h1>
                <div className="mt-5 font-medium">{isLoaded && sheets[menuCurrent].noi_dung_mo_ta_ngan}</div>
              </div>
            </div>
            {/* END BOX SHORT TEXT DESCRIPTION*/}

            {/* BEGIN PROJECT IMAGE HK */}
            <div className="col-span-3 md:col-span-2 w-full h-auto mt-[-100px] md:mt-0 lg:mt-0">
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
          </div>
          {/* END CONTENT CURRICULUM */}

          {/*  BEGIN BUTTON XEM CHI TIẾT POPUP MODAL  */}
          <div className="text-center mt-[20px] md:mt-[-150px]">
            <Popup
              contentStyle={contentStyle}
              trigger={
                <button className="mt-5 md:mt-12 py-3 px-10 bg-[#ed3237] text-white font-bold  uppercase rounded-full hover:shadow-[0_0_15px_#ed3238d4]">
                  Xem chi tiết
                </button>
              }
              modal
            >
              {(close) => (
                <ContentModal
                  title={isLoaded && sheets[0].thoi_gian_dao_tao}
                  content={
                    <>
                      {/* Begin Tab Menu */}
                      <div className="w-full">
                        <div className="flex sm:max-w-[70%] px-5 text-[#b7b7b7] font-bold mt-4 justify-between mx-auto cursor-pointer">
                          {sheets.map((data, index) => (
                            <div
                              key={index}
                              className={`mr-3 md:mr-6 min-w-fit ${menuCurrent == index ? 'menu-active-detail' : ''}`}
                              onClick={() => handleGetDataCuriculum(index)}
                            >
                              {data.hoc_ky}
                            </div>
                          ))}
                        </div>
                        {/* End Tab Menu */}

                        <div className="mt-4 mx-5 md:mx-10 scroll-box">
                          <img src={isLoaded && imgFromDriveUrl(sheets[menuCurrent].anh_minh_hoa_cho_hoc_ky)} />
                          <p className="mt-3 text-sm text-black">
                            <Markup
                              allowAttributes
                              content={isLoaded && sheets[menuCurrent].chuong_trinh_dao_tao_chi_tiet}
                            />
                          </p>
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
      </div>
    </>
  );
}

export default Curriculum;
