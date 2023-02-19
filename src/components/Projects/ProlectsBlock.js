import React from "react";
import style from "./ProjectBlock.module.scss";
import { ProjectItem } from "./ProjectItem/ProjectItem";
import t from "../../common/styles/Title.module.css";
import todoBack from "../../common/images/todolist-background.png";
import cardsBack from "../../common/images/cards-background.png";
import Slide from "react-reveal/Slide";

export const ProjectsBlock = () => {
  const todoBackStyle = {
    backgroundImage: `url(${todoBack})`,
  };

  const cardsBackStyle = {
    backgroundImage: `url(${cardsBack})`,
  };

  return (
    <div id={"projects"} className={style.mainContainer}>
      <Slide bottom>
        <div className={style.projectsContainer}>
          <h2 className={t.title}> PROJECTS </h2>
          <div className={style.projects}>
            <ProjectItem
              style={todoBackStyle}
              refer={"https://dubrovskayadarya.github.io/ToDoList/"}
              projectTitle={"ToDoList"}
              projectDescription={
                "Used technologies: React, TypeScript, Redux, REST API, redux-thunk, axios requests, Material-UI. The application meets the requirements of the FLUX architecture."
              }
            />
            {/*<ProjectItem refer={'https://dubrovskayadarya.github.io/social-network/'} projectTitle={'Social Network'} projectDescription={'Technologies used: React, Redux, REST API, axios, react-redux, react-paginate, react-router-dom v6, redux-thunk.'}/>*/}
            <ProjectItem
              style={cardsBackStyle}
              refer={"https://anyagalkina.github.io/cards/"}
              projectTitle={"Educational Cards"}
              projectDescription={
                "Technologies used: React, Redux, REST API, axios, react-redux, react-paginate, react-router-dom v6, redux-thunk."
              }
            />
          </div>
        </div>
      </Slide>
    </div>
  );
};
