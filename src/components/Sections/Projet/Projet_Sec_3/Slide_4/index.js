import React from "react"
import PropTypes from "prop-types"
import {
  Slider4Section3Container,
  Slider4Section3Header,
  Slider4Section3Img,
  Silder4Section3Options,
  Slider4Section3OptionBody,
  Slider4Section3OptionContent,
  Slider4Section3Icon,
} from "./styles"
import Text from "~/components/Utilities/Text"
import Icon from "~/components/Icon"

const Slider4 = ({ querySection3P4 }) => {
  return (
    <Slider4Section3Container>
      <Slider4Section3Header>
        {querySection3P4?.information ? (
          <Text type="bigText400">{querySection3P4.information}</Text>
        ) : (
          ""
        )}
      </Slider4Section3Header>
      {querySection3P4?.graph?.localFile?.url ? (
        <Slider4Section3Img className="image">
          <img src={querySection3P4.graph.localFile.url} alt="" />
        </Slider4Section3Img>
      ) : (
        ""
      )}
      <Silder4Section3Options>
        {querySection3P4?.option?.length > 0
          ? querySection3P4.option.map((info, index) => {
              return (
                <Slider4Section3OptionBody key={index} className="test-2">
                  <Slider4Section3OptionContent className="container-test">
                    <Slider4Section3Icon className="Icon-container">
                      <Icon type="option" />
                    </Slider4Section3Icon>
                    <Text type="body">{info.point}</Text>
                  </Slider4Section3OptionContent>
                </Slider4Section3OptionBody>
              )
            })
          : ""}
      </Silder4Section3Options>
    </Slider4Section3Container>
  )
}

Slider4.propTypes = {
  querySection3P4: PropTypes.object,
}

export default Slider4
