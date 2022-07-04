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
                    <ProjectItem projectTitle={'Social Network'} projectDescription={'something1'}/>
                    <ProjectItem projectTitle={'ToDoList'} projectDescription={'something2'}/>
                </div>
            </div>

        </div>
    )

}