import styled from "@emotion/styled"

export const Section2Container = styled.div`
  width: 100%;
  padding-top: 20px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-top: 150px;
  }
`

export const FirstSlideContainer = styled.div`
  display: flex !important;
  h2 {
    width: fit-content;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    margin-bottom: 33px;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      top: 17px;
      left: 0;
      height: 16px;
      background: white;
      z-index: -1;

      @media (min-width: ${props => props.theme.breakpoints.md}) {
        content: "";
        position: absolute;
        width: 100%;
        top: 25px;
        left: 0;
        height: 25px;
        background: white;
        z-index: -1;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
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
        top: 44px;
        left: 0;
        height: 42px;
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
  display: flex !important;
  margin-top: 50px;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-bottom: 50px;
    padding-top: 50px;
  }
`

export const FirstSliderContent = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${props => props.theme.colors.secondary};
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-top: 0;
    padding-bottom: 150px;
    width: 60%;
  }
`

export const SecondSliderContent = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  padding-top: 50px;
  padding-bottom: 100px;
  width: 60%;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-top: 150px;
    padding-bottom: 150px;
    width: 50%;
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    justify-content: center;
  }
`

export const FirstSliderBodyText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .First__Slide__Content {
    position: relative;
    /* font-size: 14px !important; */

    &::after {
      content: "";
      position: absolute;
      border: 3px solid white;
      width: 63%;
      height: 27px;
      left: 36%;
      bottom: -5px;
      opacity: 0.9;

      @media (min-width: ${props => props.theme.breakpoints.md}) {
        content: "";
        position: absolute;
        border: 3px solid white;
        width: 63%;
        height: 27px;
        left: 37%;
        bottom: -5px;
        opacity: 0.9;
      }

      @media (min-width: ${props => props.theme.breakpoints.lg}) {
        content: "";
        height: 47px;
      }
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      font-size: 35px !important;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const SecondSliderBodyText = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 5px;
  .Second__Slide__Content {
    p:last-of-type {
      margin-top: 33px;
      border: 2px solid white;
      width: fit-content;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    p {
      font-size: 35px !important;
    }
  }
`

export const FirstSliderImg = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  img {
    width: 40%;
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    width: 60%;
    justify-content: center;

    img {
      width: 50%;
    }
  }
`
export const SecondSliderImg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 40%;
  img {
    width: 62%;
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 50%;
    padding-left: 30px;

    img {
      width: 70%;
    }
  }
`
