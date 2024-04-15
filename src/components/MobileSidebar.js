import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/MobileNavbar.css";
import SidebarRow from "./SidebarRow";

export default function MobileSidebar() {


  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <Link to="#" className="ec-header-btn ec-side-toggle d-lg-none">
        <MenuIcon fontSize="large" onClick={showSidebar} className="m-2 text-white" />
      </Link>
      <div className="navbar">
        <div className={sidebar ? "nav-manu active" : "nav-manu"}>
          <div
            className="navbar-toggle absolute -right-5  top-3 hover:font-bold  "
            onClick={showSidebar}
          >
            <Link
              to="#"
              className="menu-bars relative text-cyan-600 hover:text-orange-600 "
            >
              <CloseIcon />
            </Link>
          </div>
          <div className="nav-manu-items flex flex-col justify-between">
            <div>
              {/* <section className="border-b-2 flex items-center p-3 ">
                <div>
                  <Avatar />
                </div>
                <div className=" pl-3 ">
                  <Link className="no-underline" to="/signin">
                      <p className="m-0 text-lg font-bold">Log In</p>
                    </Link>
                </div>
              </section> */}
              <section className="border-b py-2">
                <div>
                  <Link className="dashboard" to="/">
                    <SidebarRow  title="Home" />
                  </Link>
                  <Link className="dashboard" to="/products">
                    <SidebarRow  title="Products" />
                  </Link>
                  <Link className="sidebar__link" to="/about-us">
                    <SidebarRow title="About us" />
                  </Link>

                  <Link className="sidebar__link" to="/our-process">
                    <SidebarRow
                     
                    title="Our process" />
                  </Link>
                  <Link className="sidebar__link" to="/contact">
                    <SidebarRow  title="Contact" />
                  </Link>

                  <Link className="sidebar__link" to="/faq">
                    <SidebarRow title="FAQ" />
                  </Link>
                  
                </div>
              </section>
            </div>
            <div className="pb-10 pl-4 ">
              {/* {userInfo ? (
                <section className="bottom-8 text-slate-400">
                  <div className="flex ">
                    <Settings
                      fontSize="small"
                      className={`mt-2 text-slate-400 `}
                    />
                    <button className="w-full flex items-center justify-between p-2  rounded-md focus:outline-none">
                      <span className={`text-sm font-medium  `}>Setting</span>
                    </button>
                  </div>
                  <Link
                    className=" no-underline text-slate-400 hover:text-slate-400 "
                    to="/"
                  
                  >
                    <div className="flex ">
                      <ExitToAppIcon
                        fontSize="small"
                        className={`mt-2 text-slate-400 `}
                      />
                      <button className="w-full flex items-center justify-between p-2  rounded-md focus:outline-none">
                        <span className={`text-sm font-medium`}>Logout</span>
                      </button>
                    </div>
                  </Link>
                </section>
              ) : (
                ""
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
