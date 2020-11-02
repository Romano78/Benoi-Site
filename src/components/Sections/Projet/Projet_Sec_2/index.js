import React from "react"
import PropTypes from "prop-types"
import Slider from "../../../Slider"
import Title from "../../../Utilities/Title"
import Text from "../../../Utilities/Text"
import Fade from "react-reveal/Fade"

import {
  Section2Container,
  FirstSlideContainer,
  SecondSliderContainer,
  FirstSliderContent,
  FirstSliderBodyText,
  FirstSliderImg,
  SecondSliderImg,
  SecondSliderContent,
  SecondSliderBodyText,
} from "./styles"

const ProjetSection2 = ({
  querySection2: querySection2,
  querySection2P2: querySection2P2,
}) => {
  return (
    <Fade bottom distance="30px">
      <Section2Container>
        <Slider slidesToShow={1} slidesToScroll={1}>
          <FirstSlideContainer>
            <FirstSliderContent>
              <Title as="h2" type="heading2">
                {querySection2.titre.text}
              </Title>
              <FirstSliderBodyText>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: querySection2.contenu.html,
                  }}
                  className="First__Slide__Content"
                />
              </FirstSliderBodyText>
            </FirstSliderContent>
            <FirstSliderImg>
              <img
                src={querySection2.graphic.localFile.url}
                alt="objectif graphic"
              />
            </FirstSliderImg>
          </FirstSlideContainer>
          <SecondSliderContainer>
            {querySection2P2?.graphs?.length > 0 ? (
              <SecondSliderImg>
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
              </SecondSliderImg>
            ) : (
              ""
            )}
            <SecondSliderContent>
              <SecondSliderBodyText>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: querySection2P2.contenu.html,
                  }}
                  className="Second__Slide__Content"
                />
              </SecondSliderBodyText>
            </SecondSliderContent>
          </SecondSliderContainer>
        </Slider>
      </Section2Container>
    </Fade>
  )
}

ProjetSection2.propTypes = {
  querySection2: PropTypes.object,
  querySection2P2: PropTypes.object,
}

export default ProjetSection2
