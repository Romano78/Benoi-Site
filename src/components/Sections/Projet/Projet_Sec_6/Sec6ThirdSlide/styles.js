import styled from "@emotion/styled"

export const Section6ThirdSlideContainer = styled.div`
  background: ${props => props.theme.colors.secondary};
  width: 100%;
  margin-top: 80px;
  margin-bottom: 50px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    margin-top: 80px;
    margin-top: 80px;
    margin-bottom: 200px;
  }
`

export const Section6ThirdText = styled.div`
  padding-top: 80px;
  width: 75%;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 65%;
  }
  .section6-3slide-text {
    font-size: 30px;
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      margin-bottom: 50px;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      font-size: 65px !important;
    }
  }

  p {
    position: relative;
    z-index: 1;
    width: fit-content;
    line-height: 1.5 !important;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 18px;
      left: 0;
      top: 27px;
      background: white;
      z-index: -1;

      @media (min-width: ${props => props.theme.breakpoints.lg}) {
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
      content: "";
      position: absolute;
      width: 65%;
      height: 15px;
      left: 0;
      bottom: 5px;
      background: white;
      z-index: -1;

      @media (min-width: ${props => props.theme.breakpoints.lg}) {
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
