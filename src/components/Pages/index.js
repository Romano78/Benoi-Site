import React from "react"
import { HomePageContainer } from "./styles"
import { WidthLimiterContainer } from "../Layout/styles"

const IndexLayout = () => {
  return (
    <WidthLimiterContainer>
      <HomePageContainer>
        <h1>Set up done</h1>
      </HomePageContainer>
    </WidthLimiterContainer>
  )
}

export default IndexLayout
