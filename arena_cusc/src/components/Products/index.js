import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './products.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Title from '../shared/Title';
import Popup from 'reactjs-popup';
import ContentModal from '../shared/PopUpModal';

import CustomPaging from '../shared/CustomPaging';

import { apispreadsheets, imgFromDriveUrl } from '../shared/ApiSpreadSheets';

function Products() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sheet, setSheet] = useState([]);
  const [productsImage, setProductsImage] = useState([]);

  // FETCH DATA AND SET STATUS
  useEffect(() => {
    const sheetName = 'san_pham_noi_bat_cua_sinh_vien';
    fetch(`${apispreadsheets}/${sheetName}`)
      .then((res) => res.json())
      .then(
        (results) => {
          const imgArray = results[0].hinh_anh.split('\n');
          setProductsImage(imgArray);

          setIsLoaded(true);
          setSheet(results);
        },
        (error) => {
          console.log('error: ', error);
          setIsLoaded(false);
        },
      );
  }, []);
  //selected index by group
  const handleActiveGroup = (index) => {
    setActiveGroup(index);

    const imgArray = sheet[index].hinh_anh.split('\n');
    setProductsImage(imgArray);
  };
  //selected iamge
  const handselectedIamge = (index) => {
    setSelectedIamge(index);
  };

  const settings = {
    className: 'section-outstanding__slider',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    initialSlide: 0,
    arrows: false,
    infinite: false,
    rows: 2,
    dots: true,
    customPaging: () => <CustomPaging className="sm:mt-5 sm:p-10px px-2.5 ml-[-15px] translate-y-2/4" />,
    beforeChange: (current, next) => () => {
      setactiveItem(next);
      console.log(next);
    },
    responsive: [
      {
        breakpoint: 1198,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 844,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };
  const sytle = {
    width: '80%',
  };
  const [activeGroup, setActiveGroup] = useState(0);
  const [activeItem, setactiveItem] = useState(0);
  const [selectedIamge, setSelectedIamge] = useState(0);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div id="products px-5 xl:px-36">
        <div className="text-center ">
          <Title className="text-primary-color my-8 sm:text-3xl font-bold uppercase">
            sản phẩm nổi bật của sinh viên
          </Title>
          <p className=" justify-center text-center px-5">
            Sinh viên là niềm tự hào của chúng tôi. hãy cùng <span className="uppercase"> cusc arena</span> khám phá các
            sản phẩm tuyệt vời từ sinh viên!
          </p>
        </div>
        <div className="products-tab md:mx-[50px] m-0">
          {/* Header */}
          {/*  */}
          <div className="process-bar relative h-[50px] mt-[65px] w-full ">
            <ul className="w-full absolute justify-between content-center list-none mt-[-40px] z-[1] flex md:pt-[15px] md:flex-nowrap md:shadow-none  flex-wrap shadow-[0_0_10px_0px_#adb5bd] rounded-[15px]">
              {sheet.map((product, index) => (
                <li
                  key={index}
                  // ${ index === activeGroup ? 'bg-primary-color' : 'bg-white'}
                  className={`tag-header-item md:w-[20%] w-[33%] relative flex-auto md:m-0 ${
                    index === activeGroup ? 'active' : ''
                  }`}
                  onClick={() => {
                    index !== activeGroup && handleActiveGroup(index);
                  }}
                >
                  <div
                    className={`b-red flex justify-center items-center group-name uppercase text-center uppercase font-bold cursor-pointer md:h-[60px] md:text-base p-2.5 h-full w-full`}
                  >
                    {product.tieu_de}
                  </div>
                </li>
              ))}
            </ul>
            {/* horizontal line*/}
            <div>
              <div className="process-bar-line w-full m-auto bg-primary-color h-1 absolute md:top-[68px] top-[48px] md:block hidden"></div>
            </div>
          </div>
          {/* Content */}
          <div className="tab-content mt-20 w-full">
            <div className="tab-content-item">
              <Slider {...settings}>
                {/* start slide image */}
                {productsImage.map((image, index) => (
                  <Popup
                    contentStyle={sytle}
                    trigger={
                      <div key={`slide${index}`}>
                        <div className="box rounded-[20px] mx-[20px] my-[15px] overflow-hidden relative rounded-[20px] xl:h-[250px] lg:h-[200px] h-[220px] shadow-[0_0_10px_0px_#adb5bd]">
                          <img
                            className="product-slide-img rounded-[20px] bg-[#fdf34e] w-full h-full align-middle object-cover"
                            src={`${imgFromDriveUrl(image)}`}
                            alt={'image-' + index}
                          />
                          <div
                            onClick={() => handselectedIamge(index)}
                            className="overlay w-full h-full top-1/2 left-1/2 absolute translate-x-[-50%] translate-y-[-50%] rounded-[20px]"
                          ></div>
                        </div>
                      </div>
                    }
                    modal
                  >
                    {(close) => (
                      <ContentModal
                        content={
                          <>
                            {/* Begin Tab Menu */}
                            <div className="w-full">
                              <img
                                key={index}
                                className="product-slide-img rounded-[20px] bg-[#fdf34e] w-full h-full align-middle object-cover"
                                src={`${imgFromDriveUrl(productsImage[selectedIamge])}`}
                                alt={`products-img`}
                              />
                            </div>
                          </>
                        }
                      />
                    )}
                  </Popup>
                ))}
                {/* end slide image */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
