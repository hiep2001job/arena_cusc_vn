import './CallToAction.css';
import Button from '../shared/Button';
import personBackground from '../../assets/images/call_to_action/illustration_hanh_trang_tuong_lai.png';
import Title from '../shared/Title';

function CallToAction() {
  return (
    <>
      <div
        className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] xl:h-[700px] mb-20 mt-[-100px] bg-callToAction z-[2]"
        style={{ backgroundImage: `url(${personBackground})` }}
      >
        <div className="absolute w-full mt-32 md:mt-64 mb-32 text-center">
          <Title className="mt-5 bg-white md:bg-transparent">Hành trang kỹ năng tương lai!</Title>
          <Button className="my-5 md:mt-12">Đăng ký ngay</Button>
        </div>
      </div>
    </>
  );
}

export default CallToAction;
