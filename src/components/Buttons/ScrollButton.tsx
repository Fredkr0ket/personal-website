import React from "react";
import { ArrowDownIcon } from '@chakra-ui/icons'
import { css } from "@emotion/css";
import "../../assets/fonts/rubik/stylesheet.css"

interface Props {
    target: string
    display: string
}

const ScrollButton: React.FC<Props> = ({target, display}) => {
    return (
        <a className={styles.root} href={`#${target}`}>
            <p>{display}</p>
            <ArrowDownIcon boxSize={6} />
        </a>
    )
}

export default ScrollButton

const styles ={
    root: css`
        text-align: center;

    `,
    text: css`
        font-family: rubiklight;
    `
}