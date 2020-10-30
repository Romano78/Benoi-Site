import React from "react"
import PropTypes from "prop-types"
import { ProjetSecContainer, ProjetSec1Body } from "./styles"
import Title from "../../../Utilities/Title"
import Text from "../../../Utilities/Text"
const ProjetSection1 = ({ querySection1: querySection1 }) => {
  return (
    <ProjetSecContainer>
      <Title as="h2" type="heading2">
        {querySection1.titre.text}
      </Title>
      <ProjetSec1Body style={{ textAlign: "center" }}>
        <Text type="smallText700">Par {querySection1.prenom_1}</Text>
        <Text type="smallText700">{querySection1.prenom_2}</Text>
      </ProjetSec1Body>
    </ProjetSecContainer>
  )
}

ProjetSection1.propTypes = {
  querySection1: PropTypes.object,
}

export default ProjetSection1
