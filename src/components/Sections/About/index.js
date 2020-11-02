import React from "react"
import PropTypes from "prop-types"
import {
  AboutSectionContainer,
  AboutSectionText,
  AboutSectionFooter,
} from "./styles"
import Text from "~/components/Utilities/Text"
import ContactForm from "../../Form/ContactForm"

const About = ({ query: { page17 } }) => {
  return (
    <AboutSectionContainer>
      <AboutSectionText>
        <Text
          dangerouslySetInnerHTML={{
            __html: page17.contenu.html,
          }}
          className="About__Section__Content"
        />
      </AboutSectionText>
      <AboutSectionFooter>
        <Text type="body" className="contact-info">
          {page17.info}
        </Text>
      </AboutSectionFooter>
      <ContactForm />
      <Text type="smallText400" className="copy-right">
        {page17.copyright}
      </Text>
    </AboutSectionContainer>
  )
}

About.propTypes = {
  query: PropTypes.object,
  page17: PropTypes.object,
}

export default About
