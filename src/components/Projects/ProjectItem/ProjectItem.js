import React from "react";
import style from "./ProjectItem.module.scss";
import b from "../../../common/styles/ButtonStyle.module.scss";
import t from "../../../common/styles/Title.module.css";

export const ProjectItem = (props) => {
  return (
    <div className={style.container}>
      <div className={style.viewProject} style={props.style}>
        <button className={b.button} onClick={() => window.open(props.refer)}>
          VIEW
        </button>
      </div>
      <h4 className={t.title}>{props.projectTitle}</h4>
      <div className={style.description}>{props.projectDescription}</div>
    </div>
  );
};
