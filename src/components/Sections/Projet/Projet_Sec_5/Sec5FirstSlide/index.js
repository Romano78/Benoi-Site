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
  Sec5LeftContainerImg,
} from "./styles"

const Sec5FirstSlide = ({ query }) => {
  return (
    <Fade bottom distance="30px">
      <FirstSlideContainer>
        <Sec5LeftContainer>
          <Sec5LeftContainerText>
            {query?.contenu?.text ? (
              <Text type="largeText">{query.contenu.text}</Text>
            ) : (
              ""
            )}
          </Sec5LeftContainerText>
          {query?.graph?.localFile?.url ? (
            <Sec5LeftContainerImg className="Sec5LeftContainerImg">
              <img
                src={query.graph.localFile.url}
                alt=""
                className="graph-section5Slide1"
              />
            </Sec5LeftContainerImg>
          ) : (
            ""
          )}
        </Sec5LeftContainer>
        <Sec5RightContainer>
          <Sec5RightList>
            {query?.salaire_brut ? (
              <Title as="h5" type="heading5">
                {query.salaire_brut}
              </Title>
            ) : (
              ""
            )}
            {query?.salaire_brut_number ? (
              <Text type="listText">
                <span>
                  <ArrowForwardIcon />
                </span>
                {query.salaire_brut_number}$
              </Text>
            ) : (
              ""
            )}
          </Sec5RightList>
          <Sec5RightList>
            {query?.salaire_net ? (
              <Title as="h5" type="heading5">
                {query.salaire_net}
              </Title>
            ) : (
              ""
            )}
            {query?.salaire_net_apres ? (
              <Text type="listText" className="salaire-annuel-text">
                {query.salaire_net_apres}
              </Text>
            ) : (
              ""
            )}
            {query?.salaire_net_number ? (
              <Text type="listText">
                <span className="Arrow-Icon">
                  <ArrowForwardIcon />
                </span>
                {query.salaire_net_number}$
              </Text>
            ) : (
              ""
            )}
            {query?.calcule ? (
              <Text className="salaire-annuel-calcule">{query.calcule}</Text>
            ) : (
              ""
            )}
          </Sec5RightList>
          <Sec5RightList>
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
              ""
            )}
          </Sec5RightList>
          <Sec5RightList>
            {query?.retour_impots ? (
              <Title as="h5" type="heading5">
                {query.retour_impots}
              </Title>
            ) : (
              ""
            )}
            {query?.retour_impot_number ? (
              <Text type="listText">
                <span>
                  <ArrowForwardIcon />
                </span>
                {query.retour_impot_number}$
              </Text>
            ) : (
              ""
            )}
          </Sec5RightList>
          <Sec5RightList>
            {query?.veritable_cout ? (
              <Title as="h5" type="heading5">
                {query.veritable_cout}$
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
              " "
            )}
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
