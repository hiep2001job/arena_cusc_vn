import './AdmissionInfo.css';
function AdmissionInfo() {
  return (
    <>
      <div className="mt-2 mb-20 md:border-t-8 md:border-solid md:border-primary-color sm:border-none">
        <div className="mt-3 flex w-full">
          <div className="lg:w-[25%] md:w-[10%] flex justify-end">
            <div className="admission-left-cirle md:block sm:hidden mt-[-43px] mr-[-28px] absolute bg-white border-[9px] border-solid border-primary-color rounded-full h-14 w-14 shadow-[0px_0px_10px_2px_rgb(0,0,0,0.13)]"></div>
          </div>
          <div className="m-5 md:mt-[-83px] md:m-0 md:w-[80%] sm:m-[2%] sm:w-full lg:w-[52%] border-2 border-primary-color rounded-[28px] shadow-[0px_3px_15px_4px_rgb(0,0,0,0.19)] border-t-0">
            <h1 className="bg-primary-color rounded-[25px] p-8 md:p-12 text-xl md:text-3xl font-bold uppercase text-center text-white">
              Thông tin tuyển sinh năm 2022
            </h1>
            <ul className="pt-6 pb-12 px-12 leading-8">
              <li>
                <p className="font-bold">1. Chỉ tiêu tuyển sinh</p>
                <p>Xét tuyển và đào tạo 300 nhân lực CNTT cho doanh nghiệp phát triển và gia công phần mềm.</p>
              </li>
              <li>
                <p className="font-bold">2. Hình thức xét tuyển</p>
                <p>Xét học bạ hoặc Tốt nghiệp THPT (Ưu tiên hồ sơ nộp sớm)</p>
              </li>
              <li>
                <p className="font-bold">3. Hồ sơ xét tuyển</p>
                <p>3 ảnh 3x4, CMND photo, Học bạ THPT hoặc Giấy chứng nhận/bản sao bằng Tốt nghiệp THPT</p>
              </li>
              <li>
                <p className="font-bold">4. Cách thức đăng ký nhập học</p>
                <p>
                  <span className="font-bold text-primary-color">- Cách 1:</span> Đăng ký online (trực tuyến) trước ngày
                  14/07/2022&nbsp;
                  <a href="#" className="font-bold text-primary-color">
                    TẠI ĐÂY
                  </a>
                </p>
                <p>
                  <span className="font-bold text-primary-color">- Cách 2:</span> Đăng ký trực tiếp tại Phòng Tư vấn
                  Trung tâm Công nghệ Phần mềm Đại học Cần Thơ
                </p>
              </li>
            </ul>
          </div>
          <div className="lg:w-[25%] md:w-[10%] flex">
            <div className="admission-right-cirle md:block sm:hidden mt-[-43px] ml-[-28px] absolute bg-white border-[9px] border-solid border-primary-color rounded-full h-14 w-14  shadow-[0px_0px_10px_2px_rgb(0,0,0,0.13)]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdmissionInfo;
