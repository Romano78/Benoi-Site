import styled from "@emotion/styled"

export const Sec3Slide3Container = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  width: 100%;
  padding-top: 40px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-top: 50px;
  }

  .Sec3__Slide3-Titre {
    padding-left: 160px;
    position: relative;
    z-index: 1;
    width: fit-content;

    &::after {
      position: absolute;
      content: "";
      width: 20%;
      background: white;
      height: 16px;
      z-index: -1;
      right: 230px;
      bottom: -1px;
    }
  }
`

export const Sec3Slide3BodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 50px;
`
export const Sec3Slide3FirstGraphContainer = styled.div`
  position: relative;
`
export const Sec3Slide3QuebecImg = styled.div`
  padding-left: 87px;
  padding-top: 41px;

  img {
    width: 100%;
  }

  .test {
    position: absolute;
    width: 100%;
    font-size: 30px !important;
    top: 61%;
    left: 26%;
    font-family: times;
    z-index: 1;
    width: fit-content;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 10px;
      background: ${props => props.theme.colors.tertiary};
      left: 0;
      top: 20px;
      z-index: -1;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 30px;
    }

    @media (min-width: ${props => props.theme.breakpoints.l}) {
      font-size: 40px;
    }
  }

  .test-2 {
    position: absolute;
    left: 61%;
    bottom: 17%;
    font-size: 16px;
    color: white;
    font-family: times;
    font-weight: bold;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 30px;
    }

    @media (min-width: ${props => props.theme.breakpoints.l}) {
      font-size: 40px;
    }
  }
`

export const Sec3Slide3SecondGraphContainer = styled.div`
  padding-top: 20px;
`

export const Sec3Slide3CanadaImg = styled.div`
  margin-left: 201px;
  position: relative;
  .test {
    position: absolute;
    width: 100%;
    font-size: 30px;
    top: 59%;
    left: 7%;
    font-family: times;
    width: fit-content;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 10px;
      background: ${props => props.theme.colors.tertiary};
      left: 0;
      top: 20px;
      z-index: -1;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 30px;
  }

  @media (min-width: ${props => props.theme.breakpoints.l}) {
    font-size: 40px;
  }

  .test-2 {
    position: absolute;
    left: 63%;
    top: 30%;
    font-size: 16px;
    color: white;
    font-weight: bold;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 30px;
    }

    @media (min-width: ${props => props.theme.breakpoints.l}) {
      font-size: 51px;
    }
  }
  img {
    width: 89%;
  }
`
