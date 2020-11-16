import React from "react"
import PropTypes from "prop-types"
import Text from "~/components/Utilities/Text"
import Title from "~/components/Utilities/Title"
import Icon from "~/components/Icon"
import Fade from "react-reveal/Fade"
import {
  Sec6FirstSlideContainer,
  Sec6FirstLeftSlide,
  Sec6FirstRightSlide,
  Sec6FirstLeftTitle,
  Sec6FirstLeftImg,
  Sec6FirstRightText,
} from "./styles"

const Sec6FirstSlide = ({ query }) => {
  return (
    <Fade bottom distance="30px">
      <Sec6FirstSlideContainer>
        <Sec6FirstLeftSlide>
          <Sec6FirstLeftTitle>
            <Title type="heading2" as="h2" className="Sec6FirstSlide--Title">
              {query.information}
            </Title>
          </Sec6FirstLeftTitle>

          <Sec6FirstLeftImg>
            <img src={query.graph.localFile.url} alt="" />
          </Sec6FirstLeftImg>
        </Sec6FirstLeftSlide>
        <Sec6FirstRightSlide>
          {query.listes.map((info, index) => {
            return (
              <Sec6FirstRightText key={index}>
                <Icon type="option" />
                <Text
                  dangerouslySetInnerHTML={{ __html: info.choix.html }}
                  className="Sec6-First__Slide__Content"
                  type="body"
                />
              </Sec6FirstRightText>
            )
          })}
        </Sec6FirstRightSlide>
      </Sec6FirstSlideContainer>
    </Fade>
  )
}

Sec6FirstSlide.propTypes = {
  query: PropTypes.object,
}

export default Sec6FirstSlide
