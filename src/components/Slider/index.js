import React from "react"
import PropTypes from "prop-types"
import Slider from "react-slick"
import { GallerySliderStyling } from "./styles"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const GallerySliderContent = ({
  children,
  className,
  slidesToShow,
  slidesToScroll,
  //   infinite,
}) => {
  const settings = {
    dots: false,
    // infinite: infinite,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  }

  return (
    <GallerySliderStyling className={className ? className : ""}>
      <Slider {...settings}>{children}</Slider>
    </GallerySliderStyling>
  )
}

GallerySliderContent.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
  galleryImageLength: PropTypes.number,
  infinite: PropTypes.bool,
}

export default GallerySliderContent
