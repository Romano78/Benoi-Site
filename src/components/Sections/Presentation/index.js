import React from "react"
import PropTypes from "prop-types"
import Text from "../../Utilities/Text"
import Title from "../../Utilities/Title"
import { HomeSectionContainer } from "./styles"

const Presentation = ({ query: { groupLinks } }) => {
  return (
    <>
      <HomeSectionContainer>
        <Title as="h2" type="heading3">
          {groupLinks.titre.text}
        </Title>
        <Text
          dangerouslySetInnerHTML={{ __html: groupLinks.text.html }}
          className="presentation-contenu"
          type="smallText500"
        />
        <Text type="bigText400" className="Last_Text">
          {groupLinks.derniere_phrase}
        </Text>
      </HomeSectionContainer>
    </>
  )
}

Presentation.propTypes = {
  query: PropTypes.object,
  menuLinks: PropTypes.object,
  groupLinks: PropTypes.object,
}

export default Presentation
