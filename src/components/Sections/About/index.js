import React from "react"
import PropTypes from "prop-types"
import {
  AboutSectionContainer,
  AboutSectionText,
  AboutSectionFooter,
} from "./styles"
import Text from "~/components/Utilities/Text"
import ContactForm from "../../Form/ContactForm"
import { WidthLimiterContainer } from "../../Layout/styles"

const About = ({ queryPage17 }) => {
  return (
    <WidthLimiterContainer>
      <AboutSectionContainer>
        <AboutSectionText>
          {queryPage17?.prismicPage17?.data?.contenu?.html ? (
            <div
              dangerouslySetInnerHTML={{
                __html: queryPage17.prismicPage17.data.contenu.html,
              }}
              className="About__Section__Content"
            />
          ) : (
            ""
          )}
        </AboutSectionText>
        <AboutSectionFooter>
          {queryPage17?.prismicPage17?.data?.info ? (
            <Text type="body" className="contact-info">
              {queryPage17.prismicPage17.data.info}
            </Text>
          ) : (
            ""
          )}
        </AboutSectionFooter>
        <ContactForm />
        {queryPage17?.prismicPage17.data.copyright ? (
          <Text type="smallText400" className="copy-right">
            {queryPage17.prismicPage17.data.copyright}
          </Text>
        ) : (
          ""
        )}
      </AboutSectionContainer>
    </WidthLimiterContainer>
  )
}

About.propTypes = {
  queryPage17: PropTypes.object,
}

export default About
