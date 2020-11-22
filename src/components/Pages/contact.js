import React from "react"
import About from "../Sections/About"
import PropTypes from "prop-types"
import SEO from "../seo"

const ContactLayout = ({ data }) => {
  return (
    <>
      <SEO title="Contact" />
      <About queryPage17={data} />
    </>
  )
}

ContactLayout.propTypes = {
  data: PropTypes.object,
}

export default ContactLayout
