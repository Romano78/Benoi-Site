import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

export const Wrapper = styled.div``

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

export default Layout
