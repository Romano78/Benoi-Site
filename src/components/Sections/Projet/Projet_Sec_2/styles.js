import styled from "@emotion/styled"

export const Section2Container = styled.div`
  margin-top: 50px;
  width: 100%;
`

export const FirstSlideContainer = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex !important;

    h2 {
      width: fit-content;
      margin: 0 auto;
      position: relative;
      z-index: 1;
      margin-top: 100px;
      margin-bottom: 60px;

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        top: 54px;
        left: 0;
        height: 50px;
        background: white;
        z-index: -1;
      }
    }

    p {
      line-height: normal;
    }
  }
`

export const SecondSliderContainer = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-bottom: 50px;
    display: flex !important;
  }
`

export const FirstSliderContent = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  width: 60%;
  height: 690px;
`

export const SecondSliderContent = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  width: 60%;
`

export const FirstSliderBodyText = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    align-items: center;

    .First__Slide__Content {
      position: relative;
      font-size: 34px;

      &::after {
        content: "";
        position: absolute;
        border: 3px solid white;
        width: 219px;
        height: 45px;
        left: 113px;
        bottom: -5px;
        opacity: 0.9;
      }
    }
  }
`

export const SecondSliderBodyText = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    height: 690px;
    display: flex;
    justify-content: center;
    align-items: center;

    .Second__Slide__Content {
      position: relative;
      font-size: 34px;
      line-height: normal;

      &::after {
        content: "";
        position: absolute;
        border: 3px solid white;
        width: 110%;
        height: 45px;
        left: -21px;
        right: 0;
        bottom: 0;
        opacity: 0.9;
      }

      p:last-of-type {
        margin-top: 33px;
      }
    }
  }
`

export const FirstSliderImg = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    width: 50%;
    justify-content: center;
  }
`
export const SecondSliderImg = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 30px;

    img {
      width: 70%;
    }
  }
`
