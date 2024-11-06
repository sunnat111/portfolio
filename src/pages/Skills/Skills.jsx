import React from "react";
import s from "../Skills/Skills.module.scss";
import {
  logoIcon,
  phoneIcon,
  compIconIcon,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
} from "../../utils/ImgExport";

const Skills = () => {
  return (
    <div className={s.skill}>
      <div className="container">
        <div className={s.skill__logo}>
          <img src={logoIcon} alt="" />
        </div>
        <div className={s.skill__title}>
          <h2>Skills</h2>
          <p>I am striving to never stop learning and improving</p>
        </div>
        <div className={s.skill__box}>
          <div className={s.skill__top}>
            <div className={s.skill__top_left}>
              <img
                src={compIconIcon}
                alt=""
                className={s.skill__top_left_icon}
              />
              <a
                href="https://en.wikipedia.org/wiki/Web_development"
                target="_blank"
                className={s.skill__top_left_name}
              >
                web developement
              </a>
              <p className={s.skill__top_left_description}>HTML·CSS·JS·REACT</p>
            </div>
            <div className={s.skill__top_right}>
              <img src={phoneIcon} alt="" className={s.skill__top_left_icon} />
              <a
                href="https://en.wikipedia.org/wiki/Mobile_app_development"
                target="_blank"
                className={s.skill__top_left_name}
              >
                App developement
              </a>
              <p className={s.skill__top_left_description}>iOS·Android</p>
            </div>
          </div>
          <div className={s.skill__bottom}>
            <div className={s.skill__bottom_html}>
              <div className={s.skill__bottom_html_img}>
                <img src={htmlIcon} alt="" />
              </div>
              <a href="https://ru.wikipedia.org/wiki/HTML" target="_blank">HTML</a>
            </div>
            <div className={s.skill__bottom_css}>
              <div className={s.skill__bottom_css_img}>
                <img src={cssIcon} alt="" />
              </div>
              <a href="https://ru.wikipedia.org/wiki/CSS" target="_blank">CSS</a>
            </div>
            <div className={s.skill__bottom_js}>
              <div className={s.skill__bottom_js_img}>
                <img src={jsIcon} alt="" />
              </div>
              <a href="https://learn.javascript.ru/" target="_blank">JS</a>
            </div>
            <div className={s.skill__bottom_react}>
              <div className={s.skill__bottom_react_img}>
                <img src={reactIcon} alt="" />
              </div>
              <a href="https://react.dev/" target="_blank">REACT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
