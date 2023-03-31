import { css } from "@emotion/css";
import ProjectItems from "./ProjectItems";
import  projectData from "../../data/projects.json"

 
const ProjectDisplay = () => {

    const projects1 = projectData.projectData.map((project, index) => {
        if (index % 2 == 0) {
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
    const projects2 = projectData.projectData.map((project, index) => {
        if (index % 2 != 0) {
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
        max-width: 90%;
        scroll-padding-top: 20px;
        margin-top: 100px;
        margin-bottom: auto;
        display: flex;
        flex-direction: column;
        margin-bottom: 100px;
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