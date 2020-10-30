import React from "react"
import PropTypes from "prop-types"
import { AboutSectionContainer } from "./styles"

const About = ({ query: { page17 } }) => {
  console.log("ABOUT", page17)
  return (
    <AboutSectionContainer>
      <h1>{page17.contenu.text}</h1>
      <p>{page17.copyright}</p>
    </AboutSectionContainer>
  )
}

About.propTypes = {
  query: PropTypes.object,
  page17: PropTypes.object,
}

export default About
