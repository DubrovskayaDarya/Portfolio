import React from "react";
import style from "./SkillItem.module.scss";
import t from "../../../common/styles/Title.module.css";

export const SkillItem = (props) => {
  return (
    <div className={style.container}>
      <div className={style.iconBlock}>
        <img alt={"skill logo"} className={style.icon} src={props.logo} />
      </div>
      <h4 className={t.title}>{props.name}</h4>
    </div>
  );
};
