import React from "react"
import PropTypes from "prop-types"
// import Text from "~/components/Utilities/Text"
import Title from "~/components/Utilities/Title"
import Fade from "react-reveal/Fade"

import {
  Sec6SecondSlideContainer,
  Sec6SecondLeftSlide,
  Sec6SecondRightSlide,
  Sec6SecondLeftTitle,
  Sec6SecondLeftImg,
  Sec6SecondRightText,
} from "./styles"
import Icon from "~/components/Icon"

const Sec6SecondSlide = ({ query }) => {
  return (
    <Fade bottom distance="30px">
      <Sec6SecondSlideContainer>
        <Sec6SecondLeftSlide>
          <Sec6SecondLeftTitle>
            <Title type="heading2" as="h2">
              {query.information}
            </Title>
          </Sec6SecondLeftTitle>
          <Sec6SecondLeftImg>
            <img src={query.graph.localFile.url} alt="" />
          </Sec6SecondLeftImg>
        </Sec6SecondLeftSlide>
        <Sec6SecondRightSlide>
          {query.listes.map((info, index) => {
            return (
              <Sec6SecondRightText key={index}>
                <Icon type="option" />
                <div
                  dangerouslySetInnerHTML={{ __html: info.list_text.html }}
                  className="Sec6-Second-Right-Container"
                  type="body"
                />
              </Sec6SecondRightText>
            )
          })}
        </Sec6SecondRightSlide>
      </Sec6SecondSlideContainer>
    </Fade>
  )
}

Sec6SecondSlide.propTypes = {
  query: PropTypes.object,
}

export default Sec6SecondSlide
