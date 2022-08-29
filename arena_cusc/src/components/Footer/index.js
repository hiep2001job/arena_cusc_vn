import facebook from '../../assets/images/Footer/icon/facebook.png';
import zalo from '../../assets/images/Footer/icon/zalo.png';
import youtube from '../../assets/images/Footer/icon/youtube.jpg';
import instagram from '../../assets/images/Footer/icon/instagram.png';

import './Footer.css';
import Title from '../shared/Title';
function Footer() {
  return (
    <>
      <div className="relative bg-cover w-full h-[1000px] md:h-[1100px] 2xl:h-[1250px] footer__background">
        <div className="w-full absolute bottom-0">
          <div class="mt-5">
            <div class="flex justify-center">
              <p class="footer__icon">
                <a href="https://www.facebook.com/CUSC.CE/" target="_blank">
                  <img src={facebook} />
                </a>
              </p>
              <p class="footer__icon">
                <a href="" target="_blank">
                  <img src={zalo} />
                </a>
              </p>
              <div class="footer__icon">
                <a href="https://www.youtube.com/c/CUSCAPTECHCHANNEL" target="_blank">
                  <img src={youtube} />
                </a>
              </div>
              <div class="footer__icon">
                <a href="https://www.instagram.com/arena.cantho/" target="_blank">
                  <img src={instagram} />
                </a>
              </div>
            </div>
          </div>
          <div class="mt-5 px-5">
            <Title className="text-center font-bold uppercase mb-8 mt-10">
              TRUNG TÂM CÔNG NGHỆ PHẦN MỀM ĐẠI HỌC CẦN THƠ
            </Title>
            <p class="text-center font-bold text-base my-2">
              <div className="flex justify-center">
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>Khu III, ĐH Cần Thơ, 01 Lý Tự Trọng, Q. Ninh Kiều, TP. Cần Thơ</div>
              </div>
            </p>
            <p class="text-center font-bold text-base my-2">
              <div className="flex justify-center">
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                Email:
                <a className="ml-1" href="mailto:tuyensinh@cusc.ctu.edu.vn?subject=Tuyển sinh">
                  tuyensinh@cusc.ctu.edu.vn
                </a>
              </div>
            </p>
            <p class="text-center font-bold text-base my-2">
              <div className="flex justify-center">
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                Điện thoại:
                <a className="ml-1" href="tel:+842923835581">
                  0292 383 5581
                </a>
              </div>
            </p>
          </div>
          <div class="mt-5 flex items-center p-2 bg-black text-white">
            <p class="uppercase m-auto">ARENA MULTIMEDIA - CUSC © 2022</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
