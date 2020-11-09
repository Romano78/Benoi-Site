import React from "react"
import PropTypes from "prop-types"
import Text from "../../../../Utilities/Text"
import Fade from "react-reveal/Fade"

import {
  SecondSliderContainer,
  SecondSliderContent,
  PetitGraphContent,
  GrandGraphContent,
  SecondSliderHeader,
  SectionSliderBody,
  LinkSection3Text,
  GrandGraphBody,
  PetitGraphBody,
} from "./styles"

const Slider2 = ({ querySection3P2 }) => {
  return (
    <Fade bottom distance="30px">
      <SecondSliderContainer>
        <SectionSliderBody>
          <SecondSliderHeader>
            {querySection3P2?.text?.html ? (
              <Text
                dangerouslySetInnerHTML={{ __html: querySection3P2.text.html }}
                className="Sec3-Second__Slide__Content"
                type="bigText400"
              />
            ) : (
              ""
            )}
          </SecondSliderHeader>
          <SecondSliderContent>
            <PetitGraphContent>
              <PetitGraphBody>
                <div>
                  {querySection3P2?.ville ? (
                    <Text type="smallText800" className="city-Quebec">
                      {querySection3P2.ville}
                    </Text>
                  ) : (
                    ""
                  )}
                  {querySection3P2?.chiffre_1 ? (
                    <p className="Price-Québec">
                      {querySection3P2.chiffre_1} $
                    </p>
                  ) : (
                    ""
                  )}
                  {querySection3P2?.chiffre_description ? (
                    <p className="chiffre-description">
                      {querySection3P2.chiffre_description}
                    </p>
                  ) : (
                    ""
                  )}
                  {querySection3P2?.petit_graph?.localFile.url ? (
                    <img
                      src={querySection3P2.petit_graph.localFile.url}
                      alt=""
                      className="Objectif__Petit-Graph"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </PetitGraphBody>
            </PetitGraphContent>
            <GrandGraphContent>
              <GrandGraphBody>
                {querySection3P2?.pay ? (
                  <Text type="smallText800" className="city-Canada">
                    {querySection3P2.pay}
                  </Text>
                ) : (
                  ""
                )}
                {querySection3P2?.chiffre_2 ? (
                  <p className="Price-Canada">{querySection3P2.chiffre_2} $</p>
                ) : (
                  ""
                )}
                {querySection3P2?.grand_graph?.localFile?.url ? (
                  <img
                    src={querySection3P2.grand_graph.localFile.url}
                    alt=""
                    className="Objectif__Grand-Graph"
                  />
                ) : (
                  ""
                )}
              </GrandGraphBody>
            </GrandGraphContent>
          </SecondSliderContent>
          {querySection3P2?.liens ? (
            <LinkSection3Text>{querySection3P2.liens}</LinkSection3Text>
          ) : (
            ""
          )}
        </SectionSliderBody>
      </SecondSliderContainer>
    </Fade>
  )
}

Slider2.propTypes = {
  querySection3P2: PropTypes.object,
}

export default Slider2
