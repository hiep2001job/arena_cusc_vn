import React, { useEffect, useState } from 'react';

import aptechLogo from '../../assets/images/Logo/logo_aptech.png';
import dhctLogo from '../../assets/images/Logo/logo_ctu.png';
import cuscLogo from '../../assets/images/Logo/logo_cusc.png';
import arenaLogo from '../../assets/images/Logo/logo_arena.png';

import './header.css';
import './navbar.css';

const Header = () => {
  // Conditional class joining function
  const classNames = (...classes) => classes.filter(Boolean).join(' ');
  // Navigation
  const [activeMenuItem, setActiveMenuItem] = useState('#trangchu');
  const menuItems = [
    { name: 'Trang chủ', link: '#trangchu' },
    { name: 'Giới thiệu', link: '#gioithieu' },
    { name: 'Đào tạo', link: '#daotao' },
    { name: 'Liên thông', link: '#lienthong' },
    { name: 'Việc làm', link: '#vieclam' },
    { name: 'Ghi danh', link: '#ghidanh' },
    { name: 'Tin tức', link: '#tintuc' },
  ];
  // Mobile header navbar

  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 845);

  const isMobileController = () => {
    setIsMobile(window.innerWidth < 845);
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener('resize', isMobileController);
    return () => {
      window.removeEventListener('resize', isMobileController);
    };
  });

  //Minial Header
  const [minimal, setMinimal] = useState(false);

  const minimalControler = () => {
    setMinimal(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', minimalControler);
    return () => {
      window.removeEventListener('scroll', minimalControler);
    };
  }, []);

  // Screen state query
  const onMinimal = () => !isMobile && minimal;
  const onMobile = () => isMobile;

  return (
    <header className={classNames('z-30 w-screen', onMinimal ? 'fixed bg-white ' : 'relative')}>
      <div className="w-full">
        {/* main section */}
        <div className={classNames('header-section')}>
          {/* logo section on minimal state */}
          {minimal && (
            <div className="grow flex justify-between">
              <div className="grow">
                <img className="h-auto max-h-8" alt="logo" src={dhctLogo} />
              </div>
              <div className="grow">
                <img className="h-auto max-h-8" alt="logo" src={cuscLogo} />
              </div>
              <div className="grow">
                <img className="h-auto max-h-8" alt="logo" src={aptechLogo} />
              </div>
            </div>
          )}
          {/* logo  section*/}
          <div
            className={classNames(
              'logo-section-wrapper mt-5 grow-[2] flex justify-items-start sm:w-full md:w-auto  sm:justify-center md:static md:justify-between z-[52]',
              minimal && 'hidden',
              isMobile && open ? 'hidden' : '',
            )}
          >
            <div className="mx-2 grow-0 md:grow">
              <img alt="logo" className=" logo-section-img" src={dhctLogo} />
            </div>
            <div className="mx-2 grow-0 md:grow">
              <img alt="logo" className=" logo-section-img" src={cuscLogo} />
            </div>
            <div className="mx-2 grow-0 md:grow md:hidden">
              <img alt="logo" className=" logo-section-img" src={arenaLogo} />
            </div>
            <div className="mx-2 grow-0 md:grow">
              <img alt="logo" className=" logo-section-img" src={aptechLogo} />
            </div>
          </div>
          {/* Website name section on minimal state */}
          {!isMobile && minimal && (
            <div className="grow websitename-section-minimal">
              <div className="w-fit flex justify-center rounded-lg px-10 py-2  bg-[yellow]">
                {/* Arena logo */}
                <div className="grow min-w-fit ">
                  <img className="h-8 w-auto mx-auto " alt="logo" src={arenaLogo} />
                </div>
                {/* Text */}
                <div className="grow-[4] text-[0.6rem] leading-3 text-center uppercase">
                  <span className=" text-[#00275a] w-fit">Trung tâm công nghệ phần mềm đại học cần thơ</span>
                  <br />
                  <span className=" text-[#00275a] font-bold w-fit">
                    Trung tâm đào tạo mỹ thuật đa phương tiện quốc tế
                  </span>
                  <br />
                  <span className="font-bold text-red-600 w-fit">Arena multimedia</span>
                </div>
              </div>
            </div>
          )}

          {/* Website name section */}
          <div className={classNames('websitename-section hidden', minimal ? 'hidden' : 'md:block')}>
            <div className="outside-custom-border ">
              <div className="custom-border ">
                {/* Arena logo */}
                <div className="grow min-w-fit">
                  <img className="h-6 md:h-10 w-auto lg:h-14 float-right" alt="logo" src={arenaLogo} />
                </div>
                {/* Text */}
                <div className="websitename-text-wrapper">
                  <span className=" text-[#00275a] w-fit">Trung tâm công nghệ phần mềm đại học cần thơ</span>
                  <br />
                  <span className=" text-[#00275a] font-bold w-fit">
                    Trung tâm đào tạo mỹ thuật đa phương tiện quốc tế
                  </span>
                  <br />
                  <span className="font-bold text-red-600 w-fit">Arena multimedia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Block behind of website name section */}
          <div className={classNames('behind-block ', isMobile || minimal ? 'hidden' : '')}></div>

          {/* Buger Icon for mobile menu toggle */}
          <div className="grow-[1]  top-0 right-0 z-[50] md:hidden">
            <div id="menuToggle" className="my-auto float-right pr-5">
              <input
                type="checkbox"
                checked={open}
                onChange={() => {
                  setOpen(!open);
                }}
              />
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Search box hidden on small screen*/}
          <div className={classNames('searchbox-section', minimal ? 'hidden' : 'hidden md:block')}>
            <div className="searchbox-wrapper">
              <input className="searchbox-inp" placeholder="Tìm kiếm" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 cursor-pointer -translate-y-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Register button on minimal state */}
          <div className={classNames(!isMobile && minimal ? 'grow' : 'hidden')}>
            <button>register</button>
          </div>
        </div>

        {/* navbar section */}
        {/* Overlay when mobile menu displayed */}

        <div className={classNames('w-full mt-6 md:mt3', minimal && !isMobile ? 'navbar-wrapper-minimal' : '')}>
          <ul
            className={classNames(
              isMobile ? 'menu' : 'transform-none',
              !isMobile && minimal ? 'navbar-list-minimal ' : '',
              !isMobile && !minimal && 'md-menu',
              isMobile && open ? 'transform-none' : '-translate-x-[100%]',
            )}
          >
            {/* Mobile display logos */}
            {isMobile && open && (
              <>
                <div className=" flex justify-items-start h-20 px-5">
                  <div className="mx-2 grow-0 ">
                    <img alt="logo" className=" logo-section-img" src={dhctLogo} />
                  </div>
                  <div className="mx-2 grow-0">
                    <img alt="logo" className=" logo-section-img" src={cuscLogo} />
                  </div>
                  <div className="mx-2 grow-0  md:hidden">
                    <img alt="logo" className=" logo-section-img" src={arenaLogo} />
                  </div>
                  <div className="mx-2 grow-0 ">
                    <img alt="logo" className=" logo-section-img" src={aptechLogo} />
                  </div>
                </div>
                <hr className="menu-separator mt-5" />
              </>
            )}

            {/* Menu items */}
            {menuItems.map((item, index) => (
              <li key={index} onClick={() => setActiveMenuItem(item.link)}>
                <div
                  className={classNames(
                    isMobile && item.link === activeMenuItem && 'menu-item-active', //mobile
                    !isMobile && minimal && 'minimal-menu-item', //minimal
                    !isMobile && minimal && item.link === activeMenuItem && 'minimal-menu-item-active', //minimal
                    !isMobile && !minimal && 'md-menu-item', //normal
                    !isMobile && !minimal && item.link === activeMenuItem && 'md-menu-item-active', //normal
                  )}
                >
                  {item.name}
                </div>
              </li>
            ))}

            {/* Minimal display searchbox */}
            {!isMobile && minimal && (
              <div className="searchbox-wrapper-minimal">
                <input className="searchbox-input-minimal" placeholder="Tìm kiếm thông tin" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer -translate-y-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </ul>
        </div>
        {/* Overlay */}
        {isMobile && open && <div className="header-overlay"></div>}
      </div>
    </header>
  );
};

export default Header;
