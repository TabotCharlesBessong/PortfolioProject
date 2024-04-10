import { useMemo } from "react"
import {createTheme,StyledEngineProvider,ThemeProvider} from "@mui/material/styles"
import ComponentsOverrides from "./overrides"
import {CssBaseline} from "@mui/material"
import palette from "./palette"

ThemeConfig.propTypes = {
  children:PropTypes.node
}

const ThemeConfig = ({children}) => {
  const themeOptions = useMemo(() => ({
    palette
  }),[])

  const theme = createTheme(themeOptions)
  theme.components = ComponentsOverrides(theme)

  return (
    <StyledEngineProvider injectFirst >
      <ThemeProvider>
        <CssBaseline />
      {children}

      </ThemeProvider>
    </StyledEngineProvider> 
  )
}

export default ThemeConfig