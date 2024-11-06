import React, { useEffect } from "react";
import s from "../Works/Works.module.scss";
import { scrollIcon } from "../../utils/ImgExport";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store/products/productSlice";

const Works = () => {

  const { items } = useSelector((state) => state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())

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
            <div className={s.works__box_bottom}> 
              {items?.map((el) => {
                <div className={s.itemfd}>
                  <h1>{el.title}</h1>
                </div>
              })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
