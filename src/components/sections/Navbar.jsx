import { useState } from "react";
import { logo } from "../../assets";
import { navLinks } from "../../constants";
import styles from "../../styles";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../../index.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [sticky, setsticky] = useState(false);
  const { pathname } = useLocation();

  const found = navLinks.some((el) => el.url === pathname);

  const changeColor = () => {
    if (window.scrollY >= 300) {
      setsticky(true);
    } else {
      setsticky(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        sticky
          ? `${styles.paddingX} ${styles.flexCenter} header-sticky`
          : `${styles.paddingX} ${styles.flexCenter}`
      }
    >
      <div className={`${styles.boxWidth}`}>
        <nav
          className={
            "w-full flex py-3 sm:py-5 justify-between items-center navbar"
          }
        >
          <img src={logo} alt="tefora-logo" className="h-[55px] sm:h-[65px]" />

          <ul className="list-none lg:flex hidden justify-end items-center flex-1">
            {found
              ? navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`cursor-pointer text-[16px] ml-10 navlink`}
                  >
                    <NavLink
                      className={
                        nav.url == pathname ? "activeUrl" : "nonActiveUrl"
                      }
                      to={nav.url}
                    >
                      {nav.title}
                    </NavLink>
                  </li>
                ))
              : navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`cursor-pointer text-[16px] ml-10 navlink`}
                  >
                    <NavLink
                      className={
                        nav.url === "/services" ? "activeUrl" : "nonActiveUrl"
                      }
                      to={nav.url}
                    >
                      {nav.title}
                    </NavLink>
                  </li>
                ))}

            <li>
              <Link to="" className={`${styles.btnStyle1} btn-1 ml-16`}>
                Let's Talk
              </Link>
            </li>
          </ul>

          <div className="lg:hidden flex flex-1 justify-end items-center">
            <div
              className={toggle ? `activeHamburger` : `hamburber`}
              alt="menu"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-dark absolute top-16 right-0 left-0 my-[12px]  min-w-[140px] sidebar`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col  gap-3">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer mb-3 text-[16px] mobile-nav `}
                  >
                    <NavLink to={nav.url}>{nav.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
