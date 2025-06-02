import React from "react";
import s from "../Contacts/Contacts.module.scss";
import { scrollIcon, flyIcon } from "../../utils/ImgExport";
import Footer from "../../components/Footer/Footer";

const Contacts = () => {
  return (
    <div className={s.contacts}>
      <div className="container">
        <div className={s.contacts__box}>
          <div className={s.contacts__box_top}>
            <button className={s.contacts__box_top_icon}>
              <img src={scrollIcon} alt="" />
            </button>
            <div className={s.contacts__box_top_title}>
              <h2>Contact</h2>
              <p>I’m currently available for freelance work</p>
            </div>
          </div>
          <div className={s.contacts__box_content}>
            <button className={s.contacts__box_content_top}>
              <a href="https://t.me/S200917" target="_blank">Send me a message</a>
            </button>
            {/* <div className={s.contacts__box_content_main}>
              <label>
                Your name *
                <input
                  type="text"
                  placeholder="Enter your name"
                  className={s.contacts__box_content_main_input}
                />
              </label>
              <label>
                Your email *
                <input
                  type="text"
                  placeholder="Enter your email"
                  className={s.contacts__box_content_main_input}
                />
              </label>
              <label>
                Your message *
                <input
                  type="text"
                  placeholder="Enter your needs"
                  className={s.contacts__box_content_main_input}
                />
              </label>
            </div> */}
            <button className={s.contacts__box_content_bottom}>
              <a href="">Send Message</a>
              <img src={flyIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
