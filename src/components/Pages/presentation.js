import React from "react"
import PropTypes from "prop-types"
import { HomePageContainer } from "./styles"
import { WidthLimiterContainer } from "../Layout/styles"
import Presentation from "../../components/Sections/Presentation"

const PresentationLayout = ({
  data: {
    homePage: { data: query },
  },
}) => {
  const groupLinksPresentation = query?.group_links[0]?.page_link.document?.data

  return (
    <WidthLimiterContainer>
      <HomePageContainer>
        <Presentation
          query={{ groupLinks: groupLinksPresentation }}
        ></Presentation>
      </HomePageContainer>
    </WidthLimiterContainer>
  )
}

PresentationLayout.propTypes = {
  data: PropTypes.object,
}

export default PresentationLayout
