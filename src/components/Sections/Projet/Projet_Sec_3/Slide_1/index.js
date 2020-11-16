import React from "react"
import PropTypes from "prop-types"
import {
  Sec3Slide1FirstSlideContainer,
  Sec3Slide1FirstSliderContent,
  Sec3Slide1FirstSliderBodyText,
} from "./styles"

// import Text from "../../../../Utilities/Text"
import Fade from "react-reveal/Fade"

const Slider1 = ({ querySection3 }) => {
  return (
    <Fade bottom distance="30px">
      <Sec3Slide1FirstSlideContainer>
        <Sec3Slide1FirstSliderContent>
          <Sec3Slide1FirstSliderBodyText>
            {querySection3?.contenu?.html ? (
              <div
                dangerouslySetInnerHTML={{ __html: querySection3.contenu.html }}
                className="Sec3-First__Slide__Content"
                type="bigText"
              />
            ) : (
              ""
            )}
          </Sec3Slide1FirstSliderBodyText>
          {querySection3?.graphic?.localFile?.url ? (
            <img
              className="Objectif__Graphic"
              src={querySection3.graphic.localFile.url}
              alt="objectif graphic"
            />
          ) : (
            ""
          )}
        </Sec3Slide1FirstSliderContent>
      </Sec3Slide1FirstSlideContainer>
    </Fade>
  )
}

Slider1.propTypes = {
  querySection3: PropTypes.object,
}

export default Slider1
