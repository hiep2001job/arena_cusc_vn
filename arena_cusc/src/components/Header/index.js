<<<<<<< HEAD
function Header() {
  return <h1 className="text-2xl underline"> Header ne </h1>;
}

=======
import React from 'react';

import aptechLogo from './TempFiles/logoAptech.png';
import dhctLogo from './TempFiles/logoDHCT.png';
import cuscLogo from './TempFiles/logoCUSC.png';
import arenaLogo from './TempFiles/logoArena.png';

import './header.css';
// import useState, { useRef } from 'react';

const Header = () => {
  const shadowStyles = {
    boxShadow: '5px 5px 8px black',
  };
  const menuItems = [
    { name: 'Trang chủ', link: '' },
    { name: 'Giới thiệu', link: '' },
    { name: 'Đào tạo', link: '' },
    { name: 'Liên thông', link: '' },
    { name: 'Việc làm', link: '' },
    { name: 'Ghi danh', link: '' },
    { name: 'Tin tức', link: '' },
  ];

  //   const [minimal, setMinimal] = useState(false);

  return (
    <header className="relative">
      <div className="container-none mx-auto ">
        {/* main section */}
        <div className="flex h-20 justify-between place-items-center">
          {/* logo */}
          <div className="flex flex-1 mt-5 ">
            <img alt="logo" className="mx-5 w-auto h-12 max-w-xs" src={dhctLogo} />
            <img alt="logo" className="mx-5 w-auto h-12" src={cuscLogo} />
            <img alt="logo" className="mx-5 w-auto h-12" src={aptechLogo} />
          </div>
          {/* Website name */}
          <div className="website-name flex-auto max-w-3xl">
            <div  className="outside-custom-border  z-10">
              <div className="flex justify-center custom-border px-16 box-border">
                {/* Arena logo */}
                <img className="w-auto h-14 mt-2" alt="logo" src={arenaLogo} />
                {/* Text */}
                <div className="text-center box uppercase">
                  <p className="">Trung tâm công nghệ phần mềm đại học cần thơ</p>
                  <p className="font-bold">Trung tâm đào tạo mỹ thuật đa phương tiện quốc tế</p>
                  <p className="font-bold text-red-600">Arena multimedia</p>
                </div>
              </div>
            </div>
            <div className="behind-block z-0"></div>
          </div>
          {/* Search box */}
          <div className="flex-1">
            <input type="search" placeholder="Search" />
          </div>
        </div>
        {/* navbar section */}
        <div className="mt-10 z-20 relative">
          <ul className="flex justify-center px-60 ">
            {menuItems.map((item, index) => (
              <li>
                <div
                  className="w-24 font-bold bg-transparent text-center mx-5
                          hover:border-yellow-500 
                            hover:border-2 hover:rounded-2xl cursor-pointer"
                >
                  {item.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

>>>>>>> origin/dev
export default Header;
