import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import React from "react"

interface Props {
  url: string
}

const LightmodeSwitch = () => {
    const { toggleColorMode } = useColorMode()
    const svgState = useColorModeValue('moon', 'sun')
    if (svgState == 'moon') {
        return (
            <button onClick={toggleColorMode}>
                <svg width="38px" height="38px" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.8a9.796 9.796 0 0 1-1.245-19.513l1.286-.163-.843.984a8.285 8.285 0 0 0 8.519 13.383l1.252-.347-.696 1.096A9.755 9.755 0 0 1 12 21.8zM9.647 3.526a8.796 8.796 0 1 0 9.031 14.196 9.048 9.048 0 0 1-1.178.078A9.293 9.293 0 0 1 9.647 3.526z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
            </button>
        )
    } else {
        return(
            <button onClick={toggleColorMode}>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16C9.7944 16 8 14.2056 8 12C8 9.7944 9.7944 8 12 8C14.2056 8 16 9.7944 16 12C16 14.2056 14.2056 16 12 16Z" stroke="white"/>
                <path d="M12 3.5V5.5" stroke="white" stroke-linecap="round"/>
                <path d="M20.5 12H18.5" stroke="white" stroke-linecap="round"/>
                <path d="M5.5 12H3.5" stroke="white" stroke-linecap="round"/>
                <path d="M12 18.5V20.5" stroke="white" stroke-linecap="round"/>
                <path d="M16.5 7.5L18 6" stroke="white" stroke-linecap="round"/>
                <path d="M6 18L7.5 16.5" stroke="white" stroke-linecap="round"/>
                <path d="M6 6L7.5 7.5" stroke="white" stroke-linecap="round"/>
                <path d="M16.5 16.5L18 18" stroke="white" stroke-linecap="round"/>
            </svg>
            </button>
        )

    }
}

export default LightmodeSwitch