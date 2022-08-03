import Slider from "react-slick";

import image1 from '../../assets/images/Hinh_cuu_SV/Untitled-3.png';
import image2 from '../../assets/images/Hinh_cuu_SV/Untitled-4.png';

import './GoodStudentExamples.css';
function GoodStudentExamples() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div>
                <h1 className="md:text-3xl font-bold uppercase text-center goodstudent__color">
                    Gương sinh viên thành đạt
                </h1>

                <div className="mt-5 text-base text-left goodstudent">
                    Với mục tiêu rõ ràng trong quá trình học tập, rèn luyện tại CUSC ARENA, nhiều cựu sinh viên đã bước đầu đã gặt hái được những thành công đáng khen ngợi. <br />
                    Chúng tôi muốn chia sẻ kinh nghiệm của các học viên, những tấm gương sáng cho các thế hệ sinh viên tiếp tục học tập và noi theo.
                </div>
                <Slider {...settings}>
                    <div class="md:flex rounded-xl p-8 md:p-0 goodstudent__border">
                        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={image1} alt="" width="384" height="512" />
                        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <div class="font-bold uppercase">
                                Huỳnh Trúc Mai
                            </div>
                            <div class="font-bold goodstudent__color2">
                                UI UX Designer - Cantho University Software Center
                            </div>
                            <p class="text-lg font-medium">
                                "Có hai lý do khiến tôi muốn học tập ở ngôi trường này. Thứ nhất, Arena Multimedia xây dựng chương trình đào tạo đa dạng với bốn học kỳ ở bốn lĩnh vực khác nhau trong ngành Mỹ thuật Đa phương tiện. Chỉ riêng điều này đã khiến tôi tò mò và hào hứng muốn khám phá..."
                            </p>
                        </div>
                    </div>
                    <div class="md:flex rounded-xl p-8 md:p-0 goodstudent__border">
                        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={image2} alt="" width="384" height="512" />
                        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <div class="font-bold uppercase">
                                Huỳnh Trúc Mai
                            </div>
                            <div class="font-bold goodstudent__color2">
                                UI UX Designer - Cantho University Software Center
                            </div>
                            <p class="text-lg font-medium">
                                "Có hai lý do khiến tôi muốn học tập ở ngôi trường này. Thứ nhất, Arena Multimedia xây dựng chương trình đào tạo đa dạng với bốn học kỳ ở bốn lĩnh vực khác nhau trong ngành Mỹ thuật Đa phương tiện. Chỉ riêng điều này đã khiến tôi tò mò và hào hứng muốn khám phá..."
                            </p>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default GoodStudentExamples;