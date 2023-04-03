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
    const hoverColor = useColorModeValue('0,0,0,0.2', '255,255,255,0.2')
    const styles = {
        root: css`
            padding: 15px;
            border-radius: 15px;
            text-align: center;
            transition: all 1s ease-in-out;
            &:hover{
                margin-top: 20px;
                // border-radius: 25px;
                // background-color: rgba(${hoverColor});
            }
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

const styles ={
    root: css`
        padding: 15px;
        text-align: center;
    `,

}