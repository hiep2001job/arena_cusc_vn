import './CallToAction.css';
import Button from '../shared/Button';
import personBackground from '../../assets/images/call_to_action/illustration_hanh_trang_tuong_lai.png';
import Title from '../shared/Title';

function CallToAction() {
  return (
    <>
      <div
        className="relative w-full h-[550px] mt-[-100px] bg-callToAction"
        style={{ backgroundImage: `url(${personBackground})` }}
      >
        <div className="absolute w-full mt-52 text-center">
          <Title>Hành trang kỹ năng tương lai!</Title>
          <Button className="mt-5 md:mt-12">Đăng ký ngay</Button>
        </div>
      </div>
      {/* <div className="loader"></div> */}
    </>
  );
}

export default CallToAction;
