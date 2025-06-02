import React from "react";
import s from "../Footer/Footer.module.scss";
import { discordIcon, githubIcon, instagramIcon } from "../../utils/ImgExport";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className="container">
        <div className={s.footer__box}>
          <div className={s.footer__box_one}>
            <p>© 2023 Sunnat Azizbekov. All rights reserved.</p>
          </div>
          <div className={s.footer__box_two}>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <ul className={s.footer__box_three}>
            <li>
              <a href="https://www.youtube.com/@azizbekov_s">
                <img src={instagramIcon} alt="" />{" "}
              </a>
            </li>
            <li>
              <a href="https://t.me/pythonwith">
                <img src={discordIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="https://github.com/sunnat111">
                <img src={githubIcon} alt="" />
              </a>
            </li>
          </ul>
          <div className={s.footer__box_four}>
            <p>Design By</p>
            <a href="/portfolio/about">Sunnat</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
