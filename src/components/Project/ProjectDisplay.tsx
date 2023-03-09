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
    const items = projectData.projectData.map(project => {
        return (
            <ProjectItems
            title={project.title}
            body={project.body}
            tools={project.tools}
            image={project.img}
            />
        )
    })
    return (
        <div className={styles.root}>
            <h1 className={styles.title}>Projecten<br/></h1>
            <div className={styles.projectGrid}>
                {items}
            </div>
        </div>
    )
}

const styles = {
    root: css`
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
    projectGrid: css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap
    `
}

export default ProjectDisplay