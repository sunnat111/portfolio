import React from "react";
import s from "./Aboutme.module.scss";
import { compIcon, scrollIcon } from "../../utils/ImgExport";

const Aboutme = () => {
  return (
    <div className={s.about}>
      <div className="container">
        <div className={s.about__box}>
          <button className={s.about__box_top}>
            <img src={scrollIcon} alt="" />
          </button>
          <div className={s.about__box_bottom}>
            <div className={s.about__box_bottom_left}>
              <div className={s.about__box_bottom_left_top}>
                <h2>About me</h2>
              </div>
              <div className={s.about__box_bottom_left_bottom}>
                <span>Hello!</span>
                <p >
                  My name is Sunnat and I specialize in web developement
                  that utilizes HTML, CSS, JS, PYTHON, DJANGO
                  and REACT etc. <br /> 
                  I am a highly motivated individual and eternal optimist
                  dedicated to writing clear, <br /> concise, robust code that
                  works. Striving to never stop learning and improving. <br />{" "}
                  When I'm not coding, I am writing blogs, reading, or picking
                  up some new hands-on <br />
                  art project like photography. <br /> I like to have my
                  perspective and belief systems challenged so that I see the
                  world <br /> through new eyes.
                </p>
              </div>
            </div>
            <img className={s.about__box_bottom_right} src={compIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
