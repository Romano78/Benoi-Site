import React from "react"
import PropTypes from "prop-types"

import { Section6ThirdSlideContainer } from "./styles"

const Sec6ThirdSlide = ({ query }) => {
  console.log("QUERY THIRD SLIDE", query)
  return (
    <Section6ThirdSlideContainer>
      <h1>{query.information}</h1>
      <img src={query.graph.localFile.url} alt="" />
    </Section6ThirdSlideContainer>
  )
}

Sec6ThirdSlide.propTypes = {
  query: PropTypes.object,
}

export default Sec6ThirdSlide
