import React from "react"
import PropTypes from "prop-types"
import {
  Sec3Slide3BodyContainer,
  Sec3Slide3Container,
  Sec3Slide3FirstGraphContainer,
  Sec3Slide3QuebecImg,
  Sec3Slide3CanadaImg,
  Sec3Slide3SecondGraphContainer,
} from "./styles"
import Text from "../../../../Utilities/Text"

const Slider3 = ({ querySection3P3 }) => {
  return (
    <Sec3Slide3Container>
      <Text
        dangerouslySetInnerHTML={{ __html: querySection3P3.text.html }}
        type="bigText400"
        className="Sec3__Slide3-Titre"
      />
      <Sec3Slide3BodyContainer>
        <Sec3Slide3FirstGraphContainer>
          <Sec3Slide3QuebecImg>
            <img src={querySection3P3.graphic_quebec.url} alt="" />
            <p className="test">Quebec</p>
            <p className="test-2">19.8 %</p>
          </Sec3Slide3QuebecImg>
        </Sec3Slide3FirstGraphContainer>

        <Sec3Slide3CanadaImg>
          <img src={querySection3P3.graphic_canada.localFile.url} alt="" />
          <p className="test">Canada</p>
          <p className="test-2">25 %</p>
        </Sec3Slide3CanadaImg>

        <Sec3Slide3SecondGraphContainer></Sec3Slide3SecondGraphContainer>
      </Sec3Slide3BodyContainer>
    </Sec3Slide3Container>
  )
}
Slider3.propTypes = {
  querySection3P3: PropTypes.object,
}

export default Slider3
