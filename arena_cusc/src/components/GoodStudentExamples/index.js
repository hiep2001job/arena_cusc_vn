import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlickArrow from '../shared/SlickArrow';

import './GoodStudentExamples.css';
import '../shared/StyleGlobal/StyleGlobal.css';

import Description from '../shared/Description';
import Title from '../shared/Title';

import image1 from '../../assets/images/GoodStudentExamples/Untitled-1.png';
import image2 from '../../assets/images/GoodStudentExamples/Untitled-2.png';
import CustomPaging from '../shared/CustomPaging';

const goodStudents = [
  {
    studentAvatar: image1,
    nameStudent: 'Huỳnh Trúc Mai',
    jobPosition: 'UI UX Designer - CanTho University Software Center',
    slogan:
      'Có hai lý do khuyến tôi muốn học môi trường này. Thứ nhất, Arena multimedia xây dựng chương trình đào tạo đa dạng với bốn học kỳ ở bốn lĩnh vực khác nhau trong ngành mỹ thuật đa phương tiện. Chỉ riêng điều này đã khiến tôi tò mò và háo hứng muốn khám phá...',
  },
  {
    studentAvatar: image2,
    nameStudent: 'Chung Đức Hào',
    jobPosition: 'Creative Director',
    slogan:
      'Có hai lý do khuyến tôi muốn học môi trường này. Thứ nhất, Arena multimedia xây dựng chương trình đào tạo đa dạng với bốn học kỳ ở bốn lĩnh vực khác nhau trong ngành mỹ thuật đa phương tiện. Chỉ riêng điều này đã khiến tôi tò mò và háo hứng muốn khám phá...',
  },
];

function GoodStudentExamples() {
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
        <Title className="text-center text-primary-color">Gương sinh viên thành đạt</Title>
        <Description className="mt-5 text-left font-medium">
          Với mục tiêu rõ ràng trong quá trình học tập, rèn luyện tại CUSC ARENA, nhiều cựu sinh viên đã bước đầu gặt
          hái được những thành công đáng khen ngợi. Chúng tôi muốn chia sẽ kinh nghiệm của các học viên, những tấm gương
          sáng cho các thế hệ sinh viên tiếp tục học tập và noi theo.{' '}
        </Description>

        <Slider className="mx-auto md:mx-32 lg:mx-40 xl:mx-48 mt-10" {...settingsSliderGoodStudentExamples}>
          {goodStudents.map((goodStudent) => (
            <div className="grid grid-cols-2 gap-2">
              <div className="flex-none md:flex lg:md:flex xl:md:flex border-r-2 rounded-r-xl  ">
                <div className="w-[35%] md:w-[40rem] m-auto mb-5 md:m-0 md:mb-0">
                  <img className="rounded-3xl" src={goodStudent.studentAvatar} />
                </div>
                <div className="sogan__body ml-3 md:ml-5 xl:ml-8 justify-center">
                  <div className="font-bold uppercase text-center md:text-left lg:text-left xl:md:text-left">
                    <h4 className="text-black text-base">{goodStudent.nameStudent}</h4>
                    <span className="text-gray-500 text-sm">{goodStudent.jobPosition}</span>
                  </div>
                  <div className="sogan__body--description">
                    <p className="mx-14 text-sm font-medium italic mb-10">
                      {goodStudent.slogan}
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
