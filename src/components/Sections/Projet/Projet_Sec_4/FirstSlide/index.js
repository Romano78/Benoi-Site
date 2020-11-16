import React from "react"
import PropTypes from "prop-types"
import Title from "../../../../Utilities/Title"
// import Text from "../../../../Utilities/Text"
import {
  FirstSlideSec4Container,
  SlideSec4LeftContainer,
  SlideSec4RightContainer,
  SlideSec4LeftBody,
} from "./styles"

import Fade from "react-reveal/Fade"

const FirstSlideSection4 = ({ query }) => {
  return (
    <Fade bottom distance="30px">
      <FirstSlideSec4Container>
        <SlideSec4LeftContainer>
          <SlideSec4LeftBody>
            {query?.titre?.text ? (
              <Title as="h2" type="heading2" className="Principe-Title">
                {query.titre.text}
              </Title>
            ) : (
              ""
            )}
            {query?.phrase ? (
              <Title as="h3" type="heading3" className="Principe-SubTitle">
                {query.phrase}
              </Title>
            ) : (
              ""
            )}
            {query?.content?.html ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: query.content.html,
                }}
                type="bigText400"
                className="Sec4FirstSlide__Text"
              />
            ) : (
              ""
            )}
          </SlideSec4LeftBody>
        </SlideSec4LeftContainer>
        {query?.graphic?.localFile?.url ? (
          <SlideSec4RightContainer>
            <img src={query.graphic.localFile.url} alt="" />
          </SlideSec4RightContainer>
        ) : (
          ""
        )}
      </FirstSlideSec4Container>
    </Fade>
  )
}

FirstSlideSection4.propTypes = {
  query: PropTypes.object,
}

export default FirstSlideSection4
