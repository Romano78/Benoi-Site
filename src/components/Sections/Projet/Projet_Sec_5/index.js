import React from "react"
import PropTypes from "prop-types"
import Sec5FirstSlide from "./Sec5FirstSlide"
import Sec5SecondSlide from "./Sec5SecondSlide"
import Slider from "../../../Slider"

const ProjetSection5 = ({
  querySection5P1: querySection5P1,
  querySection5P2: querySection5P2,
}) => {
  return (
    <Slider slidesToShow={1} slidesToScroll={1}>
      <Sec5FirstSlide query={querySection5P1} />
      <Sec5SecondSlide query={querySection5P2} />
    </Slider>
  )
}

ProjetSection5.propTypes = {
  querySection5P1: PropTypes.object,
  querySection5P2: PropTypes.object,
}

export default ProjetSection5
