import styled from "@emotion/styled"

export const HomeSectionContainer = styled.div`
  background: ${props => props.theme.colors.beige};
  padding-right: 40px;
  padding-left: 80px;
  padding-top: 40px;
  animation: 2s ease-in 0s 1 slideInFromLeft;

  p {
    margin-top: 15px;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    .presentation-contenu {
      position: relative;
      z-index: 1;
      p:last-of-type::before {
        content: "";
        position: absolute;
        width: 45%;
        height: 20px;
        background-color: white;
        left: 110px;
        bottom: -1px;
        z-index: -1;
      }
    }
  }

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
      height: 22px;
      left: 0px;
      top: 24px;
      z-index: -1;
    }
  }
`
