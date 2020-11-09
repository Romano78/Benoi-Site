import React from "react"
import About from "../Sections/About"
import PropTypes from "prop-types"

const ContactLayout = ({ data }) => {
  return <About queryPage17={data} />
}

ContactLayout.propTypes = {
  data: PropTypes.object,
}

export default ContactLayout
