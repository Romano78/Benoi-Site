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
        height: 45px;
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
  height: 769px;
  display: flex;
  flex-direction: column;
  padding-left: 160px;
  position: relative;
  padding-top: 40px;

  .Objectif__Graphic {
    position: absolute;
    right: 0;
    bottom: 58px;
    right: 100px;
  }
`

export const FirstSliderImg = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    width: 50%;
    justify-content: center;
  }
`
