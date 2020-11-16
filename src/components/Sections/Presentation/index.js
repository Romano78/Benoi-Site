import React from "react"
import PropTypes from "prop-types"
import Text from "../../Utilities/Text"
// import Title from "../../Utilities/Title"
import { HomeSectionContainer } from "./styles"

const Presentation = ({ query: { groupLinks } }) => {
  return (
    <>
      <HomeSectionContainer>
        <Text type="smallText500" className="presentation-first-p">
          {groupLinks.titre.text}
        </Text>
        <div
          dangerouslySetInnerHTML={{ __html: groupLinks.text.html }}
          className="presentation-contenu"
        />
        <Text type="smallText500" className="Last_Text">
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
