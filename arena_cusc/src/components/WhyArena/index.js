import Description from '../shared/Description';

import icon1 from '../../assets/images/Icon_tai_sao_chon_CUSC/1.jpg';
import icon2 from '../../assets/images/Icon_tai_sao_chon_CUSC/4.jpg';
import icon3 from '../../assets/images/Icon_tai_sao_chon_CUSC/2.jpg';
import icon4 from '../../assets/images/Icon_tai_sao_chon_CUSC/6.png';
import icon5 from '../../assets/images/Icon_tai_sao_chon_CUSC/3.png';
import icon6 from '../../assets/images/Icon_tai_sao_chon_CUSC/5.png';

import './WhyArena.css';
const whyArenaData = [
  {
    icon: icon1,
    text: 'Chương trình đào tạo được cập nhật liên tục, hướng thị trường, bám sát thực tế các lĩnh vực, đáp ứng yêu cầu tuyển dụng.',
  },
  {
    icon: icon2,
    text: 'Phương pháp đào tạo kết hợp chú trọng thực hành, áp dụng các công cụ và kỹ thuật mới nhất, học liệu được trang bị AR.',
  },
  { icon: icon3, text: 'Tăng cường năng lực tiếng Anh với chương trình đào tạo chuẩn Quốc tế.' },
  {
    icon: icon4,
    text: 'Tối ưu hóa thời gian nhờ học trực tiếp vào kiến thức chuyên ngành, hệ thống Onlinevarsity hỗ trợ học bất cứ lúc nào, học bất cứ nơi đâu.',
  },
  { icon: icon5, text: 'Bằng cấp được công nhận toàn cầu, phát triển Portfolio của người học.' },
  { icon: icon6, text: 'Đội ngũ giảng viên được đào tạo và tập huấn từ các quốc gia phát triển cao về CNTT.' },
];
function WhyArena() {
  return (
    <>
      <div className="w-full">
        <h1 className="md:text-3xl font-bold uppercase text-center text-primary-color my-10">
          Tại sao chọn Arena Multimedia - CUSC?
        </h1>
        <div className="mb-20 w-[90%] mx-auto grid lg:grid-cols-2 md:grid grid-cols-1 gap-8 text-base">
          {whyArenaData.map((item, index) => (
            <div key={index} className="whyarena__border w-full col-span-2 md:col-span-1 flex">
              <div className="w-[95px] h-[95px] md:w-[110px] md:h-[110px] mr-5 whyarena__image aspect-square flex items-center justify-center">
                <img alt="icon" className="w-[60%]" src={item.icon} />
              </div>
              <div className="w-full m-auto">
                <p className="m-auto block text-[0.8rem] md:text-base font-medium text-justify pr-4">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WhyArena;
