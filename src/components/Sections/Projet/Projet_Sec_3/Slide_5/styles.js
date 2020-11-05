import styled from "@emotion/styled"

export const Slider5Sec3Container = styled.div`
  width: 100%;
  height: 769px;
  display: flex;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-top: 50px;
  }
`

export const Slider5Sec3RightContainer = styled.div`
  width: 50%;
  background-color: ${props => props.theme.colors.tertiary};
  padding-top: 130px;

  img {
    width: 60%;
  }

  p {
    font-size: 58px !important;
    font-family: "Times" !important;
    font-weight: normal !important;
  }

  .test {
    display: flex;
    justify-content: center;
    margin-right: 39px;
    margin-top: 30px;
  }

  .text {
    display: flex;
    justify-content: center;
  }
`

export const Slider5Sec3LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 140px;
  h2 {
    margin-bottom: 50px;
    font-size: 50px;
    font-family: "Times";
    border: 1px solid ${props => props.theme.colors.tertiary};
  }
`

export const LeftContainerBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 127px;
  padding-right: 63px;
  h3 {
    font-size: 32px;
    font-family: "times";
    margin-bottom: 20px;
    font-family: "Times New Roman", Times, serif;
    position: relative;
    width: fit-content;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      background: ${props => props.theme.colors.tertiary};
      left: 0;
      top: 25px;
      height: 20px;
      z-index: -1;
    }
  }
  p {
    font-size: 60px;
    font-family: "Times New Roman", Times, serif;
  }
`

export const CityQuebecContainer = styled.div`
  h3 {
    font-size: 32px;
    font-family: "times";
    margin-bottom: 20px;
  }

  p {
    font-size: 60px;
  }
`

export const CityCanadaContainer = styled.div``
