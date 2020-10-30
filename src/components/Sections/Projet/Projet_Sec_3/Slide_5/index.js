import React from "react"
import PropTypes from "prop-types"
import Text from "../../../../Utilities/Text"
import {
  Slider5Sec3Container,
  Slider5Sec3RightContainer,
  Slider5Sec3LeftContainer,
  LeftContainerBody,
  CityCanadaContainer,
  CityQuebecContainer,
} from "./styles"

const Slider5 = ({ querySection3P5 }) => {
  return (
    <Slider5Sec3Container>
      <Slider5Sec3RightContainer>
        <div className="text">
          <Text
            dangerouslySetInnerHTML={{ __html: querySection3P5.contenu.html }}
            type="bigText400"
            className=""
          />
        </div>
        <div className="test">
          <img src={querySection3P5.graphic.localFile.url} alt="" />
        </div>
      </Slider5Sec3RightContainer>
      <Slider5Sec3LeftContainer>
        <h2>Moyenne des dons</h2>
        <LeftContainerBody>
          <CityQuebecContainer>
            <h3>Québec</h3>
            <p>834 $</p>
          </CityQuebecContainer>
          <CityCanadaContainer>
            <h3>Canada</h3>
            <p>1821 $</p>
          </CityCanadaContainer>
        </LeftContainerBody>
      </Slider5Sec3LeftContainer>
    </Slider5Sec3Container>
  )
}

Slider5.propTypes = {
  querySection3P5: PropTypes.object,
}

export default Slider5
