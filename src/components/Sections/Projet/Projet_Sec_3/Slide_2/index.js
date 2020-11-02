import React from "react"
import PropTypes from "prop-types"
import {
  SecondSliderContainer,
  SecondSliderContent,
  SecondSliderBodyText,
  PetitGraphContainer,
  PetitGraphContentPetit,
  GrandGraphContent,
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
              <div className="petit-cochon">
                <Text type="smallText800" className="city-Quebec">
                  Québec
                </Text>
                <p className="Price-Québec">130$</p>
                <p className="chiffre-description">
                  {querySection3P2.chiffre_description}
                </p>
                <img
                  src={querySection3P2.petit_graph.localFile.url}
                  alt=""
                  className="Objectif__Petit-Graph"
                />
              </div>
            </PetitGraphContentPetit>
          </PetitGraphContainer>
          <GrandGraphContent>
            <div className="grand-cochon">
              <Text type="smallText800" className="city-Canada">
                Canada
              </Text>
              <p className="Price-Canada">300$</p>
              <img
                src={querySection3P2.grand_graph.localFile.url}
                alt=""
                className="Objectif__Grand-Graph"
              />
            </div>
          </GrandGraphContent>
        </SecondSliderBodyText>
      </SecondSliderContent>
    </SecondSliderContainer>
  )
}

Slider2.propTypes = {
  querySection3P2: PropTypes.object,
}

export default Slider2
