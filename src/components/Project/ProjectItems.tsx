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
                    width="100%"
                 />
                 <CardHeader>{title}</CardHeader>
                 <p>{body}</p>
            </CardBody>
        </Card>
    )
}

const styles = {
    card: css`
        margin-bottom: 2.5%
    `

}

export default ProjectItems