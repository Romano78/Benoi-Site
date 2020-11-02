import React from "react"
import Icon from "~/components/Icon"
import PropTypes from "prop-types"

const ArrowLeft = props => {
  return (
    <div onClick={props.onClick} className={"slick-prev"}>
      <Icon type="slide-arrow" />
    </div>
  )
}

ArrowLeft.propTypes = {
  onClick: PropTypes.func,
}

export default ArrowLeft
