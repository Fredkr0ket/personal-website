import React from "react";
import { css } from "@emotion/css";
import { Image } from "@chakra-ui/react";
import "../assets/fonts/rubik/stylesheet.css"
const Bio = () => {
    return (
        <div className={styles.root}>
            <div className={styles.textBox}>
                <h1 className={styles.title}>Welkom</h1>
                <p className={styles.text}>
                    Ik ben Ferdo van Balen een enthousiaste en gemotiveerde programmeur. Ik focus mij vooral op het programeren van micro controllers en esp's en ik hou mij ook graag bezig met het programmeren van api's
                </p>
            </div>
            <Image
                width="40%"
                boxSize="350px"
                borderRadius='full'
                src="https://avatars.githubusercontent.com/u/101328024?v=4"
                alt="Ferdo van Balen"
            />

        </div>
    )
}

const styles = {
    root: css`
        margin-left:5%;
        width: 90%;
        max-width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        padding-top: 50px;

    `,
    textBox: css`
        width:60%;
        max-width: 60%;
    `,
    title: css`
        font-family: rubiklight;
        font-size: 60px;
    `,
    text: css`
        font-family: rubiklight;
        font-size: 22px;
    `
}

export default Bio

