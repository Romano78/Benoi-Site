import styled from "@emotion/styled"

export const HomePageContainer = styled.div`
  background: red;
  h1 {
    color: ${props => props.theme.colors.yellow};
    font-family: ${props => props.theme.fontFamily.primary};
  }
`
