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
                    Ik ben Ferdo een enthousiaste en gemotiveerde programmeur. Die graag bezig is met het programmeren van MicroComputer's en ESP's en het designen van hardware
                </p>
            </div>
            <Image
                width="40%"
                boxSize="350px"
                borderRadius='full'
                src="https://media.licdn.com/dms/image/D4E03AQEKsR7uhGwhtw/profile-displayphoto-shrink_800_800/0/1683647351892?e=1689206400&v=beta&t=wMqlPRIWUtnr_CtqFhdq5PH4_2U0ODllkQfdnF1N0lU"
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
        margin-top: 50px;
        margin-bottom: 50px;

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

