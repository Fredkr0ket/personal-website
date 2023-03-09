import { Card, CardBody, CardHeader, Img } from "@chakra-ui/react";
import { css } from "@emotion/css";
import React from "react";

interface Props{
    title: string
    body: string
    tools: string[]
    image: string
}

const ProjectItems: React.FC<Props> = ({title, body, tools, image}) => {
    return (
        <Card className={styles.card}>
            <CardBody>
                <Img
                    src={image}
                 />
                 <CardHeader>{title}</CardHeader>
                 <p>{body}</p>
            </CardBody>
        </Card>
    )
}

const styles = {
    card: css`
        width:47.5%;
        max-width:47.5%;
        margin-left: 2.5%;
        margin-bottom: 2.5%;
    `

}

export default ProjectItems