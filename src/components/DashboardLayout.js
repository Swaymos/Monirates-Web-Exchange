import React, { Component, useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Sidebar from "./Sidebar";
import Header from "./Header";
import style from '../styling/styles.module.css'

export default function DashboardLayout(props){
    const [isOpened, setIsOpened] = useState(true);
    const [mobileIsOpened, setMobileIsOpened] = useState(false);

  return (
    <div className={style.dashboardLayout}>
      <div id={style.desktopHeader} className={style.header}>
        <div className={style.headerIcon}>
          <div className={style.menuIcon} onClick={() => setIsOpened(!isOpened)}>
            {isOpened ? (
              <MenuOpenIcon sx={{ fontSize: 28 }} />
            ) : (
              <MenuIcon sx={{ fontSize: 28 }} />
            )}
          </div>
        </div>
        <div className={style.headerContent}>
          <Header />
        </div>
      </div>
      <div id={style.mobileHeader} className={style.header}>
        <div className={style.headerIcon}>
          <div className={style.menuIcon} onClick={() => setMobileIsOpened(!mobileIsOpened)}>
            {mobileIsOpened ? (
              <MenuOpenIcon sx={{ fontSize: 28 }} />
            ) : (
              <MenuIcon sx={{ fontSize: 28 }} />
            )}
          </div>
        </div>
        <div className={style.headerContent}>
          <Header />
        </div>
      </div>
      <div className={style.container}>
        <aside id={style.desktopSidebar} className={`${isOpened ? "opened" : ""} drawer`}>
          <Sidebar />
        </aside>
        <aside id={style.mobileSidebar} className={`${mobileIsOpened ? "opened" : ""} drawer`}>
          <Sidebar />
        </aside>
        <div className={style.mainWrap}>{props.children}</div>
      </div>
    </div>
  );
}