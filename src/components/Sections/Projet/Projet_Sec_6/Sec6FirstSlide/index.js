import React from "react"
import PropTypes from "prop-types"
import Text from "~/components/Utilities/Text"
import {
  Sec6FirstSlideContainer,
  Sec6FirstLeftSlide,
  Sec6FirstRightSlide,
} from "./styles"

const Sec6FirstSlide = ({ query }) => {
  console.log("SecFirstSlide", query)

  return (
    <Sec6FirstSlideContainer>
      <Sec6FirstLeftSlide>
        <h1>{query.information}</h1>
        <img src={query.graph.localFile.url} alt="" />
      </Sec6FirstLeftSlide>
      <Sec6FirstRightSlide>
        {query.listes.map((info, index) => {
          return (
            <div key={index}>
              <Text
                dangerouslySetInnerHTML={{ __html: info.choix.html }}
                className="Sec6-First__Slide__Content"
                type="largeText"
              />
            </div>
          )
        })}
      </Sec6FirstRightSlide>
    </Sec6FirstSlideContainer>
  )
}

Sec6FirstSlide.propTypes = {
  query: PropTypes.object,
}

export default Sec6FirstSlide
