import styled from "@emotion/styled"

export const Sec3Slide3Container = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  width: 100%;
  padding-top: 40px;

  .Sec3__Slide3-Titre {
    padding-left: 160px;
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
  /* .test {
    position: absolute;
    bottom: 208px;
    left: 100px;
    font-family: initial;
    font-size: 37px;
    font-weight: bold;
  }

  .test-2 {
    position: absolute;
    font-family: initial;
    font-size: 56px;
    color: white;
    transform: translate(153%, -190%);
  } */
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
    font-size: 30px;
    top: 61%;
    left: 22%;
    font-family: times;

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
