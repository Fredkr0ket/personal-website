import { Card, CardBody, CardHeader, Divider, Img, useColorModeValue } from "@chakra-ui/react";
import { css } from "@emotion/css";
import React from "react";

interface Props{
    title: string
    body: string
    tools: string[]
    image: string
    href: string | undefined
}


const ProjectItems: React.FC<Props> = ({title, body, tools, image, href}) => {
    if (href) {
        return (
            <a href={href} target="_blank">
                <Card className={styles.card}>
                    <CardBody>
                        <Img
                            src={image}
                            width="100%"
                            rounded={5}
                        />
                        <CardHeader fontSize={30} fontFamily={"rubiklight"} fontWeight={"bold"} marginLeft={-5}>{title}</CardHeader>
                        <p className={styles.tools}>{tools}</p>
                        <Divider marginTop={2} marginBottom={3}/>
                        <p>{body}</p>
                    </CardBody>
                </Card>
            </a>
        )
    }
    return (
        <Card className={styles.card}>
            <CardBody>
                <Img
                    src={image}
                    width="100%"
                    rounded={5}
                />
                <CardHeader fontSize={30} fontFamily={"rubiklight"} fontWeight={"bold"} marginLeft={-5}>{title}</CardHeader>
                <p className={styles.tools}>{tools}</p>
                <Divider marginTop={2} marginBottom={3}/>
                <p>{body}</p>
            </CardBody>
        </Card>
    )
}

const styles = {
    
    card: css`
        margin-bottom: 2.5%
    `,
    tools: css`
        margin-top: -15px;
    `

}

export default ProjectItems