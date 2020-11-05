import React from "react"
import PropTypes from "prop-types"
import Sec6FirstSlide from "./Sec6FirstSlide"
import Sec6SecondSlide from "./Sec6SecondSlide"
import Sec6ThirdSlide from "./Sec6ThirdSlide"
import { Section6Container } from "./styles"

const ProjetSection6 = ({
  querySection6P1: querySection6P1,
  querySection6P2: querySection6P2,
  querySection6P3: querySection6P3,
}) => {
  return (
    <Section6Container>
      <Sec6FirstSlide query={querySection6P1} />
      <Sec6SecondSlide query={querySection6P2} />
      <Sec6ThirdSlide query={querySection6P3} />
    </Section6Container>
  )
}

ProjetSection6.propTypes = {
  querySection6P1: PropTypes.object,
  querySection6P2: PropTypes.object,
  querySection6P3: PropTypes.object,
}

export default ProjetSection6
