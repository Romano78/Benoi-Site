import React from "react"
import PropTypes from "prop-types"
import Text from "../../../../Utilities/Text"
import Icon from "~/components/Icon"
import Fade from "react-reveal/Fade"

import {
  Slider5Sec3Container,
  Slider5Sec3RightContainer,
  Slider5Sec3LeftContainer,
  LeftContainerBody,
  CityCanadaContainer,
  CityQuebecContainer,
  Slider5Sec3RightImg,
} from "./styles"

const Slider5 = ({ querySection3P5 }) => {
  return (
    <Fade bottom distance="30px">
      <Slider5Sec3Container>
        <Slider5Sec3RightContainer>
          <div className="Slider5___Sec3Text">
            <Text
              dangerouslySetInnerHTML={{ __html: querySection3P5.contenu.html }}
              type="bigText400"
            />
          </div>
          <Slider5Sec3RightImg>
            <img src={querySection3P5.graphic.localFile.url} alt="" />
          </Slider5Sec3RightImg>
        </Slider5Sec3RightContainer>
        <Slider5Sec3LeftContainer>
          {querySection3P5?.titre?.text ? (
            <h2>{querySection3P5.titre.text}</h2>
          ) : (
            ""
          )}
          <LeftContainerBody>
            <CityQuebecContainer>
              {querySection3P5?.ville ? <h3>{querySection3P5.ville}</h3> : ""}
              {querySection3P5?.revenu_quebec ? (
                <p>{querySection3P5.revenu_quebec} $</p>
              ) : (
                ""
              )}
              <Icon type="line" />
            </CityQuebecContainer>
            <CityCanadaContainer>
              {querySection3P5?.pay ? <h3>{querySection3P5.pay}</h3> : ""}
              {querySection3P5?.revenue_canada ? (
                <p>{querySection3P5.revenue_canada} $</p>
              ) : (
                ""
              )}
            </CityCanadaContainer>
          </LeftContainerBody>
        </Slider5Sec3LeftContainer>
      </Slider5Sec3Container>
    </Fade>
  )
}

Slider5.propTypes = {
  querySection3P5: PropTypes.object,
}

export default Slider5
