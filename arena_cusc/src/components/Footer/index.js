// import background from '../../assets/images/Footer_background.png';
import facebook from '../../assets/images/icon/facebook.png';
import zalo from '../../assets/images/icon/zalo.png';
import youtube from '../../assets/images/icon/youtube.jpg';
import instagram from '../../assets/images/icon/instagram.png';

import './Footer.css';
function Footer() {
    return (
        <>
            <div className="absolute w-full bg-[length:100%_100%] footer__background">
                <div className="mt-[750px]">
                    <div class="mt-5 footer__center">
                        <div class="flex footer__icon--center">
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
                    <div class="mt-5 footer__center">
                        <div>
                            <h1 class="text-center font-bold uppercase text-3xl my-5">TRUNG TÂM CÔNG NGHỆ PHẦN MỀM ĐẠI HỌC CẦN THƠ</h1>
                            <p class="text-center font-bold text-base">
                                <a className='flex justify-center' target="_blank" href="https://www.google.com/maps/place/Khu+3+-+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+C%E1%BA%A7n+Th%C6%A1/@10.0336471,105.779395,19z/data=!4m13!1m7!3m6!1s0x31a0881f7623d0c1:0x862e394bf5f45f48!2zMSDEkC4gTMO9IFThu7EgVHLhu41uZywgQW4gUGjDuiwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!3b1!8m2!3d10.0336799!4d105.7790983!3m4!1s0x31a0881fa25557af:0x350619b0d40fc3b4!8m2!3d10.0336736!4d105.779904?hl=vi-VN">
                                    <div className='w-[1rem] h-[1rem] mr-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" /></svg>
                                    </div>
                                    <div>
                                        Khu III, ĐH Cần Thơ, 01 Lý Tự Trọng, Q. Ninh Kiều, TP. Cần Thơ
                                    </div>
                                </a>
                            </p>

                            <p class="text-center font-bold text-base">
                                <div className='w-[1rem] h-[1rem] mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" /></svg>
                                </div>
                                Email:
                                <a href="mailto:tuyensinh@cusc.ctu.edu.vn?subject=Tuyển sinh">
                                    tuyensinh@cusc.ctu.edu.vn
                                </a>
                            </p>
                            <div class="text-center font-bold text-base">
                                <div className='w-[1rem] h-[1rem] mr-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" /></svg>
                                </div>
                                Điện thoại:
                                <a href="tel:+842923835581">
                                    0292 383 5581
                                </a>
                            </div>
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