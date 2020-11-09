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

  .text {
    display: flex;
    justify-content: center;
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
    margin-bottom: 50px;
    font-size: 12px;
    border: 1px solid ${props => props.theme.colors.tertiary};

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      margin-bottom: 50px;
      font-size: 50px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-top: 60px;
  }
`

export const LeftContainerBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-left: 56px;
  padding-right: 40px;
  h3 {
    font-size: 12px;
    margin-bottom: 20px;
    position: relative;
    width: fit-content;
    z-index: 1;

    &::after {
      @media (min-width: ${props => props.theme.breakpoints.md}) {
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

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 32px;
    }
  }

  p {
    font-size: 14px;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 60px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-left: 127px;
    padding-right: 63px;
  }
`

export const CityQuebecContainer = styled.div`
  width: 50%;
  h3 {
    font-size: 12px;
    margin-bottom: 20px;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 32px;
    }
  }

  p {
    font-size: 14px;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 60px;
    }
  }

  svg {
    width: 40%;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      width: 100%;
    }
  }
`

export const CityCanadaContainer = styled.div``
