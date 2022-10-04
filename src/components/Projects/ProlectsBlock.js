import React from "react";
import style from './ProjectBlock.module.css'
import {ProjectItem} from "./ProjectItem/ProjectItem";
import t from '../../common/styles/Title.module.css'

export const ProjectsBlock = () => {

    return (
        <div id={'projects'} className={style.mainContainer}>
            <div className={style.projectsContainer}>
                <h2 className={t.title}> PROJECTS </h2>
                <div className={style.projects}>
                    <ProjectItem refer={'https://dubrovskayadarya.github.io/ToDoList/'} projectTitle={'ToDoList'} projectDescription={'Used technologies: React, TypeScript, Redux, REST API, redux-thunk, axios requests, Material-UI. The application meets the requirements of the FLUX architecture.'}/>
                    {/*<ProjectItem refer={'https://dubrovskayadarya.github.io/social-network/'} projectTitle={'Social Network'} projectDescription={'Technologies used: React, Redux, REST API, axios, react-redux, react-paginate, react-router-dom v6, redux-thunk.'}/>*/}
                    <ProjectItem refer={'https://anyagalkina.github.io/cards/'} projectTitle={'Educational Cards'} projectDescription={'Technologies used: React, Redux, REST API, axios, react-redux, react-paginate, react-router-dom v6, redux-thunk.'}/>
                </div>
            </div>

        </div>
    )

}