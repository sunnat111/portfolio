import React, { useEffect } from "react";
import s from "../Works/Works.module.scss";
import { scrollIcon } from "../../utils/ImgExport";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../../store/projects/projectsSlice";
;


const Works = () => {

  const { items } = useSelector((state) => state.projects)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects())
  }, [])

  return (
    <div className={s.works}>
      <div className="container">
        <div className={s.works__box}>
          <div className={s.works__box_top}>
            <button className={s.works__box_top_scroll}>
              <img src={scrollIcon} alt="" />
            </button>
            <div className={s.works__box_top_title}>
              <h2>Works</h2>
              <p>I had the pleasure of working with these awesome projects</p>
            </div>
          </div>
          <div className={s.works__box_bottom} >
            {items?.map((el) => (
              <div className={s.works__box_bottom_card} key={el.id}>
                <h1 className={s.works__box_bottom_card_name}>{el.name}</h1>
                <a href={el.homepage} className={s.works__box_bottom_card_url}>view website</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
