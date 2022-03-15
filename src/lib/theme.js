import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
    500: '#46a3f7',
  },
  tab: {
    100:'#46a3f7', // for background
    700:'#000000', // for text
  }
}

const theme = extendTheme({ colors })

export default theme;