import React from "react"
import PropTypes from "prop-types"
import {
  AboutSectionContainer,
  AboutSectionText,
  AboutSectionFooter,
} from "./styles"
import Text from "~/components/Utilities/Text"
import ContactForm from "../../Form/ContactForm"

const About = ({ queryPage17 }) => {
  console.log("ABOUT PAGE", queryPage17.prismicPage17.data)
  return (
    <AboutSectionContainer>
      <AboutSectionText>
        <Text
          dangerouslySetInnerHTML={{
            __html: queryPage17.prismicPage17.data.contenu.html,
          }}
          className="About__Section__Content"
        />
      </AboutSectionText>
      <AboutSectionFooter>
        <Text type="body" className="contact-info">
          {queryPage17.prismicPage17.data.info}
        </Text>
      </AboutSectionFooter>
      <ContactForm />
      <Text type="smallText400" className="copy-right">
        {queryPage17.prismicPage17.data.copyright}
      </Text>
    </AboutSectionContainer>
  )
}

About.propTypes = {
  queryPage17: PropTypes.object,
}

export default About
