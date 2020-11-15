import styled from "@emotion/styled"

export const Sec6FirstSlideContainer = styled.div`
  display: flex;
`

export const Sec6FirstLeftSlide = styled.div`
  width: 50%;
  background: ${props => props.theme.colors.secondary};
`

export const Sec6FirstLeftImg = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 50px;
  margin-top: 30px;
  padding-bottom: 45px;
  img {
    width: 30%;
  }
`
export const Sec6FirstRightSlide = styled.div`
  width: 50%;
`

export const Sec6FirstLeftTitle = styled.div`
  margin: 0 auto;
  width: 95%;
  margin-top: 100px;

  h2 {
    position: relative;
    width: fit-content;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      background: white;
      height: 10px;
      left: 0;
      top: 18px;
      z-index: -1;

      @media (min-width: ${props => props.theme.breakpoints.md}) {
        content: "";
        position: absolute;
        width: 100%;
        background: white;
        height: 40px;
        left: 0;
        top: 38px;
        z-index: -1;
      }

      @media (min-width: ${props => props.theme.breakpoints.lg}) {
        content: "";
        position: absolute;
        width: 86%;
        background: white;
        height: 40px;
        left: 0;
        top: 38px;
        z-index: -1;
      }
    }

    &::after {
      @media (min-width: ${props => props.theme.breakpoints.md}) {
        content: "";
        position: absolute;
        width: 85%;
        background: white;
        height: 40px;
        left: 0;
        top: 125px;
        z-index: -1;
      }

      @media (min-width: ${props => props.theme.breakpoints.lg}) {
        content: "";
        position: absolute;
        width: 51%;
        background: white;
        height: 40px;
        left: 0;
        top: 125px;
        z-index: -1;
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 80%;
  }
`

export const Sec6FirstRightText = styled.div`
  display: flex;

  margin-top: 20px;
  margin-left: 20px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-top: 50px;
    margin-left: 50px;
  }

  svg {
    width: 30px;
    margin-right: 10px;
    margin-top: 5px;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      width: 50px;
      margin-right: 30px;
      margin-top: 5px;
    }
  }
`
