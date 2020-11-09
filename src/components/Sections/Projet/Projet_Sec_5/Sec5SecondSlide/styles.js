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
`

export const Sec5SecondLeftImg = styled.div`
  margin: 0 auto;
  img {
    width: 100%;
  }
`
export const Sec5SecondLeftContainerText = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    padding-left: 170px;
    padding-right: 50px;
    margin: 0 auto;
    margin-bottom: 80px;
  }
`

export const Sec5RightContainer = styled.div`
  width: 50%;
  margin-left: 30px;
  margin-top: 30px;

  .list-container {
    h3 {
      font-size: 25px;
      font-weight: normal;
    }
    p {
      padding-left: 15px;
    }
  }
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
export const Sec5LefttList = styled.div`
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
    padding-left: 0 !important;
    font-weight: normal;
    font-size: 16px;
    opacity: 0.7;
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
