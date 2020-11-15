import React from "react"
import PropTypes from "prop-types"
import Text from "../../../../Utilities/Text"
import Title from "../../../../Utilities/Title"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import Fade from "react-reveal/Fade"

import {
  Sec5FirstSlideContainer,
  Sec5RightContainer,
  Sec5LeftContainer,
  FirstSlideContainer,
  Sec5LefttList,
  Sec5SecondLeftContainerText,
  Sec5SecondLeftImg,
} from "./styles"

const Sec5SecondSlide = ({ query }) => {
  return (
    <Fade bottom distance="30px">
      <Sec5FirstSlideContainer>
        <FirstSlideContainer>
          <Sec5LeftContainer>
            <Sec5SecondLeftContainerText>
              <Text
                dangerouslySetInnerHTML={{
                  __html: query.contenu.html,
                }}
                type="largeText"
              />
            </Sec5SecondLeftContainerText>
            <Sec5SecondLeftImg>
              <img
                src={query.graph.localFile.url}
                alt=""
                className="graph-section5Slide2"
              />
            </Sec5SecondLeftImg>
          </Sec5LeftContainer>
          <Sec5RightContainer>
            <Sec5LefttList className="list-container">
              <Title as="h5" type="heading5">
                {query.taux_horaire}
              </Title>
              <Text type="listText">
                <span>
                  <ArrowForwardIcon />
                </span>
                {query.taux_horaire_number}$/h
              </Text>
            </Sec5LefttList>
            <Sec5LefttList className="list-container">
              <Title as="h5" type="heading5">
                {query.semaines_heures}
              </Title>
              <Text type="listText">
                <span>
                  <ArrowForwardIcon />
                </span>
                {query.semaine_heures_number}
              </Text>
            </Sec5LefttList>

            <Sec5LefttList className="list-container">
              <Title as="h5" type="heading5">
                {query.revenus_compagnie}
              </Title>
              <Text type="listText">
                <span>
                  <ArrowForwardIcon />
                </span>
                {query.revenus_compagnie_number}$
              </Text>
            </Sec5LefttList>
            <Sec5LefttList className="list-container">
              <Title as="h5" type="heading5">
                {query.don}
              </Title>
              <Text type="listText">
                <span>
                  <ArrowForwardIcon />
                </span>
                {query.don_number}$
              </Text>
            </Sec5LefttList>
            <Sec5LefttList className="list-container">
              <Title as="h5" type="heading5">
                {query.retour_impots}
              </Title>
              <Text type="listText" className="salaire-annuel-text-1">
                {query.retour_impot_info}
              </Text>
              <Text type="listText">
                <span>
                  <ArrowForwardIcon />
                </span>
                {query.retour_impots_number}$
              </Text>
            </Sec5LefttList>
            <Sec5LefttList className="list-container">
              <Title as="h5" type="heading5">
                {query.imposition_remuneration}
              </Title>
              <Text type="listText" className="salaire-annuel-text">
                {query.imposition_remuneration_info}
              </Text>
              <Text type="listText">
                <span>
                  <ArrowForwardIcon />
                </span>
                {query.imposition_remuneration_number}$
              </Text>
            </Sec5LefttList>
            <Sec5LefttList className="list-container">
              <Title as="h5" type="heading5">
                {query.veritable_cout_don}$
              </Title>
              <Text type="listText">
                <span>
                  <ArrowForwardIcon />
                </span>
                {query.veritable_cout_number}$
              </Text>
            </Sec5LefttList>
          </Sec5RightContainer>
        </FirstSlideContainer>
      </Sec5FirstSlideContainer>
    </Fade>
  )
}

Sec5SecondSlide.propTypes = {
  query: PropTypes.object,
}

export default Sec5SecondSlide
