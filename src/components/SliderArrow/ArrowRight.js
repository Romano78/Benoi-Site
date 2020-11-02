import React from "react"
import PropTypes from "prop-types"
import Icon from "~/components/Icon"

const ArrowRight = props => {
  return (
    <div onClick={props.onClick} className={"slick-prev"}>
      <Icon type="slide-arrow" />
    </div>
  )
}

ArrowRight.propTypes = {
  onClick: PropTypes.func,
}

export default ArrowRight
