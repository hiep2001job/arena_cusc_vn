import './Curriculum.css';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { Markup } from 'interweave';

import Title from '../shared/Title';
import Button from '../shared/Button';
import Description from '../shared/Description';
import backGroundCuriculum from '../../assets/images/curriculum/Background_Chuong_trinh_dao_tao.png';
import bgCuriculumDetailHk3 from '../../assets/images/curriculum/HK3_div_background.png';
import bgCuriculumDetailHk4 from '../../assets/images/curriculum/HK4_div_background.png';

import CurriculumDetail1 from '../../assets/images/curriculum/CurriculumDetail1.png';
import CurriculumDetail2 from '../../assets/images/curriculum/CurriculumDetail2.png';
import CurriculumDetail3 from '../../assets/images/curriculum/CurriculumDetail3.png';

import imgProjectHK3 from '../../assets/images/curriculum/3D_Game_Character.png';
import imgProjectHK4_1 from '../../assets/images/curriculum/poster.jpg';
import imgProjectHK4_2 from '../../assets/images/curriculum/poster_2.jpg';
import ContentModel from './CurriculumContentModal';

function Curriculum() {
  const dataCurriculums = [
    {
      tabTitle: 'Học kỳ I',
      backGroundForDetail: bgCuriculumDetailHk3,
      title: 'Học kỳ I',
      detail: 'Chưa có dữ liệu cho HK1',
      image: [{ image: imgProjectHK3 }],
      curriculumsDetail: [
        {
          image: CurriculumDetail1,
          curriculumsDetail:
            '1. Concepts of Graphics and Illustrations/ Khái niệm về đồ họa và minh họa\n2. Typography Design/ Nghệ thuật thiết kế chữ.\n3. Digital Illustrations/ Đồ họa kỹ thuật số\n4. Image Magic/ Xử lý ảnh phục vụ in ấn và web\n5. Photography Concepts/ Nhiếp ảnh số\n6. Post processing using Lightroom/ Xử lý ảnh hậu kỳ với phần mềm Lightroom\n7. Design for Print and Advertising/ Thiết kế in ấn và quảng cáo\n8. Page Design/ Thiết kế dàn trang\n9. Print Portfolio/ Dự án xây dựng bộ nhận dạng thương hiệu',
          AdvantageOfCourse:
            '- Hiểu các khái niệm cơ bản về đồ họa và minh hoạ - Học các yếu tố trong vẽ, các cách vẽ, các thành phần trong bức vẽ. Nắm rõ các phạm trù cơ bản này sẽ giúp người học cách vẽ đúng dù chưa biết vẽ.<br>- Học các kỹ thuật cơ bản về typography (kiểu chữ), các giai đoạn tiến hóa và thử nhiều phong cách khác trong trong typography.<br>- Học sử dụng Adobe Illustrator để minh họa<br>- Học sử dụng Adobe Photoshop để thiết kế các đồ họa bắt mắt<br>- Học sử dụng các công cụ và nguyên tắc trong nhiếp ảnh kỹ thuật số Học sử dụng Lightroom cho các kỹ thuật xử lý<br>- Hiểu các khái niệm trong Thiết kế cho in ấn và quảng cáo. Mô tả được vai trò chức năng của ngành in quảng cáo.<br>- Thiết kế và hoàn thiện dàn trang cho tạp chí hoặc brochure<br>- Học sử dụng Adobe XD để thiết kế giao diện cho người dùng (UI)',
          careerOpportunities:
            'Học viên có thể làm việc việc tại các công ty/doanh nghiệp trong các lĩnh vực đồ họa 2D và xử lý ảnh tại các công ty quảng cáo, chế bản điện tử, thiết kế in ấn, thiết kế giao diện ở các vị trí như: Chuyên viên sáng tạo mỹ thuật, Nhà thiết kế đồ họa, Nghệ sĩ minh họa số, Thiết kế dàn trang, Biên tập ảnh số, Nhiếp ảnh gia, xử lý ảnh hậu kỳ, ...',
        },
      ],
    },
    {
      tabTitle: 'Học kỳ II',
      backGroundForDetail: bgCuriculumDetailHk4,
      title: 'Học kỳ II',
      detail: 'Chưa có dữ liệu cho HKII',
      image: [{ image: imgProjectHK3 }],
      curriculumsDetail: [
        {
          image: CurriculumDetail2,
          curriculumsDetail:
            '1. Concepts of Graphics and Illustrations/ Khái niệm về đồ họa và minh họa\n2. Typography Design/ Nghệ thuật thiết kế chữ.\n3. Digital Illustrations/ Đồ họa kỹ thuật số\n4. Image Magic/ Xử lý ảnh phục vụ in ấn và web\n5. Photography Concepts/ Nhiếp ảnh số\n6. Post processing using Lightroom/ Xử lý ảnh hậu kỳ với phần mềm Lightroom\n7. Design for Print and Advertising/ Thiết kế in ấn và quảng cáo\n8. Page Design/ Thiết kế dàn trang\n9. Print Portfolio/ Dự án xây dựng bộ nhận dạng thương hiệu',
          AdvantageOfCourse:
            '- Hiểu các khái niệm cơ bản về đồ họa và minh hoạ - Học các yếu tố trong vẽ, các cách vẽ, các thành phần trong bức vẽ. Nắm rõ các phạm trù cơ bản này sẽ giúp người học cách vẽ đúng dù chưa biết vẽ.<br>- Học các kỹ thuật cơ bản về typography (kiểu chữ), các giai đoạn tiến hóa và thử nhiều phong cách khác trong trong typography.<br>- Học sử dụng Adobe Illustrator để minh họa<br>- Học sử dụng Adobe Photoshop để thiết kế các đồ họa bắt mắt<br>- Học sử dụng các công cụ và nguyên tắc trong nhiếp ảnh kỹ thuật số Học sử dụng Lightroom cho các kỹ thuật xử lý<br>- Hiểu các khái niệm trong Thiết kế cho in ấn và quảng cáo. Mô tả được vai trò chức năng của ngành in quảng cáo.<br>- Thiết kế và hoàn thiện dàn trang cho tạp chí hoặc brochure<br>- Học sử dụng Adobe XD để thiết kế giao diện cho người dùng (UI)',
          careerOpportunities:
            'Học viên có thể làm việc việc tại các công ty/doanh nghiệp trong các lĩnh vực đồ họa 2D và xử lý ảnh tại các công ty quảng cáo, chế bản điện tử, thiết kế in ấn, thiết kế giao diện ở các vị trí như: Chuyên viên sáng tạo mỹ thuật, Nhà thiết kế đồ họa, Nghệ sĩ minh họa số, Thiết kế dàn trang, Biên tập ảnh số, Nhiếp ảnh gia, xử lý ảnh hậu kỳ, ...',
        },
      ],
    },
    {
      tabTitle: 'Học kỳ III',
      backGroundForDetail: bgCuriculumDetailHk3,
      title: 'Học kỳ III - Làm phim và thiết kế game',
      detail:
        'Học kỳ 3 cung cập kỹ năng làm phim kỹ thuật số qua các môn học như: viết kịch bản, quay phim, biên tập âm thanh, chỉnh sửa video, xử lý hậu kỳ phim. Bên cạnh đó, các môn học 3D bao gồm tạo hình nhân vật, làm vật liệu, thiết kế cấp độ trò chơi có thể ứng dụng cho truyền hình cũng như sản xuất Games. Với rất nhiều cơ hội việc làm hập dẫn như trỡ thành chuyên gia thiết kế game, thiết kế cấp độ trò chơi, họa sĩ làm vật liệu, họa sĩ gắn xương.',
      image: [{ image: imgProjectHK3 }],
      curriculumsDetail: [
        {
          image: CurriculumDetail3,
          curriculumsDetail:
            '1. Concepts of Graphics and Illustrations/ Khái niệm về đồ họa và minh họa\n2. Typography Design/ Nghệ thuật thiết kế chữ.\n3. Digital Illustrations/ Đồ họa kỹ thuật số\n4. Image Magic/ Xử lý ảnh phục vụ in ấn và web\n5. Photography Concepts/ Nhiếp ảnh số\n6. Post processing using Lightroom/ Xử lý ảnh hậu kỳ với phần mềm Lightroom\n7. Design for Print and Advertising/ Thiết kế in ấn và quảng cáo\n8. Page Design/ Thiết kế dàn trang\n9. Print Portfolio/ Dự án xây dựng bộ nhận dạng thương hiệu',
          AdvantageOfCourse:
            '- Hiểu các khái niệm cơ bản về đồ họa và minh hoạ - Học các yếu tố trong vẽ, các cách vẽ, các thành phần trong bức vẽ. Nắm rõ các phạm trù cơ bản này sẽ giúp người học cách vẽ đúng dù chưa biết vẽ.<br>- Học các kỹ thuật cơ bản về typography (kiểu chữ), các giai đoạn tiến hóa và thử nhiều phong cách khác trong trong typography.<br>- Học sử dụng Adobe Illustrator để minh họa<br>- Học sử dụng Adobe Photoshop để thiết kế các đồ họa bắt mắt<br>- Học sử dụng các công cụ và nguyên tắc trong nhiếp ảnh kỹ thuật số Học sử dụng Lightroom cho các kỹ thuật xử lý<br>- Hiểu các khái niệm trong Thiết kế cho in ấn và quảng cáo. Mô tả được vai trò chức năng của ngành in quảng cáo.<br>- Thiết kế và hoàn thiện dàn trang cho tạp chí hoặc brochure<br>- Học sử dụng Adobe XD để thiết kế giao diện cho người dùng (UI)',
          careerOpportunities:
            'Học viên có thể làm việc việc tại các công ty/doanh nghiệp trong các lĩnh vực đồ họa 2D và xử lý ảnh tại các công ty quảng cáo, chế bản điện tử, thiết kế in ấn, thiết kế giao diện ở các vị trí như: Chuyên viên sáng tạo mỹ thuật, Nhà thiết kế đồ họa, Nghệ sĩ minh họa số, Thiết kế dàn trang, Biên tập ảnh số, Nhiếp ảnh gia, xử lý ảnh hậu kỳ, ...',
        },
      ],
    },
    {
      tabTitle: 'Học kỳ IV',
      backGroundForDetail: bgCuriculumDetailHk4,
      title: 'Học kỳ IV - Làm phim hoạt hình 3D',
      detail:
        'Kỳ 4 giúp học viên trang bị đầy đủ những kỹ năng để đáp ứng nhu cầu của ngành công nghiệp phim hoạt hình hiện đại với các môn: xây dựng mô hình 3D, làm vật liệu cho các game ánh sáng, rendering, gắn xương, diễn hoạt nhân vật. Đi từ việc nhận viết rõ ràng thuật ngữ đến thành thạo tạo hình và thiết lập hình ảnh, đón nhận cơ hội việc làm và sẵn sàng đảm nhiệm nhiều vị trí thiết kế quan trọng như: họa sĩ dựng hình 3D, họa sĩ vật liệu, họa sĩ ánh sáng...',
      image: [{ image: imgProjectHK4_1 }, { image: imgProjectHK4_2 }],
      curriculumsDetail: [
        {
          image: CurriculumDetail1,
          curriculumsDetail:
            '1. Concepts of Graphics and Illustrations/ Khái niệm về đồ họa và minh họa\n2. Typography Design/ Nghệ thuật thiết kế chữ.\n3. Digital Illustrations/ Đồ họa kỹ thuật số\n4. Image Magic/ Xử lý ảnh phục vụ in ấn và web\n5. Photography Concepts/ Nhiếp ảnh số\n6. Post processing using Lightroom/ Xử lý ảnh hậu kỳ với phần mềm Lightroom\n7. Design for Print and Advertising/ Thiết kế in ấn và quảng cáo\n8. Page Design/ Thiết kế dàn trang\n9. Print Portfolio/ Dự án xây dựng bộ nhận dạng thương hiệu',
          AdvantageOfCourse:
            '- Hiểu các khái niệm cơ bản về đồ họa và minh hoạ - Học các yếu tố trong vẽ, các cách vẽ, các thành phần trong bức vẽ. Nắm rõ các phạm trù cơ bản này sẽ giúp người học cách vẽ đúng dù chưa biết vẽ.<br>- Học các kỹ thuật cơ bản về typography (kiểu chữ), các giai đoạn tiến hóa và thử nhiều phong cách khác trong trong typography.<br>- Học sử dụng Adobe Illustrator để minh họa<br>- Học sử dụng Adobe Photoshop để thiết kế các đồ họa bắt mắt<br>- Học sử dụng các công cụ và nguyên tắc trong nhiếp ảnh kỹ thuật số Học sử dụng Lightroom cho các kỹ thuật xử lý<br>- Hiểu các khái niệm trong Thiết kế cho in ấn và quảng cáo. Mô tả được vai trò chức năng của ngành in quảng cáo.<br>- Thiết kế và hoàn thiện dàn trang cho tạp chí hoặc brochure<br>- Học sử dụng Adobe XD để thiết kế giao diện cho người dùng (UI)',
          careerOpportunities:
            'Học viên có thể làm việc việc tại các công ty/doanh nghiệp trong các lĩnh vực đồ họa 2D và xử lý ảnh tại các công ty quảng cáo, chế bản điện tử, thiết kế in ấn, thiết kế giao diện ở các vị trí như: Chuyên viên sáng tạo mỹ thuật, Nhà thiết kế đồ họa, Nghệ sĩ minh họa số, Thiết kế dàn trang, Biên tập ảnh số, Nhiếp ảnh gia, xử lý ảnh hậu kỳ, ...',
        },
      ],
    },
  ];

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

  const handleGetDataCuriculum = (index) => {
    setMenuCurrent(index);

    console.log(isMobile);
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
              Chương trình đào tạo mỹ thuật đa phương tiện là khóa đào tạo nghề chuyên nghiệp với thời gian 2,5 năm,
              được cấp bằng quốc tế (advanced diploma in multimedia).{' '}
              <a href="" className="text-primary-color font-bold">
                xem thêm
              </a>
            </Description>

            {/* Begin Tab Menu */}
            <div className="flex max-w-[70%] mx-auto text-white mt-4 justify-center cursor-pointer">
              {dataCurriculums.map((dataCurruculum, index) => (
                <div
                  key={index}
                  className={`mr-5 md:mr-6 min-w-fit ${menuCurrent == index ? 'menu-active' : ''}`}
                  onClick={() => handleGetDataCuriculum(index)}
                >
                  {dataCurruculum.tabTitle}
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
                backgroundImage: `url(${dataCurriculums[menuCurrent].backGroundForDetail})`,
                animation: `${effectCurriculumDetailDuration}`,
              }}
            >
              <div className="container-curriculumDetail__des mt-48 lg:ml-8 lg:mr-24 xl:ml-44 xl:text-left ml-8 mr-3 text-justify xl:mr-60">
                <h1 className="text-xl text-white font-bold">{dataCurriculums[menuCurrent].title}</h1>
                <div className="mt-5 font-medium">{dataCurriculums[menuCurrent].detail}</div>
              </div>
            </div>
            {/* END BOX SHORT TEXT DESCRIPTION*/}

            {/* BEGIN PROJECT IMAGE HK */}
            <div className="col-span-3 md:col-span-2  w-full h-auto mt-[-100px] md:mt-0 lg:mt-0">
              <div class="flex justify-center mx-5 md:mx-0">
                {dataCurriculums[menuCurrent].image.map((imProject, index) => (
                  <div className={`md:grow ${index === 0 ? 'mr-5' : ''}`}>
                    <img className="w-full" src={imProject.image} />
                  </div>
                ))}
              </div>
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
                <ContentModel
                  title={'Chương trình đào tạo: 4 học kỳ: thời gian đào tạo 2.5 năm'}
                  content={
                    <>
                      {/* Begin Tab Menu */}
                      <div className="w-full">
                        <div className="flex sm:max-w-[70%] px-5 text-[#b7b7b7] font-bold mt-4 justify-between mx-auto cursor-pointer">
                          {dataCurriculums.map((dataCurruculum, index) => (
                            <div
                              key={index}
                              className={`mr-3 md:mr-6 min-w-fit ${menuCurrent == index ? 'menu-active-detail' : ''}`}
                              onClick={() => handleGetDataCuriculum(index)}
                            >
                              {dataCurruculum.tabTitle}
                            </div>
                          ))}
                        </div>
                        {/* End Tab Menu */}

                        <div className="mt-4 mx-5 md:mx-10 scroll-box">
                          <img src={dataCurriculums[menuCurrent].curriculumsDetail[0].image} />
                          <div className="mt-2 text-base font-bold">Chi tiết chương trình học</div>
                          <p className="mt-3 text-sm text-black">
                            <Markup content={dataCurriculums[menuCurrent].curriculumsDetail[0].curriculumsDetail} />
                          </p>
                          <div className="mt-5 text-base font-bold">Lợi ích sau khóa học:</div>
                          <p className="mt-3 text-sm text-black">
                            <Markup content={dataCurriculums[menuCurrent].curriculumsDetail[0].AdvantageOfCourse} />
                          </p>
                          <div className="mt-5 text-base font-bold">Cơ hội nghề nghiệp:</div>
                          <p className="mt-3 text-sm text-black">
                            <Markup content={dataCurriculums[menuCurrent].curriculumsDetail[0].careerOpportunities} />
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
