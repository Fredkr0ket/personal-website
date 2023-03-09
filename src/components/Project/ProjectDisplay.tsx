import { css } from "@emotion/css";
import React from "react";
import ProjectItems from "./ProjectItems";
import  projectData from "../../data/projects.json"
type project = {
    title: string
    body: string
    tools: string[]
    image: string
}
const ProjectDisplay = () => {
    const projects1 = projectData.projectData.map(project => {
        if (project.type == 1) {
            return (
                <ProjectItems
                title={project.title}
                body={project.body}
                tools={project.tools}
                image={project.img}
                />
            )
        }
    })
    const projects2 = projectData.projectData.map(project => {
        if (project.type == 2) {
            return (
                <ProjectItems
                title={project.title}
                body={project.body}
                tools={project.tools}
                image={project.img}
                />
            )
        }
    })
    return (
        <div id="projects" className={styles.root}>
            <h1 className={styles.title}>Projecten<br/></h1>
            <div className={styles.projects}>
                <div className={styles.projectGrid1}>
                    {projects1}
                </div>
                <div className={styles.projectGrid2}>
                    {projects2}
                </div>
            </div>
        </div>
    )
}

const styles = {
    root: css`
        scroll-padding-top: 20px;
        margin-top: 100px;
        margin-bottom: auto;
        margin-left: 5%;
        width: 90%;
        max-width: 90%;
        display: flex;
        flex-direction: column;
    `,
    title: css`
        font-family: rubiklight;
        font-size: 60px;
        padding-left: 5px;
        padding-bottom: 20px;
    `,
    projects: css`
        display: flex;
        flex-direction: row;
        width:95%;
        margin-left:2.5%;
    `,
    projectGrid1: css`
        max-width:49%;
        margin-right: 1%;

    `,
    projectGrid2: css`
        max-width:49%;
        margin-left: 1%;

    `,
}

export default ProjectDisplay