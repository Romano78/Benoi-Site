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
              {query?.contenu.html ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: query.contenu.html,
                  }}
                  type="largeText"
                  className="Sec5SecondLeft__Text"
                />
              ) : (
                ""
              )}
            </Sec5SecondLeftContainerText>
            {query?.graph?.localFile?.url ? (
              <Sec5SecondLeftImg>
                <img
                  src={query.graph.localFile.url}
                  alt=""
                  className="graph-section5Slide2"
                />
              </Sec5SecondLeftImg>
            ) : (
              ""
            )}
          </Sec5LeftContainer>
          <Sec5RightContainer>
            <Sec5LefttList className="list-container">
              {query?.taux_horaire ? (
                <Title as="h5" type="heading5">
                  {query.taux_horaire}
                </Title>
              ) : (
                ""
              )}
              {query?.taux_horaire_number ? (
                <Text type="listText">
                  <span>
                    <ArrowForwardIcon />
                  </span>
                  {query.taux_horaire_number}$/h
                </Text>
              ) : (
                ""
              )}
            </Sec5LefttList>
            <Sec5LefttList className="list-container">
              {query?.semaines_heures ? (
                <Title as="h5" type="heading5">
                  {query.semaines_heures}
                </Title>
              ) : (
                ""
              )}
              {query?.semaine_heures_number ? (
                <Text type="listText">
                  <span>
                    <ArrowForwardIcon />
                  </span>
                  {query.semaine_heures_number}
                </Text>
              ) : (
                ""
              )}
            </Sec5LefttList>
            <Sec5LefttList className="list-container">
              {query?.revenus_compagnie ? (
                <Title as="h5" type="heading5">
                  {query.revenus_compagnie}
                </Title>
              ) : (
                ""
              )}
              {query?.revenus_compagnie_number ? (
                <Text type="listText">
                  <span>
                    <ArrowForwardIcon />
                  </span>
                  {query.revenus_compagnie_number}$
                </Text>
              ) : (
                ""
              )}
            </Sec5LefttList>
            <Sec5LefttList className="list-container">
              {query?.don ? (
                <Title as="h5" type="heading5">
                  {query.don}
                </Title>
              ) : (
                ""
              )}
              {query?.don_number ? (
                <Text type="listText">
                  <span>
                    <ArrowForwardIcon />
                  </span>
                  {query.don_number}$
                </Text>
              ) : (
                " "
              )}
            </Sec5LefttList>
            <Sec5LefttList className="list-container">
              {query?.retour_impots ? (
                <Title as="h5" type="heading5">
                  {query.retour_impots}
                </Title>
              ) : (
                ""
              )}
              {query?.retour_impot_info ? (
                <Text type="listText" className="salaire-annuel-text-1">
                  {query.retour_impot_info}
                </Text>
              ) : (
                ""
              )}
              {query?.retour_impots_number ? (
                <Text type="listText">
                  <span>
                    <ArrowForwardIcon />
                  </span>
                  {query.retour_impots_number}$
                </Text>
              ) : (
                ""
              )}
            </Sec5LefttList>
            <Sec5LefttList className="list-container">
              {query?.imposition_remuneration ? (
                <Title as="h5" type="heading5">
                  {query.imposition_remuneration}
                </Title>
              ) : (
                ""
              )}
              {query?.imposition_remuneration_info ? (
                <Text type="listText" className="salaire-annuel-text">
                  {query.imposition_remuneration_info}
                </Text>
              ) : (
                ""
              )}
              {query?.imposition_remuneration_number ? (
                <Text type="listText">
                  <span>
                    <ArrowForwardIcon />
                  </span>
                  {query.imposition_remuneration_number}$
                </Text>
              ) : (
                ""
              )}
            </Sec5LefttList>
            <Sec5LefttList className="list-container">
              {query?.veritable_cout_don ? (
                <Title as="h5" type="heading5">
                  {query.veritable_cout_don}$
                </Title>
              ) : (
                ""
              )}
              {query?.veritable_cout_number ? (
                <Text type="listText">
                  <span>
                    <ArrowForwardIcon />
                  </span>
                  {query.veritable_cout_number}$
                </Text>
              ) : (
                ""
              )}
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
