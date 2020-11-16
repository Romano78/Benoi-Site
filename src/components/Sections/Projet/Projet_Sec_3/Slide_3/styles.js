import styled from "@emotion/styled"

export const Sec3Slide3Container = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  width: 100%;
  margin-top: 50px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-top: 50px;
  }

  .Sec3__Slide3-Titre {
    p {
      @media (min-width: ${props => props.theme.breakpoints.l}) {
        font-size: 35px;
      }
    }
  }
`

export const Sec3Slide3Header = styled.div`
  padding-top: 40px;
  margin-bottom: 30px;
  text-align: center;
`

export const Sec3Slide3BodyContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
`

export const Sec3Slide3QuebecImg = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  position: relative;

  .quebec-text {
    position: absolute;
    left: 22%;
    top: 55%;
    font-size: 12px;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      height: 5px;
      top: 9px;
      background: ${props => props.theme.colors.tertiary};
      width: 100%;
      left: 0;
      z-index: -1;

      @media (min-width: ${props => props.theme.breakpoints.s}) {
        content: "";
        position: absolute;
        height: 15px;
        top: 14px;
        background: #a8deb1;
        width: 100%;
        left: 0;
        z-index: -1;
      }

      @media (min-width: ${props => props.theme.breakpoints.md}) {
        content: "";
        position: absolute;
        height: 12px;
        top: 18px;
        background: #a8deb1;
        width: 100%;
        left: 0;
        z-index: -1;
      }
    }

    @media (min-width: ${props => props.theme.breakpoints.s}) {
      font-size: 20px;
    }
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      left: 25%;
      font-size: 25px;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      left: 28%;
    }
  }

  .pourcentage-quebec {
    position: absolute;
    left: 48%;
    top: 75%;
    font-size: 12px;
    z-index: 1;
    color: white;
    font-family: "Roboto";

    @media (min-width: ${props => props.theme.breakpoints.s}) {
      font-size: 25px;
      left: 50%;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      top: 74%;
      left: 49%;
    }

    @media (min-width: ${props => props.theme.breakpoints.l}) {
      top: 70%;
      left: 51%;
      font-size: 25px;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      top: 72%;
      left: 48%;
      font-size: 40px;
    }
  }

  img {
    width: 60%;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      width: 50%;
    }
  }
`

export const Sec3Slide3CanadaImg = styled.div`
  width: 68%;
  position: relative;
  display: flex;
  justify-content: center;
  .canada-text {
    position: absolute;
    left: 12%;
    top: 50%;
    font-size: 12px;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      height: 5px;
      top: 9px;
      background: ${props => props.theme.colors.tertiary};
      width: 100%;
      left: 0;
      z-index: -1;

      @media (min-width: ${props => props.theme.breakpoints.s}) {
        content: "";
        position: absolute;
        height: 15px;
        top: 13px;
        background: #a8deb1;
        width: 100%;
        left: 0;
        z-index: -1;
      }
    }

    @media (min-width: ${props => props.theme.breakpoints.s}) {
      font-size: 20px;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      left: 8%;
      top: 54%;
      font-size: 25px;

      &::after {
        content: "";
        position: absolute;
        height: 16px;
        top: 17px;
        background: #a8deb1;
        width: 100%;
        left: 0;
        z-index: -1;
      }
    }

    @media (min-width: ${props => props.theme.breakpoints.l}) {
      left: 5%;
      top: 56%;
      font-size: 25px;

      &::after {
        content: "";
        position: absolute;
        height: 15px;
        top: 20px;
        background: ${props => props.theme.colors.tertiary};
        width: 100%;
        left: 0;
        z-index: -1;
      }
    }
  }

  .pourcentage-canada {
    position: absolute;
    left: 64%;
    top: 23%;
    font-size: 15px;
    z-index: 1;
    color: white;
    font-weight: bold;
    font-family: "Roboto";
    @media (min-width: ${props => props.theme.breakpoints.s}) {
      font-size: 25px;
      left: 50%;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 50px;
      left: 63%;
    }

    @media (min-width: ${props => props.theme.breakpoints.l}) {
      font-size: 50px;
      left: 63%;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      font-size: 60px;
      left: 63%;
    }
  }

  img {
    width: 90%;
  }
`
