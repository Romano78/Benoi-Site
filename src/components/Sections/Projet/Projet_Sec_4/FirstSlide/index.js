import React from "react"
import PropTypes from "prop-types"
// import Title from "../../../../Utilities/Title"
import Text from "../../../../Utilities/Text"
import {
  FirstSlideSec4Container,
  SlideSec4LeftContainer,
  SlideSec4RightContainer,
  SlideSec4LeftBody,
} from "./styles"

const FirstSlideSection4 = ({ query }) => {
  return (
    <FirstSlideSec4Container>
      <SlideSec4LeftContainer>
        <SlideSec4LeftBody>
          <Text
            dangerouslySetInnerHTML={{
              __html: query.titre.html,
            }}
            className=""
          />
          <p>{query.phrase}</p>
          <Text
            dangerouslySetInnerHTML={{
              __html: query.content.html,
            }}
            className=""
          />
        </SlideSec4LeftBody>
      </SlideSec4LeftContainer>
      <SlideSec4RightContainer>
        <img src={query.graphic.localFile.url} alt="" />
      </SlideSec4RightContainer>
    </FirstSlideSec4Container>
  )
}

FirstSlideSection4.propTypes = {
  query: PropTypes.object,
}

export default FirstSlideSection4
