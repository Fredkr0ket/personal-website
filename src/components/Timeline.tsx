import { css } from "@emotion/css";
import { left } from "@popperjs/core";
import { Timeline } from "antd";
import  timelineData from "../data/timeline.json"
const TimelineDisplay = () => {

    return (
        <div id="projects" className={styles.root}>
            <h1 className={styles.title}>Tijdlijn<br/></h1>
            <Timeline items={timelineData.items} mode={left} />
        </div>
    )
}

const styles = {
    root: css`
        max-width: 90%;
        width:90%;
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
    `
}

export default TimelineDisplay