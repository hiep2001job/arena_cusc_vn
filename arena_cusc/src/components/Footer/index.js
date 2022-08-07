// import background from '../../assets/images/Footer_background.png';
import facebook from '../../assets/images/icon/facebook.png';
import zalo from '../../assets/images/icon/zalo.png';
import youtube from '../../assets/images/icon/youtube.jpg';
import instagram from '../../assets/images/icon/instagram.png';

import './Footer.css';
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
                    <div class="mt-5">
                        <div>
                            <h1 class="text-center font-bold uppercase text-3xl my-5">TRUNG TÂM CÔNG NGHỆ PHẦN MỀM ĐẠI HỌC CẦN THƠ</h1>
                            <p class="text-center font-bold text-base">
                                <a className='flex justify-center' target="_blank" href="https://www.google.com/maps/place/Khu+3+-+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+C%E1%BA%A7n+Th%C6%A1/@10.0336471,105.779395,19z/data=!4m13!1m7!3m6!1s0x31a0881f7623d0c1:0x862e394bf5f45f48!2zMSDEkC4gTMO9IFThu7EgVHLhu41uZywgQW4gUGjDuiwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!3b1!8m2!3d10.0336799!4d105.7790983!3m4!1s0x31a0881fa25557af:0x350619b0d40fc3b4!8m2!3d10.0336736!4d105.779904?hl=vi-VN">
                                    <div className='mr-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    {/* <div> */}
                                        Khu III, ĐH Cần Thơ, 01 Lý Tự Trọng, Q. Ninh Kiều, TP. Cần Thơ
                                    {/* </div> */}
                                </a>
                            </p>
                            <p class="text-center font-bold text-base">
                                <div className='flex justify-center'>
                                    <div className='mr-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    Email:
                                    <a href="mailto:tuyensinh@cusc.ctu.edu.vn?subject=Tuyển sinh">
                                        tuyensinh@cusc.ctu.edu.vn
                                    </a>
                                </div>
                            </p>
                            <p class="text-center font-bold text-base">
                                <div className='flex justify-center'>
                                    <div className='mr-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    Điện thoại:
                                    <a href="tel:+842923835581">
                                        0292 383 5581
                                    </a>
                                </div>
                            </p>
                        </div>
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