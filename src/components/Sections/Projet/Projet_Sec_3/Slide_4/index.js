import React from "react"
import PropTypes from "prop-types"
import { Slider4Section3Container } from "./styles"
import Text from "~/components/Utilities/Text"
import Icon from "~/components/Icon"

const Slider4 = ({ querySection3P4 }) => {
  return (
    <Slider4Section3Container>
      <h1>{querySection3P4.information}</h1>
      <div className="image">
        <img src={querySection3P4.graph.localFile.url} alt="" />
      </div>
      <div>
        {querySection3P4.option.map((info, index) => {
          return (
            <div key={index} className="test-2">
              <div className="container-test">
                <div className="Icon-container">
                  <Icon type="option" />
                </div>
                <Text type="body">{info.point}</Text>
              </div>
            </div>
          )
        })}
      </div>
    </Slider4Section3Container>
  )
}

Slider4.propTypes = {
  querySection3P4: PropTypes.object,
}

export default Slider4
