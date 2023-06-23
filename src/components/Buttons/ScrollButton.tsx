import React from "react";
import { css } from "@emotion/css";
import "../../assets/fonts/rubik/stylesheet.css"
import { Icon, useColorModeValue } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

interface Props {
    target: string
    display: string
}

const ScrollButton: React.FC<Props> = ({target, display}) => {
    const styles = {
        root: css`
            padding: 15px;
            border-radius: 15px;
            text-align: center;
            transition: all 1s ease-in-out;
        `,
        text: css`
            font-family: rubiklight;
        `
   }
    return (
        <a className={styles.root} href={`#${target}`}>
            <p>{display}</p>
            <ArrowDownIcon />
        </a>
    )
}

export default ScrollButton