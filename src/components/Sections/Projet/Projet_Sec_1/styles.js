import styled from "@emotion/styled"

export const ProjetSecContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.secondary};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    height: 70vh;
  }
  h2 {
    text-align: center;
    padding-top: 50px;
    position: relative;
    width: fit-content;
    margin: 0 auto;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      background: white;
      height: 50px;
      width: 100%;
      top: 108px;
      z-index: -1;
    }
  }
`
export const ProjetSec1Body = styled.div`
  text-align: center;
  margin-top: 30px;
`
