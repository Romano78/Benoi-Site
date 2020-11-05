import React from "react"
import PropTypes from "prop-types"
import { Plus } from "./assets/Plus"
import { DoubleArrow } from "./assets/DoubleArrow"
import { Equal } from "./assets/Equal"
import { SlideArrow } from "./assets/SlideArrow"
import { Option } from "./assets/Option"
import { Line } from "./assets/Line"

const Icon = ({ type }) => {
  switch (type) {
    case "plus":
      return <Plus />
    case "double-arrow":
      return <DoubleArrow />
    case "equal":
      return <Equal />
    case "slide-arrow":
      return <SlideArrow />
    case "option":
      return <Option />
    case "line":
      return <Line />
    default:
      return ""
  }
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Icon
