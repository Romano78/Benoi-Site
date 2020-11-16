import React from "react"
import PropTypes from "prop-types"
import Fade from "react-reveal/Fade"

import {
  Sec3Slide3BodyContainer,
  Sec3Slide3Container,
  Sec3Slide3QuebecImg,
  Sec3Slide3CanadaImg,
  Sec3Slide3Header,
} from "./styles"
// import Text from "../../../../Utilities/Text"

const Slider3 = ({ querySection3P3 }) => {
  return (
    <Fade bottom distance="30px">
      <Sec3Slide3Container>
        <Sec3Slide3Header>
          {querySection3P3?.text?.html ? (
            <div
              dangerouslySetInnerHTML={{ __html: querySection3P3.text.html }}
              type="bigText400"
              className="Sec3__Slide3-Titre"
            />
          ) : (
            ""
          )}
        </Sec3Slide3Header>
        <Sec3Slide3BodyContainer>
          <Sec3Slide3QuebecImg>
            {querySection3P3?.graphic_quebec?.url ? (
              <img src={querySection3P3.graphic_quebec.url} alt="" />
            ) : (
              ""
            )}
            {querySection3P3?.ville ? (
              <p className="quebec-text">{querySection3P3.ville}</p>
            ) : (
              ""
            )}
            {querySection3P3?.pourcentage_quebec ? (
              <p className="pourcentage-quebec">
                {querySection3P3.pourcentage_quebec}%
              </p>
            ) : (
              ""
            )}
          </Sec3Slide3QuebecImg>

          <Sec3Slide3CanadaImg>
            {querySection3P3?.graphic_canada?.localFile?.url ? (
              <img src={querySection3P3.graphic_canada.localFile.url} alt="" />
            ) : (
              ""
            )}
            {querySection3P3?.pay ? (
              <p className="canada-text">{querySection3P3.pay}</p>
            ) : (
              ""
            )}
            {querySection3P3.pourcentage_canada ? (
              <p className="pourcentage-canada">
                {querySection3P3.pourcentage_canada}%
              </p>
            ) : (
              ""
            )}
          </Sec3Slide3CanadaImg>
        </Sec3Slide3BodyContainer>
      </Sec3Slide3Container>
    </Fade>
  )
}
Slider3.propTypes = {
  querySection3P3: PropTypes.object,
}

export default Slider3
