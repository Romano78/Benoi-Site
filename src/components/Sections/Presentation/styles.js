import styled from "@emotion/styled"

export const HomeSectionContainer = styled.div`
  background: ${props => props.theme.colors.beige};
  margin-top: 30px;
  padding: 40px 80px 40px 80px;
  animation: 2s ease-in 0s 1 slideInFromLeft;

  p {
    margin-top: 15px;
  }

  @keyframes slideInFromLeft {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
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
