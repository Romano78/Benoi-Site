import styled from "@emotion/styled"

export const Sec5FirstSlideContainer = styled.div``

export const Sec5LeftContainer = styled.div`
  background-color: ${props => props.theme.colors.purpule};
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 50%;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
  }
`
export const Sec5LeftContainerText = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    padding-left: 130px;
    padding-right: 133px;
    margin: 0 auto;
    margin-bottom: 50px;
  }
`

export const Sec5RightContainer = styled.div`
  width: 50%;
  padding-left: 50px;
  padding-top: 40px;
`

export const FirstSlideContainer = styled.div`
  display: flex !important;
  height: 100%;
  height: 720px;
`

export const SecondSlideContainer = styled.div`
  display: flex !important;
  height: 100%;
  height: 720px;
`

export const Sec5RightList = styled.div`
  margin-bottom: 10px;

  h5 {
    position: relative;
    width: fit-content;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      background: ${props => props.theme.colors.purpule};
      height: 10px;
      left: 0;
      z-index: -1;
      top: 16px;
    }
  }

  p {
    padding-left: 30px;
  }

  .salaire-annuel-text {
    padding-left: 0;
    font-weight: normal;
  }

  .salaire-annuel-calcule {
    padding-left: 0;
    font-size: 19px;
    opacity: 0.7;
  }

  svg {
    width: 42px;
    height: 33px;
  }
`
