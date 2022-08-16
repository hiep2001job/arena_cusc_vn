import './AdmissionInfo.css';
function AdmissionInfo() {
  return (
    <>
      {/* <div>
        <hr className="absolute h-2 w-72 bg-primary-color mt-16" />
        <hr className="absolute h-2 w-72 bg-primary-color mt-16 ml-[1078px]" />
        <hr className="absolute bg-white border-[9px] border-solid border-primary-color rounded-full h-14 w-14 ml-[268px] mt-[38px] shadow-[0px_0px_10px_2px_rgb(0,0,0,0.13)]" />
        <hr className="absolute bg-white border-[9px] border-solid border-primary-color rounded-full h-14 w-14 ml-[1041px] mt-[38px] shadow-[0px_0px_10px_2px_rgb(0,0,0,0.13)]" />
        <div className="border-[2px] border-solid border-primary-color rounded-[30px] w-[777px] m-auto shadow-[0px_3px_15px_4px_rgb(0,0,0,0.19)]">
          <h1 className="bg-primary-color rounded-[25px] p-12 text-[30px] font-bold uppercase text-center text-white">
            Thông tin tuyển sinh năm 2022
          </h1>
          <div className="m-[30px_45px] leading-8">
            <div>
              <p className="font-bold">1. Chỉ tiêu tuyển sinh</p>
              <p>Xét tuyển và đào tạo 300 nhân lực CNTT cho doanh nghiệp phát triển và gia công phần mềm.</p>
            </div>
            <div>
              <p className="font-bold">2. Hình thức xét tuyển</p>
              <p>Xét học bạ hoặc Tốt nghiệp THPT (Ưu tiên hồ sơ nộp sớm)</p>
            </div>
            <div>
              <p className="font-bold">3. Hồ sơ xét tuyển</p>
              <p>3 ảnh 3x4, CMND photo, Học bạ THPT hoặc Giấy chứng nhận/bản sao bằng Tốt nghiệp THPT</p>
            </div>
            <div>
              <p className="font-bold">4. Cách thức đăng ký nhập học</p>
              <p>
                <span className="font-bold text-primary-color">- Cách 1:</span> Đăng ký online (trực tuyến) trước ngày
                14/07/2022{' '}
                <a href="#" className="font-bold text-primary-color">
                  {' '}
                  TẠI ĐÂY{' '}
                </a>
              </p>
              <p>
                <span className="font-bold text-primary-color">- Cách 2:</span> Đăng ký trực tiếp tại Phòng Tư vấn Trung tâm
                Công nghệ Phần mềm Đại học Cần Thơ
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="mt-2 mb-20 md:border-t-8 md:border-solid md:border-primary-color sm:border-none">
        <div className="mt-3 flex w-full">
          <div className="lg:w-[25%] md:w-[10%]  flex justify-end">
            <div className="md:block sm:hidden mt-[-43px] mr-[-28px] absolute bg-white border-[9px] border-solid border-primary-color rounded-full h-14 w-14 shadow-[0px_0px_10px_2px_rgb(0,0,0,0.13)]"></div>
          </div>
          <div className="md:mt-[-83px] md:m-0 md:w-[80%] sm:m-[2%] sm:w-full lg:w-[50%] border-2 border-primary-color rounded-[28px] shadow-[0px_3px_15px_4px_rgb(0,0,0,0.19)]">
            <h1 className="bg-primary-color rounded-[25px] p-12 text-[30px] font-bold uppercase text-center text-white">
              Thông tin tuyển sinh năm 2022
            </h1>
            <ul className="p-[4%] leading-8">
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
            <div className="md:block sm:hidden mt-[-43px] ml-[-28px] absolute bg-white border-[9px] border-solid border-primary-color rounded-full h-14 w-14  shadow-[0px_0px_10px_2px_rgb(0,0,0,0.13)]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdmissionInfo;
