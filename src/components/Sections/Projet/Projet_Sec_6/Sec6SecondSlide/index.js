import React from "react"
import PropTypes from "prop-types"
import Text from "~/components/Utilities/Text"

import {
  Sec6SecondSlideContainer,
  Sec6SecondLeftSlide,
  Sec6SecondRightSlide,
} from "./styles"

const Sec6SecondSlide = ({ query }) => {
  console.log(query, "SECOND SLIDE")
  return (
    <Sec6SecondSlideContainer>
      <Sec6SecondLeftSlide>
        <h1>{query.information}</h1>
        <img src={query.graph.localFile.url} alt="" />
      </Sec6SecondLeftSlide>
      <Sec6SecondRightSlide>
        {query.listes.map((info, index) => {
          return (
            <div key={index}>
              <Text
                dangerouslySetInnerHTML={{ __html: info.list_text.html }}
                className="Sec6-First__Slide__Content"
                type="largeText"
              />
            </div>
          )
        })}
      </Sec6SecondRightSlide>
    </Sec6SecondSlideContainer>
  )
}

Sec6SecondSlide.propTypes = {
  query: PropTypes.object,
}

export default Sec6SecondSlide
