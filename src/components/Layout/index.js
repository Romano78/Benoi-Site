import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Fade from "react-reveal/Fade"
import Header from "../Header"

export const Wrapper = styled.div``

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Fade delay={500} bottom distance="30px">
        {children}
      </Fade>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

export default Layout
