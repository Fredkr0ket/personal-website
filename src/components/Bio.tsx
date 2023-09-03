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
                Ik ben Ferdo, een enthousiaste en gemotiveerde programmeur die graag bezig is met het programmeren van microcontrollers en ESP's, het ontwerpen van hardware en het uitvoeren van diverse IoT-projecten.
                </p>
            </div>
            <img
                className={styles.img}
                src="https://media.licdn.com/dms/image/D4E03AQEKsR7uhGwhtw/profile-displayphoto-shrink_800_800/0/1683647351892?e=1698278400&v=beta&t=_5JA3OmPS3aKke-0voT4wSNoKDW4zEyLMwb4wx67JAs"
                alt="Ferdo van Balen"
            />

        </div>
    )
}

const styles = {
    root: css`
    /* Original styling for desktop */
    margin-left: 5%;
    width: 90%;
    max-width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 50px;
    margin-bottom: 50px;
    
    @media (max-width: 1000px) {
        /* Mobile-friendly styling */
        flex-direction: column;
        align-items: center;
        margin-left: 0 auto;
        margin-right: 0 auto;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    `,
    textBox: css`
        /* Original styling for desktop */
        width: 60%;
        max-width: 60%;

        @media (max-width: 1000px) {
            /* Mobile-friendly styling */
            width: 80%;
            max-width: 80%;
        }
    `,
    title: css`
        /* Original styling for desktop */
        font-family: rubiklight;
        font-size: 60px;

        @media (max-width: 1000px) {
            /* Mobile-friendly styling */
            font-size: 30px;
        }
    `,
    text: css`
        /* Original styling for desktop */
        font-family: rubiklight;
        font-size: 22px;
        

        @media (max-width: 1000px) {
            /* Mobile-friendly styling */
            font-size: 18px;
            padding-bottom:20px;
        }
    `,
    img: css`
        width: 30%;
        border-radius: 999px;
        @media (max-width: 1400px) {
            /* Mobile-friendly styling */
            width:35%
        }
        @media (max-width: 1200px) {
            /* Mobile-friendly styling */
            width:40%
        }
        @media (max-width: 1000px) {
            /* Mobile-friendly styling */
            width:50%
        }
        @media (max-width: 800px) {
            /* Mobile-friendly styling */
            width:55%
        }
        @media (max-width: 600px) {
            /* Mobile-friendly styling */
            width:65%
        }
    `
}

export default Bio

