import styled from "@emotion/styled"

export const Slider5Sec3Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
`

export const Slider5Sec3RightContainer = styled.div`
  width: 50%;
  background-color: ${props => props.theme.colors.tertiary};
  padding-top: 50px;
  padding-bottom: 50px;

  img {
    width: 60%;
  }

  p {
    font-weight: normal !important;
  }

  .Slider5___Sec3Text {
    display: flex;
    justify-content: center;

    p {
      @media (min-width: ${props => props.theme.breakpoints.md}) {
        font-size: 35px;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-top: 130px;
  }
`

export const Slider5Sec3RightImg = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 39px;
  margin-top: 30px;
`

export const Slider5Sec3LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  h2 {
    margin-bottom: 20px;
    font-size: 12px;
    border: 1px solid ${props => props.theme.colors.tertiary};

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      margin-bottom: 50px;
      font-size: 40px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-top: 60px;
  }
`

export const LeftContainerBody = styled.div`
  display: flex;
  justify-content: center;
  h3 {
    font-size: 12px;
    margin-bottom: 10px;
    position: relative;
    width: fit-content;
    z-index: 1;

    &::after {
      @media (min-width: ${props => props.theme.breakpoints.md}) {
        content: "";
        position: absolute;
        width: 100%;
        background: #a8deb1;
        left: 0;
        top: 18px;
        height: 14px;
        z-index: -1;
      }
      @media (min-width: ${props => props.theme.breakpoints.lg}) {
        content: "";
        position: absolute;
        width: 100%;
        background: #a8deb1;
        left: 0;
        top: 22px;
        height: 18px;
        z-index: -1;
      }
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 25px;
      margin-bottom: 50px;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      font-size: 32px;
    }
  }

  p {
    font-size: 14px;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 35px;
    }
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      font-size: 60px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    margin-left: 50px;
  }
`

export const CityQuebecContainer = styled.div`
  width: 30%;
  margin-right: 65px;
  h3 {
    font-size: 12px;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 25px;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      font-size: 32px;
      margin-right: 70px;
    }
  }

  p {
    font-size: 14px;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 35px;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      font-size: 60px;
    }
  }

  svg {
    width: 40%;
    height: 4px;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      width: 100%;
      height: 32px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-right: 70px;
  }
`

export const CityCanadaContainer = styled.div`
  white-space: nowrap;
`
