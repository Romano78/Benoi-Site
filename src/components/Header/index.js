import React from "react"
import Title from "~/components/Utilities/Title"
import { HeaderMenuList, HeaderContainer } from "./styles"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const query = useStaticQuery(graphql`
    {
      menu: prismicMenu {
        data {
          text_1
          text_2
          text_3
          site_title {
            text
          }
        }
      }
    }
  `)

  console.log(query, "HEADER")
  return (
    <HeaderContainer>
      <div>
        {query?.menu?.data?.site_title?.text ? (
          <Title as="h1" type="heading1" className="Header__Title">
            {query.menu.data.site_title.text}
          </Title>
        ) : (
          ""
        )}

        <HeaderMenuList>
          <AniLink
            direction="right"
            to="/"
            activeClassName="active"
            className="home-link"
          >
            {query.menu.data.text_1}
          </AniLink>
          <AniLink
            to="/projet"
            activeClassName="active"
            className="projet-link"
          >
            {query.menu.data.text_2}
          </AniLink>
          <AniLink
            to="/contact"
            activeClassName="active"
            className="contact-link"
          >
            {query.menu.data.text_3}
          </AniLink>
        </HeaderMenuList>
      </div>
    </HeaderContainer>
  )
}

export default Header
