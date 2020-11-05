import React from "react"
import PropTypes from "prop-types"
import { SecondSlideSec4Container } from "./styles"
import Icon from "~/components/Icon"
import Text from "~/components/Utilities/Text"
import Fade from "react-reveal/Fade"

const SecondSlideSection4 = ({ query }) => {
  return (
    <Fade bottom distance="30px">
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
        <div className="Body-Container">
          {query.points.map((info, index) => {
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
      </SecondSlideSec4Container>
    </Fade>
  )
}

SecondSlideSection4.propTypes = {
  query: PropTypes.object,
}

export default SecondSlideSection4
