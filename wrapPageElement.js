const React = require("react")
import Layout from "./src/components/Layout/index"
import { ThemeProvider } from "emotion-theming"
import { theme } from "./src/utils/styles"
import { GlobalStyle } from "./src/utils/styles"

const wrapPageElement = ({ element, props }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout {...props}>{element}</Layout>
  </ThemeProvider>
)

export default wrapPageElement
