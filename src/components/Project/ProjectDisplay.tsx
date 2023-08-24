import { css } from "@emotion/css";
import ProjectItems from "./ProjectItems";
import  projectData from "../../data/projects.json"

 
const ProjectDisplay = () => {
    console.log(projectData)
    const projects1 = projectData.projectData.map((project, index) => {
        if (index % 2 == 0) {
            return (
                <ProjectItems
                title={project.title}
                body={project.body}
                tools={project.tools}
                image={project.img}
                href={project.href}
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
                href={project.href}
                />
            )
        }
    })

    return (
        <div id="projects" className={styles.root}>
            <h1 className={styles.title}>Projecten<br/></h1>
            <div className={styles.projects}>
                <div className={styles.projectGrid}>
                    {projects1}
                </div>
                <div className={styles.projectGrid}>
                    {projects2}
                </div>
            </div>
        </div>
    )
}

const styles = {
    root: css`
        /* Original styling for desktop */
        max-width: 90%;
        margin-top: 100px;
        margin-bottom: auto;
        display: flex;
        flex-direction: column;
        margin-bottom: 100px;
        
        @media (max-width: 1000px) {
            /* Mobile-friendly styling */
            max-width:100%
            margin-top: 50px;
            margin-bottom: 50px;
        }
    `,
    title: css`
        /* Original styling for desktop */
        font-family: rubiklight;
        font-size: 60px;
        padding-left: 5px;
        padding-bottom: 20px;
        
        @media (max-width: 1000px) {
            /* Mobile-friendly styling */
            font-size: 30px;
            padding-left: 0;
            padding-bottom: 10px;
        }
    `,
    projects: css`
        /* Original styling for desktop */
        display: flex;
        flex-direction: row;
        
        @media (max-width: 1000px) {
            /* Mobile-friendly styling */
            flex-direction: column;
        }
    `,

    projectGrid: css`
        /* Original styling for desktop */
        max-width: 49%;
        margin-right: 1%;

        @media (max-width: 1000px) {
            /* Mobile-friendly styling */
            max-width: 100%;
            margin: 0;
        }
    `,
}

export default ProjectDisplay