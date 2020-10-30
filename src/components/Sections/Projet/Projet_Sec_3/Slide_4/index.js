import React from "react"
import PropTypes from "prop-types"
import { Slider4Section3Container } from "./styles"

const Slider4 = ({ querySection3P4 }) => {
  return (
    <Slider4Section3Container>
      <h1>{querySection3P4.information}</h1>
      <div className="image">
        <img src={querySection3P4.graph.localFile.url} alt="" />
      </div>
      <div>
        {querySection3P4.option.map((info, index) => {
          return <p key={index}>{info.point}</p>
        })}
      </div>
    </Slider4Section3Container>
  )
}

Slider4.propTypes = {
  querySection3P4: PropTypes.object,
}

export default Slider4
