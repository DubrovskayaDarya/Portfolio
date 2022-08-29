import React from "react";
import style from './ProjectBlock.module.css'
import {ProjectItem} from "./ProjectItem/ProjectItem";
import t from '../../common/styles/Title.module.css'

export const ProjectsBlock = () => {

    return (
        <div className={style.mainContainer}>
            <div className={style.projectsContainer}>
                <h2 className={t.title}> MY PROJECTS </h2>
                <div className={style.projects}>
                    <ProjectItem projectTitle={'Social Network'} projectDescription={'Technologies used: React, Redux, REST API, axios, react-redux, react-paginate, react-router-dom v6, redux-thunk.'}/>
                    <ProjectItem projectTitle={'ToDoList'} projectDescription={'Used technologies: React, TypeScript, Redux was used as state management, REST API, redux-thunk, axios requests. The Material-UI library was used to create the design. The application meets the requirements of the FLUX architecture.'}/>
                </div>
            </div>

        </div>
    )

}