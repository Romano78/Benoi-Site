import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { HomePageContainer, HomeMenuLinks } from "./styles"
import { WidthLimiterContainer } from "../Layout/styles"

import Presentation from "../../components/Sections/Presentation"
import Projet from "../../components/Sections/Projet"

const IndexLayout = ({
  data: {
    homePage: { data: query },
  },
}) => {
  const menuLinks = query?.menu?.document?.data
  const groupLinksPresentation = query?.group_links[0]?.page_link.document?.data
  const groupLinksSectionP1 = query?.group_links[1]?.page_link.document?.data
  const groupLinksSectionP2 = query?.group_links[2]?.page_link.document?.data
  const groupLinksSectionP3 = query?.group_links[3]?.page_link.document?.data
  const groupLinksSectionP4 = query?.group_links[4]?.page_link.document?.data
  const groupLinksSectionP5 = query?.group_links[5]?.page_link.document?.data
  const groupLinksSectionP6 = query?.group_links[6]?.page_link.document?.data
  const groupLinksSectionP7 = query?.group_links[7]?.page_link.document?.data
  const groupLinksSectionP8 = query?.group_links[8]?.page_link.document?.data
  const groupLinksSectionP9 = query?.group_links[9]?.page_link.document?.data
  const groupLinksSectionP10 = query?.group_links[10]?.page_link.document?.data
  const groupLinksSectionP11 = query?.group_links[11]?.page_link.document?.data
  const groupLinksSectionP12 = query?.group_links[12]?.page_link.document?.data
  const groupLinksSectionP13 = query?.group_links[13]?.page_link.document?.data
  const groupLinksSectionP14 = query?.group_links[14]?.page_link.document?.data
  const groupLinksSectionP15 = query?.group_links[15]?.page_link.document?.data
  // const groupLinksSectionP16 = query?.group_links[16]?.page_link.document?.data

  const [menuItems, setMenuItems] = useState([])

  const [currentLink, setCurrentLink] = useState("")

  const onClickHandler = event => {
    setCurrentLink(event.target.innerText)
  }

  useEffect(() => {
    setCurrentLink(menuLinks.text_1)
    setMenuItems([menuLinks.text_1, menuLinks.text_2, menuLinks.text_3])
  }, [])

  return (
    <WidthLimiterContainer>
      <HomePageContainer>
        <div className="test-nav">
          <h1 className="Header__Title">{query.site_title.text}</h1>
          <HomeMenuLinks>
            {menuItems.length > 0
              ? menuItems.map((item, index) => {
                  return (
                    <HomeMenuLinks key={index}>
                      <p onClick={onClickHandler}>{item}</p>
                    </HomeMenuLinks>
                  )
                })
              : ""}
          </HomeMenuLinks>
        </div>
        {currentLink === menuItems[0] ? (
          <Presentation
            onClick={onClickHandler}
            query={{
              menuLinks: menuLinks,
              groupLinks: groupLinksPresentation,
            }}
          />
        ) : (
          ""
        )}
        {currentLink === menuItems[1] ? (
          <Projet
            query={{
              page2: groupLinksSectionP1,
              page3: groupLinksSectionP2,
              page4: groupLinksSectionP3,
              page5: groupLinksSectionP4,
              page6: groupLinksSectionP5,
              page7: groupLinksSectionP6,
              page8: groupLinksSectionP7,
              page9: groupLinksSectionP8,
              page10: groupLinksSectionP9,
              page11: groupLinksSectionP10,
              page12: groupLinksSectionP11,
              page13: groupLinksSectionP12,
              page14: groupLinksSectionP13,
              page15: groupLinksSectionP14,
              page16: groupLinksSectionP15,
            }}
          />
        ) : (
          ""
        )}
      </HomePageContainer>
    </WidthLimiterContainer>
  )
}

IndexLayout.propTypes = {
  data: PropTypes.object,
}

export default IndexLayout
