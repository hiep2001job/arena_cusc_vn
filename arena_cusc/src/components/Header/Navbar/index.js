import React,{useState} from 'react';

import './navbar.css';

const Navbar = ({ minimal }) => {
  // Conditional class joining function
  const classNames = (...classes) => classes.filter(Boolean).join(' ');

  // Navigation
  const [activeMenuItem, setActiveMenuItem] = useState("#trangchu");
  const menuItems = [
    { name: 'Trang chủ', link: '#trangchu' },
    { name: 'Giới thiệu', link: '#gioithieu' },
    { name: 'Đào tạo', link: '#daotao' },
    { name: 'Liên thông', link: '#lienthong' },
    { name: 'Việc làm', link: '#vieclam' },
    { name: 'Ghi danh', link: '#ghidanh' },
    { name: 'Tin tức', link: '#tintuc' },
  ];

  return (
    <>    
       {/* navbar section */}
       <div className="navbar-wrapper w-full">
          <ul className={classNames('menu', minimal ? 'navbar-list-minimal' : '')}>
            {menuItems.map((item, index) => (
              <li key={index} onClick={() => setActiveMenuItem(item.link)}>
                <div
                  className={classNames(
                    item.link === activeMenuItem ? 'menu-item-active' : '',
                    'menu-item',
                    minimal ? 'menu-item-minimal' : '',
                  )}
                >
                  {item.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
    </>
  );
};
export default Navbar;
