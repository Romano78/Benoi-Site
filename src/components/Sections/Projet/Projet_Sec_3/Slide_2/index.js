import React from "react"
import PropTypes from "prop-types"
import Text from "../../../../Utilities/Text"
import {
  SecondSliderContainer,
  SecondSliderContent,
  PetitGraphContent,
  GrandGraphContent,
  SecondSliderHeader,
  SectionSliderBody,
  LinkSection3Text,
} from "./styles"

const Slider2 = ({ querySection3P2 }) => {
  console.log(querySection3P2)
  return (
    <SecondSliderContainer>
      <SectionSliderBody>
        <SecondSliderHeader>
          <Text
            dangerouslySetInnerHTML={{ __html: querySection3P2.text.html }}
            className="Sec3-Second__Slide__Content"
            type="bigText400"
          />
        </SecondSliderHeader>
        <SecondSliderContent>
          <PetitGraphContent>
            <div className="test">
              <Text type="smallText800" className="city-Quebec">
                {querySection3P2.ville}
              </Text>
              <p className="Price-Québec">{querySection3P2.chiffre_1} $</p>
              <p className="chiffre-description">
                {querySection3P2.chiffre_description}
              </p>
              <img
                src={querySection3P2.petit_graph.localFile.url}
                alt=""
                className="Objectif__Petit-Graph"
              />
            </div>
          </PetitGraphContent>
          <GrandGraphContent>
            <div className="test-2">
              <Text type="smallText800" className="city-Canada">
                {querySection3P2.pay}
              </Text>
              <p className="Price-Canada">{querySection3P2.chiffre_2} $</p>
              <img
                src={querySection3P2.grand_graph.localFile.url}
                alt=""
                className="Objectif__Grand-Graph"
              />
            </div>
          </GrandGraphContent>
        </SecondSliderContent>
        <LinkSection3Text>{querySection3P2.liens}</LinkSection3Text>
      </SectionSliderBody>
    </SecondSliderContainer>
  )
}

Slider2.propTypes = {
  querySection3P2: PropTypes.object,
}

export default Slider2
