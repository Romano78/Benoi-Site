import styled from "@emotion/styled"
import { theme } from "../../utils/styles"

export const WidthLimiterContainer = styled.div`
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.md}) {
    max-width: 1440px;
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
  }
`
