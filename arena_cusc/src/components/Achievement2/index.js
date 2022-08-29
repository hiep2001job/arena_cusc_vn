import React from 'react';
import './achievement.css';
import Title from '../../components/shared/Title';
import BrandImg from '../../assets/images/No1_Brand.png';
import Icon_1 from '../../assets/images/icon_Diem_noi_bat_cua_ARENA/icon-1.png';
import Icon_2 from '../../assets/images/icon_Diem_noi_bat_cua_ARENA/icon-2.png';
import Icon_3 from '../../assets/images/icon_Diem_noi_bat_cua_ARENA/icon-3.png';
import Icon_4 from '../../assets/images/icon_Diem_noi_bat_cua_ARENA/icon-4.png';

const data = [
  { img: Icon_1, value: 25, title: 'năm kinh nghiệm' },
  { img: Icon_2, value: 20, title: 'quốc gia' },
  { img: Icon_3, value: 450000, title: 'sinh viên trên thế giới' },
  { img: Icon_4, value: 250, title: 'trung tâm' },
];

function Achievements() {
  return (
    <>
      <div className="achievement px-5 xl:px-36 mb-20">
        <Title className="text-center text-primary-color my-8">những điểm nổi bật của arena multimedia</Title>
        <div className="achievement-content flex border-b-4 border-b-primary-color items-stretch ">
          <BrandItem />
          {data.map((val, idx) => (
            <Highlighttem key={`highlight-key-${idx}`} {...val} />
          ))}
        </div>
      </div>
    </>
  );
}

const BrandItem = () => {
  return (
    <div className="achievement-box brand-img flex items-center w-[20%]">
      <img src={BrandImg} alt="brand-img" />
    </div>
  );
};
// Highlighttem
const Highlighttem = ({ img, value, title }) => {
  return (
    // Highlighttem content
    <div className="achievement-box w-[20%] pl-5">
      <div className="achievement-box-container flex items-stretch flex-col relative h-full">
        <div className="header flex justify-center relative w-full h-16">
          <img className="header-image absolute h-32 w-32" src={img} alt="highlight-img" />
        </div>
        <div className="content flex justify-center items-center flex-col w-full h-[73%] border-2 border-[#fff212] rounded-[10px] pt-16 pb-5 px-3.5 shadow-[0_0_10px_0px_#adb5bd]">
          <div className="number text-base md:text-3xl  font-bold uppercase text-primary-color">
            {(value || 0).toLocaleString('de-DE', { minimumFractionDigits: 0 })}
          </div>
          <div className="titile text-base md:text-xlfont-bold uppercase text-center">{title}</div>
        </div>
        {/* footer */}
        <div className="footer flex justify-center h-[90px] relative">
          <div className="circle-top w-[40px] h-[40px] border-[3px] border-primary-color rounded-full bg-white translate-y-[-50%] absolute"></div>
          <div className="center-line h-full w-[3px] bg-primary-color"></div>
          <div className="circle-bottom absolute translate-x-[0] translate-y-[263%] w-[25px] h-[25px] border-[3px] border-primary-color rounded-full bg-white"></div>
          <div className="circle-bottom-outline absolute translate-x-[0] translate-y-[263%] w-[25px] h-[25px] border-[3px] border-primary-color rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
