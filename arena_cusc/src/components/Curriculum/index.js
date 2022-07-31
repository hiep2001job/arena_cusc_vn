import './Curriculum.css';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';

import Title from '../shared/Title';
import Button from '../shared/Button';
import Description from '../shared/Description';
import backGroundCuriculum from '../../assets/images/curriculum/Background_Chuong_trinh_dao_tao.png';
import bgCuriculumDetailHk3 from '../../assets/images/curriculum/HK3_div_background.png';
import bgCuriculumDetailHk4 from '../../assets/images/curriculum/HK4_div_background.png';

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
    },
    {
      tabTitle: 'Học kỳ II',
      backGroundForDetail: bgCuriculumDetailHk4,
      title: 'Học kỳ II',
      detail: 'Chưa có dữ liệu cho HKII',
      image: [{ image: imgProjectHK3 }],
    },
    {
      tabTitle: 'Học kỳ III',
      backGroundForDetail: bgCuriculumDetailHk3,
      title: 'Học kỳ III - Làm phim và thiết kế game',
      detail:
        'Học kỳ 3 cung cập kỹ năng làm phim kỹ thuật số qua các môn học như: viết kịch bản, quay phim, biên tập âm thanh, chỉnh sửa video, xử lý hậu kỳ phim. Bên cạnh đó, các môn học 3D bao gồm tạo hình nhân vật, làm vật liệu, thiết kế cấp độ trò chơi có thể ứng dụng cho truyền hình cũng như sản xuất Games. Với rất nhiều cơ hội việc làm hập dẫn như trỡ thành chuyên gia thiết kế game, thiết kế cấp độ trò chơi, họa sĩ làm vật liệu, họa sĩ gắn xương.',
      image: [{ image: imgProjectHK3 }],
    },
    {
      tabTitle: 'Học kỳ IV',
      backGroundForDetail: bgCuriculumDetailHk4,
      title: 'Học kỳ IV - Làm phim hoạt hình 3D',
      detail:
        'Kỳ 4 giúp học viên trang bị đầy đủ những kỹ năng để đáp ứng nhu cầu của ngành công nghiệp phim hoạt hình hiện đại với các môn: xây dựng mô hình 3D, làm vật liệu cho các game ánh sáng, rendering, gắn xương, diễn hoạt nhân vật. Đi từ việc nhận viết rõ ràng thuật ngữ đến thành thạo tạo hình và thiết lập hình ảnh, đón nhận cơ hội việc làm và sẵn sàng đảm nhiệm nhiều vị trí thiết kế quan trọng như: họa sĩ dựng hình 3D, họa sĩ vật liệu, họa sĩ ánh sáng...',
      image: [{ image: imgProjectHK4_1 }, { image: imgProjectHK4_2 }],
    },
  ];

  const [menuCurrent, setMenuCurrent] = useState(0);

  const animationConfig = { animationName: 'curriculumDetail', animationDuration: '0.6s', timeout: 1000 };

  const [effectCurriculumDetailDuration, setEffectCurriculumDetailDuration] = useState(
    `${animationConfig.animationName} ${animationConfig.animationDuration}`,
  );

  const handleGetDataCuriculum = (index) => {
    setMenuCurrent(index);

    setEffectCurriculumDetailDuration(`${animationConfig.animationName} ${animationConfig.animationDuration}`);
    setTimeout(() => {
      setEffectCurriculumDetailDuration('none');
    }, animationConfig.timeout);
  };

  const contentStyle = {
    maxWidth: '900px',
    width: '90%',
  };

  return (
    <>
      <div className="w-[100%] h-[1330px] relative">
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
            <div className="flex text-white mt-4 justify-center cursor-pointer">
              {dataCurriculums.map((dataCurruculum, index) => (
                <div
                  key={index}
                  className={`mr-3 md:mr-6 ${menuCurrent == index ? 'menu-active' : ''}`}
                  onClick={() => handleGetDataCuriculum(index)}
                >
                  {dataCurruculum.tabTitle}
                </div>
              ))}
            </div>
            {/* End Tab Menu */}
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-10 md:mr-20">
            <div
              className={`bg-curriculumDetail effect-curriculumDetail col-span-3 w-full h-[680px] md:h-[618px] md:bg-right xl:bg-background-position--35 bg-no-repeat bg-contain md:bg-cover mt-[-70px]`}
              style={{
                backgroundImage: `url(${dataCurriculums[menuCurrent].backGroundForDetail})`,
                animation: `${effectCurriculumDetailDuration}`,
              }}
            >
              <div className="container-curriculumDetail__des mt-48 md:ml-44 lg:ml-8 lg:mr-24 xl:ml-44 xl:text-left ml-8 mr-3 text-center xl:mr-60">
                <h1 className="text-xl text-white font-bold">{dataCurriculums[menuCurrent].title}</h1>
                <div className="mt-5 font-medium">{dataCurriculums[menuCurrent].detail}</div>
              </div>
            </div>

            <div className="col-span-2 w-full h-auto mt-[-100px] lg:mt-0 ml-10 flex">
              {dataCurriculums[menuCurrent].image.map((imProject) => (
                <div className="grow mr-5">
                  <img className="imgProject w-full" src={imProject.image} />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-[20px] xl:mt-[-150px]">
            <Popup
              contentStyle={contentStyle}
              trigger={
                <button className="mt-5 md:mt-12 py-3 px-10 bg-[#ed3237] text-white font-bold  uppercase rounded-full hover:shadow-[0_0_15px_#ed3238d4]">
                  Xem chi tiết
                </button>
              }
              modal
            >
              {(close) => <ContentModel />}
            </Popup>
          </div>
        </div>
      </div>
    </>
  );
}

export default Curriculum;
