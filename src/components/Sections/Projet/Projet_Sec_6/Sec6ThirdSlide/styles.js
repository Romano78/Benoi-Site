import styled from "@emotion/styled"

export const Section6ThirdSlideContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-top: 80px;
  margin-bottom: 200px;
  background: ${props => props.theme.colors.secondary};
`

export const Section6ThirdText = styled.div`
  padding-top: 80px;
  margin-left: 200px;
  width: 70%;

  .section6-3slide-text {
    font-size: 30px;
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 65px !important;
    }
  }

  p {
    position: relative;
    z-index: 1;
    width: fit-content;
    line-height: 1.5 !important;

    &::before {
      @media (min-width: ${props => props.theme.breakpoints.md}) {
        content: "";
        position: absolute;
        width: 81%;
        height: 31px;
        left: 0;
        top: 52px;
        background: white;
        z-index: -1;
      }
    }

    &::after {
      @media (min-width: ${props => props.theme.breakpoints.md}) {
        content: "";
        position: absolute;
        width: 65%;
        height: 39px;
        left: 0;
        bottom: 9px;
        background: white;
        z-index: -1;
      }
    }
  }
`
export const Section6ThirdImg = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 200px;

  img {
    width: 25%;
    margin-bottom: 40px;
  }
`
