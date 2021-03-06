import styled from "@emotion/styled"

export const HomeSectionContainer = styled.div`
  background: ${props => props.theme.colors.beige};
  padding: 20px 20px 0 20px;
  animation: 2s ease-in 0s 1 slideInFromLeft;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 20px 20px 0 20px;
  }

  p {
    margin-top: 15px;
  }

  .Last_Text {
    position: relative;
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    margin-top: 50px;
    padding-bottom: 50px;
    z-index: 1;
    font-weight: bold;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      background: white;
      height: 9px;
      left: 0px;
      top: 9px;
      z-index: -1;
    }
  }

  .presentation-contenu {
    font-size: 12px;
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-right: 116px;
    padding-left: 80px;
    padding-top: 40px;

    .Last_Text {
      position: relative;
      width: fit-content;
      margin: 0 auto;
      text-align: center;
      margin-top: 50px;
      padding-bottom: 50px;
      z-index: 1;

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        background: white;
        height: 13px;
        left: 0px;
        top: 16px;
        z-index: -1;
      }
    }

    .presentation-contenu {
      position: relative;
      z-index: 1;

      p {
        line-height: 1.6;
        font-size: 22px;
      }

      p:last-of-type::before {
        @media (min-width: ${props => props.theme.breakpoints.lg}) {
          content: "";
          position: absolute;
          width: 82%;
          height: 20px;
          background-color: white;
          left: 0.5%;
          bottom: -1px;
          z-index: -1;
        }
        @media (min-width: ${props => props.theme.breakpoints.lg}) {
          content: "";
          position: absolute;
          width: 49%;
          height: 20px;
          background-color: white;
          left: 18.5%;
          bottom: -1px;
          z-index: -1;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding-right: 40px;
    padding-left: 80px;
    padding-top: 40px;
  }
`
