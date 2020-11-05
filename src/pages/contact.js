import React from "react"
import ContactLayout from "../components/Pages/contact"
import { graphql } from "gatsby"

export const query = graphql`
  {
    prismicPage17 {
      data {
        contact
        contenu {
          html
        }
        copyright
        info
      }
    }
  }
`

const contact = ({ data }) => {
  return <ContactLayout data={data} />
}

export default contact
