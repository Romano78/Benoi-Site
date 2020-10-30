import React from "react"
import PropTypes from "prop-types"
import {
  SecondSliderContainer,
  SecondSliderContent,
  SecondSliderBodyText,
  PetitGraphContainer,
  PetitGraphContentPetit,
  PetitGraphContent,
} from "./styles"

import Text from "../../../../Utilities/Text"

const Slider2 = ({ querySection3P2 }) => {
  return (
    <SecondSliderContainer>
      <SecondSliderContent>
        <Text
          dangerouslySetInnerHTML={{ __html: querySection3P2.text.html }}
          className="Sec3-Second__Slide__Content"
          type="bigText400"
        />
        <SecondSliderBodyText>
          <PetitGraphContainer>
            <PetitGraphContentPetit>
              <div style={{ paddingRight: "100px" }}>
                <Text type="smallText800" className="city-Quebec">
                  Québec
                </Text>
                <p className="Price-Québec">130$</p>
              </div>
              <img
                src={querySection3P2.petit_graph.localFile.url}
                alt=""
                className="Objectif__Petit-Graph"
              />
            </PetitGraphContentPetit>
          </PetitGraphContainer>
          <PetitGraphContent>
            <div>
              <Text type="smallText800" className="city-Canada">
                Canada
              </Text>
              <p className="Price-Canada">300$</p>
            </div>
            <img
              src={querySection3P2.grand_graph.localFile.url}
              alt=""
              className="Objectif__Grand-Graph"
            />
          </PetitGraphContent>
        </SecondSliderBodyText>
      </SecondSliderContent>
    </SecondSliderContainer>
  )
}

Slider2.propTypes = {
  querySection3P2: PropTypes.object,
}

export default Slider2
