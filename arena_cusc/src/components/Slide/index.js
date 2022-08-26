import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSlide, getNextImage } from '../../actions/slide';
import slideApi from '../../api/slide';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Slide.css';
import { imgFromDriveUrl } from '../../components/shared/Helper';

import Description from '../shared/Description';

function Slide() {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state) => state.slide.isLoaded);
  const title = useSelector((state) => state.slide.title);
  const description = useSelector((state) => state.slide.description);
  const sheets = useSelector((state) => state.slide.sheets);
  const nextImage = useSelector((state) => state.slide.nextImage);

  useEffect(() => {
    const fetchSlideList = async () => {
      try {
        const response = await slideApi.getAll();
        const action = {
          type: getAllSlide(),
          payload: { sheets: response },
        };

        dispatch(action);
      } catch (error) {}
    };

    fetchSlideList();
  }, []);

  const handleChangeImage = (next) => {
    const action = {
      type: getNextImage(),
      payload: { nextImage: next },
    };

    dispatch(action);
  };

  const settings = {
    className: 'center',
    infinite: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '40px',
    slidesToShow: 3,
    lazyLoad: true,
    swipe: false,
    arrows: false,
    speed: 1000,
    beforeChange: (current, next) => handleChangeImage(next),
    customPaging: () => <div className="customPaging"></div>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          swipe: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-[100%] h-[900px] md:h-[1200px] relative mt-[-25%] md:mt-[-45%] z-[1]">
        <div
          className="w-[100%] bg-slide px-5 md:px-28 md:bg-[length:100%_100%]"
          // style={{ backgroundImage: `url(${imgFromDriveUrl(sheets[nextImage].hinh_anh)})` }}
        >
          <div className="overlay-slide"></div>
          <div className="relative">
            <h1 className="md:text-3xl font-bold text-center uppercase text-[yellow] mt-40 md:mt-[14rem] lg:mt-[19rem] xl:mt-[28rem]">
              {title}
            </h1>
            <Description className="mt-5 text-white">{description}</Description>
          </div>

          <Slider {...settings} className="mt-5 md:mt-0">
            {sheets.map((image, index) => (
              <div key={index} className="img-slide">
                <img className="rounded-3xl" src={imgFromDriveUrl(image.hinh_anh)} alt={image.tieu_de} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Slide;
