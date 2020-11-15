import styled from "@emotion/styled"

export const Sec5FirstSlideContainer = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-top: 50px;
  }
`

export const Sec5LeftContainer = styled.div`
  background-color: ${props => props.theme.colors.purpule};
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 50%;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
  }

  .graph-section5Slide1 {
    width: 15%;
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      width: 30%;
    }
  }
`
export const Sec5LeftContainerText = styled.div`
  padding: 20px 20px 40px 20px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 50px;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding-left: 130px;
    padding-right: 133px;
    margin-bottom: 50px;
  }
`
export const Sec5LeftContainerImg = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  img {
    width: 10%;
  }
`

export const Sec5RightContainer = styled.div`
  width: 90%;
  padding-left: 10px;
  padding-top: 40px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 50%;
    padding-left: 50px;
    padding-top: 40px;
  }
`

export const FirstSlideContainer = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex !important;
  }
`

export const SecondSlideContainer = styled.div`
  display: flex !important;
  height: 100%;
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
