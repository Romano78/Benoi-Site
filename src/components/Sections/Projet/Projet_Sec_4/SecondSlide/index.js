import React from "react"
import PropTypes from "prop-types"
import { SecondSlideSec4Container } from "./styles"
import Icon from "~/components/Icon"

const SecondSlideSection4 = ({ query }) => {
  return (
    <SecondSlideSec4Container>
      <div className="test">
        <img src={query.graph_1.localFile.url} alt="" />
        <Icon type="plus" />
        <img src={query.graph_2.localFile.url} alt="" />
        <Icon type="equal" />
        <img src={query.graph_3.localFile.url} alt="" />
        <Icon type="double-arrow" />
        <img src={query.graph_4.localFile.url} alt="" />
      </div>
      <div>
        {query.points.map((info, index) => {
          return (
            <div key={index} className="test-2">
              <Icon type="option" />
              <p>{info.point}</p>
            </div>
          )
        })}
      </div>
    </SecondSlideSec4Container>
  )
}

SecondSlideSection4.propTypes = {
  query: PropTypes.object,
}

export default SecondSlideSection4
