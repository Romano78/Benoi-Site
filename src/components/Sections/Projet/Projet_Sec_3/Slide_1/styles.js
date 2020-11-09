import styled from "@emotion/styled"

export const FirstSlideContainer = styled.div`
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

export const FirstSliderBodyText = styled.div`
  .Sec3-First__Slide__Content {
    position: relative;
    width: fit-content;
    z-index: 1;

    p {
      line-height: 1.6;
    }

    p:after {
      content: "";
      position: absolute;
      background: white;
      width: 95%;
      height: 21px;
      left: 0;
      z-index: -1;
      transform: translate(0, 110%);

      @media (min-width: ${props => props.theme.breakpoints.md}) {
        content: "";
        position: absolute;
        background: white;
        width: 100%;
        height: 21px;
        left: 0;
        z-index: -1;
        transform: translate(0, 150%);
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    .Sec3-First__Slide__Content {
      position: relative;
      width: fit-content;
      z-index: 1;

      p {
        line-height: 1.6;
      }

      p:after {
        content: "";
        position: absolute;
        background: white;
        width: 100%;
        height: 35px;
        left: 0;
        z-index: -1;
        transform: translate(0, 150%);
      }
    }
  }
`

export const FirstSliderContent = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 100px;
  align-items: center;
  position: relative;

  .Objectif__Graphic {
    position: absolute;
    right: 0;
    bottom: 10px;
    right: 9%;
    width: 150px;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      position: absolute;
      right: 0;
      bottom: 20px;
      right: 100px;
      width: 30%;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-left: 0;
    position: relative;
    padding-top: 40px;
    padding-bottom: 250px;
  }
`

export const FirstSliderImg = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    width: 50%;
    justify-content: center;
  }
`
