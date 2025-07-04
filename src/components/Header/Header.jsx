import React, { useState } from "react";
import s from "../Header/Header.module.scss";
import {
  instagramIcon,
  discordIcon,
  githubIcon,
  searchIcon,
} from "../../utils/ImgExport";

  const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__main}>
          <div className={s.header__main_left}>
            <h2><a href="/portfolio/about">Sunnat Azizbekov</a></h2>
          </div>
          <div className={s.header__main_right}>
            <ul className={s.header__main_right_pages}>
              <li>
                <a href="/portfolio/">Home</a>
              </li>
              <li>
                <a href="/portfolio/about">About</a>
              </li>
              <li>
                <a href="/portfolio/skills">Skills</a>
              </li>
              <li>
                <a href="/portfolio/works">Works</a>
              </li>
              <li>
                <a href="/portfolio/contacts">Contacts</a>
              </li>
            </ul>
            <div className={s.header__main_right_search}>
              <input type="text" className={s.header__main_right_input} />
              <img src={searchIcon} alt="" />
            </div>
            <div className={s.header__main_right_list}>
              <a href="https://www.youtube.com/@azizbekov_s" target="_blank">
                <img
                  src={instagramIcon}
                  alt=""
                  className={s.header__main_right_list_img}
                />
                <p>Youtube</p></a>
              <a href="https://t.me/pythonwith" target="_blank">
                <img
                  src={discordIcon}
                  alt=""
                  className={s.header__main_right_list_img}
                />
                <p> Telegram</p></a>
              <a href="https://github.com/sunnat111" target="_blank">
                <img
                  src={githubIcon}
                  alt=""
                  className={s.header__main_right_list_img}
                />
                <p>Github</p></a>
            </div >
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
