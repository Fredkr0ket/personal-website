
import { extendTheme, useColorModeValue, type ThemeConfig } from '@chakra-ui/react'

const backgroundColor = useColorModeValue("white", "black")

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const theme = extendTheme({ config })

export default theme