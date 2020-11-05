import React from "react"
import PropTypes from "prop-types"
import Slider1 from "./Slide_1"
import Slider2 from "./Slide_2"
import Slider3 from "./Slide_3"
import Slider4 from "./Slide_4"
import Slider5 from "./Slide_5"
import { Section3Container } from "./styles"

const ProjetSection3 = ({
  querySection3: querySection3,
  querySection3P2: querySection3P2,
  querySection3P3: querySection3P3,
  querySection3P4: querySection3P4,
  querySection3P5: querySection3P5,
}) => {
  return (
    <Section3Container>
      <Slider1 querySection3={querySection3} />
      <Slider2 querySection3P2={querySection3P2} />
      <Slider3 querySection3P3={querySection3P3} />
      <Slider4 querySection3P4={querySection3P4} />
      <Slider5 querySection3P5={querySection3P5} />
    </Section3Container>
  )
}

ProjetSection3.propTypes = {
  querySection3: PropTypes.object,
  querySection3P2: PropTypes.object,
  querySection3P3: PropTypes.object,
  querySection3P4: PropTypes.object,
  querySection3P5: PropTypes.object,
}

export default ProjetSection3
