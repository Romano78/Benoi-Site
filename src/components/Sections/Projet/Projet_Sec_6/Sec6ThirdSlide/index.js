import React from "react"
import PropTypes from "prop-types"
import Text from "~/components/Utilities/Text"
import Fade from "react-reveal/Fade"

import {
  Section6ThirdSlideContainer,
  Section6ThirdText,
  Section6ThirdImg,
} from "./styles"

const Sec6ThirdSlide = ({ query }) => {
  return (
    <Fade bottom distance="30px">
      <Section6ThirdSlideContainer>
        <Section6ThirdText>
          <Text type="bigText" className="section6-3slide-text">
            {query.information}
          </Text>
        </Section6ThirdText>
        <Section6ThirdImg>
          <img src={query.graph.localFile.url} alt="" />
        </Section6ThirdImg>
      </Section6ThirdSlideContainer>
    </Fade>
  )
}

Sec6ThirdSlide.propTypes = {
  query: PropTypes.object,
}

export default Sec6ThirdSlide
