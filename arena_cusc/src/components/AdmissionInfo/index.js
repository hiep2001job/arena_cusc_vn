import './AdmissionInfo.css';
function AdmissionInfo() {
    return (
        <>
            <div>
                <hr className="absolute h-2 w-1/5 bg-[#ed3237] mt-16 hidden sm:block" />
                <hr className="absolute h-2 w-1/5 bg-[#ed3237] mt-16 ml-[80%] hidden sm:block" />
                <hr className="absolute hidden sm:block bg-white border-[9px] border-solid border-[#ed3237] rounded-full h-14 w-14 ml-[18%] lg:ml-[19%] mt-[38px] shadow-[0px_0px_10px_2px_rgb(0,0,0,0.13)]"/>
                <hr className="absolute hidden sm:block bg-white border-[9px] border-solid border-[#ed3237] rounded-full h-14 w-14 ml-[76%] lg:ml-[77%] mt-[38px] shadow-[0px_0px_10px_2px_rgb(0,0,0,0.13)]" />
                
                <div className="border-[2px] border-solid border-[#ed3237] rounded-[30px] w-7/12 m-auto shadow-[0px_3px_15px_4px_rgb(0,0,0,0.19)]">
                    <h1 className="bg-[#ed3237] rounded-[25px] p-12 text-base xl:text-3xl sm:text-xl font-bold uppercase text-center text-white">
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
                            <p><span className="font-bold text-[#ed3237]">- Cách 1:</span> Đăng ký online (trực tuyến) trước ngày 14/07/2022 <a href="" className="font-bold text-[#ed3237]"> TẠI ĐÂY </a></p>
                            <p><span className="font-bold text-[#ed3237]">- Cách 2:</span> Đăng ký trực tiếp tại Phòng Tư vấn Trung tâm Công nghệ Phần mềm Đại học Cần Thơ</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdmissionInfo;