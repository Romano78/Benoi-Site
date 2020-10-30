import React from "react"
import PropTypes from "prop-types"
import { ProjetSec4Container } from "./styles"
import FirstSlideSec4 from "./FirstSlide"
import SecondSlideSection4 from "./SecondSlide"
const ProjetSection4 = ({
  querySection4P1: querySection4P1,
  querySection4P2: querySection4P2,
}) => {
  return (
    <ProjetSec4Container>
      <FirstSlideSec4 query={querySection4P1} />
      <SecondSlideSection4 query={querySection4P2} />
    </ProjetSec4Container>
  )
}

ProjetSection4.propTypes = {
  querySection4P1: PropTypes.object,
  querySection4P2: PropTypes.object,
}

export default ProjetSection4
