import React from "react"
import PropTypes from "prop-types"
import Text from "../../../../Utilities/Text"
import Title from "../../../../Utilities/Title"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import Fade from "react-reveal/Fade"

import {
  Sec5RightContainer,
  Sec5LeftContainer,
  FirstSlideContainer,
  Sec5LeftContainerText,
  Sec5RightList,
} from "./styles"

const Sec5FirstSlide = ({ query }) => {
  return (
    <Fade bottom distance="30px">
      <FirstSlideContainer>
        <Sec5LeftContainer>
          <Sec5LeftContainerText>
            <Text type="largeText">{query.contenu.text}</Text>
          </Sec5LeftContainerText>
          <img src={query.graph.localFile.url} alt="" />
        </Sec5LeftContainer>
        <Sec5RightContainer>
          <Sec5RightList>
            <Title as="h5" type="heading5">
              {query.salaire_brut}
            </Title>
            <Text type="listText">
              <span>
                <ArrowForwardIcon />
              </span>
              {query.salaire_brut_number}$
            </Text>
          </Sec5RightList>
          <Sec5RightList>
            <Title as="h5" type="heading5">
              {query.salaire_net}
            </Title>
            <Text type="listText" className="salaire-annuel-text">
              {query.salaire_net_apres}
            </Text>
            <Text type="listText">
              <span className="Arrow-Icon">
                <ArrowForwardIcon />
              </span>
              {query.salaire_net_number}$
            </Text>
            <Text className="salaire-annuel-calcule">{query.calcule}</Text>
          </Sec5RightList>
          <Sec5RightList>
            <Title as="h5" type="heading5">
              {query.don}
            </Title>
            <Text type="listText">
              <span>
                <ArrowForwardIcon />
              </span>
              {query.don_number}$
            </Text>
          </Sec5RightList>
          <Sec5RightList>
            <Title as="h5" type="heading5">
              {query.retour_impots}
            </Title>
            <Text type="listText">
              <span>
                <ArrowForwardIcon />
              </span>
              {query.retour_impot_number}$
            </Text>
          </Sec5RightList>
          <Sec5RightList>
            <Title as="h5" type="heading5">
              {query.veritable_cout}$
            </Title>
            <Text type="listText">
              <span>
                <ArrowForwardIcon />
              </span>
              {query.veritable_cout_number}$
            </Text>
          </Sec5RightList>
        </Sec5RightContainer>
      </FirstSlideContainer>
    </Fade>
  )
}

Sec5FirstSlide.propTypes = {
  query: PropTypes.object,
}

export default Sec5FirstSlide
