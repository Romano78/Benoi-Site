import React from "react"
import PropTypes from "prop-types"
import Title from "../../../Utilities/Title"
// import Text from "../../../Utilities/Text"
import Fade from "react-reveal/Fade"

import {
  Section2Container,
  Sec2FirstSlideContainer,
  Sec2SecondSliderContainer,
  Sec2FirstSliderContent,
  Sec2FirstSliderBodyText,
  Sec2FirstSliderImg,
  SecSecondSliderImg,
  Sec2SecondSliderContent,
  Sec2SecondSliderBodyText,
} from "./styles"

const ProjetSection2 = ({
  querySection2: querySection2,
  querySection2P2: querySection2P2,
}) => {
  return (
    <Fade bottom distance="30px">
      <Section2Container id="section-2">
        <Sec2FirstSlideContainer>
          <Sec2FirstSliderContent>
            <Title as="h2" type="heading2">
              {querySection2.titre.text}
            </Title>
            <Sec2FirstSliderBodyText>
              <div
                dangerouslySetInnerHTML={{
                  __html: querySection2.contenu.html,
                }}
                className="First__Slide__Content"
                type="body"
              />
            </Sec2FirstSliderBodyText>
          </Sec2FirstSliderContent>
          <Sec2FirstSliderImg>
            <img
              src={querySection2.graphic.localFile.url}
              alt="objectif graphic"
            />
          </Sec2FirstSliderImg>
        </Sec2FirstSlideContainer>
        <Sec2SecondSliderContainer id="section-3">
          {querySection2P2?.graphs?.length > 0 ? (
            <SecSecondSliderImg>
              {querySection2P2.graphs.map((img, index) => {
                return (
                  <img
                    src={img.graph.localFile.url}
                    alt=""
                    key={index}
                    className="Second__Section-Graph"
                  />
                )
              })}
            </SecSecondSliderImg>
          ) : (
            ""
          )}
          <Sec2SecondSliderContent>
            <Sec2SecondSliderBodyText>
              <div
                dangerouslySetInnerHTML={{
                  __html: querySection2P2.contenu.html,
                }}
                className="Second__Slide__Content"
                type="body"
              />
            </Sec2SecondSliderBodyText>
          </Sec2SecondSliderContent>
        </Sec2SecondSliderContainer>
      </Section2Container>
    </Fade>
  )
}

ProjetSection2.propTypes = {
  querySection2: PropTypes.object,
  querySection2P2: PropTypes.object,
}

export default ProjetSection2
