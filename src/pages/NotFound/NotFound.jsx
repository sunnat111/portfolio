import React from "react";
import s from "../NotFound/NoteFound.module.scss";

const NotFound = () => {
  return (
    <div className={s.box}>
      <div className="container">
        <div className={s.box__main}>
          <h1 className={s.box__title}>404</h1>
          <div className={s.box_text}>
            <p className={s.box_text_reason}>Page not found</p>
            <p className={s.box_text_redirect}>
              The page you wanted to go to was not found. Perhaps an incorrect
              address was entered or the page was deleted
            </p>
            <a href="/portfolio/">Go to main page</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
