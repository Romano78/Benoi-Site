import styled from "@emotion/styled"

export const ProjetSecContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.secondary};
  padding-top: 50px;
  padding-bottom: 50px;

  h2 {
    text-align: center;
    position: relative;
    width: fit-content;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      background: white;
      height: 17px;
      width: 100%;
      top: 21px;
      z-index: -1;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding-top: 162px;
    padding-bottom: 127px;
    width: 100%;
    h2 {
      text-align: center;
      position: relative;
      width: fit-content;
      z-index: 1;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        background: white;
        height: 34px;
        width: 100%;
        top: 43px;
        z-index: -1;
      }
    }
  }
`
export const ProjetSec1Body = styled.div`
  text-align: center;
  margin-top: 30px;

  .Link-Test-Container {
    border: 1px solid white;
    width: fit-content;
    margin: 0 auto;
    margin-top: 50px;

    svg {
      width: 50px;
      height: 50px;
      color: white;
    }
  }
`
