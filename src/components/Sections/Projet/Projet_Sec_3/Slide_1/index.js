import React from "react"
import PropTypes from "prop-types"
import {
  FirstSlideContainer,
  FirstSliderContent,
  FirstSliderBodyText,
} from "./styles"

import Text from "../../../../Utilities/Text"
import Fade from "react-reveal/Fade"

const Slider1 = ({ querySection3 }) => {
  return (
    <Fade bottom distance="30px">
      <FirstSlideContainer>
        <FirstSliderContent>
          <FirstSliderBodyText>
            <Text
              dangerouslySetInnerHTML={{ __html: querySection3.contenu.html }}
              className="Sec3-First__Slide__Content"
              type="bigText"
            />
          </FirstSliderBodyText>
          <img
            className="Objectif__Graphic"
            src={querySection3.graphic.localFile.url}
            alt="objectif graphic"
          />
        </FirstSliderContent>
      </FirstSlideContainer>
    </Fade>
  )
}

Slider1.propTypes = {
  querySection3: PropTypes.object,
}

export default Slider1
