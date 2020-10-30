import React from "react"
import PropTypes from "prop-types"
import {
  Sec5FirstSlideContainer,
  Sec5RightContainer,
  Sec5LeftContainer,
  FirstSlideContainer,
} from "./styles"

const Sec5FirstSlide = ({ query }) => {
  return (
    <Sec5FirstSlideContainer>
      <FirstSlideContainer>
        <Sec5LeftContainer>
          <p>{query.contenu.text}</p>
          <img src={query.graph.localFile.url} alt="" />
        </Sec5LeftContainer>
        <Sec5RightContainer>
          <h3>{query.salaire_brut}</h3>
          <p>{query.salaire_brut_number} $</p>
          <h3>{query.salaire_net}</h3>
          <p>{query.salaire_net_apres}</p>
          <p>{query.salaire_net_number} $</p>
          <p>{query.calcule}</p>
          <h3>{query.don}</h3>
          <p> {query.don_number} $</p>
          <h3>{query.retour_impots}</h3>
          <p>{query.retour_impot_number} $</p>
          <h3>{query.veritable_cout} $</h3>
          <p>{query.veritable_cout_number} $</p>
        </Sec5RightContainer>
      </FirstSlideContainer>
    </Sec5FirstSlideContainer>
  )
}

Sec5FirstSlide.propTypes = {
  query: PropTypes.object,
}

export default Sec5FirstSlide
