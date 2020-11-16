import styled from "@emotion/styled"

export const Sec6SecondSlideContainer = styled.div`
  display: flex;
  margin-top: 40px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-top: 50px;
  }
`

export const Sec6SecondLeftSlide = styled.div`
  width: 50%;
  background: ${props => props.theme.colors.secondary};
`
export const Sec6SecondRightSlide = styled.div`
  width: 50%;
`

export const Sec6SecondLeftTitle = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  padding-left: 20px;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 80%;
  }

  h2 {
    position: relative;
    width: fit-content;
    z-index: 1;

    &::before {
      @media (min-width: ${props => props.theme.breakpoints.md}) {
        content: "";
        position: absolute;
        width: 100%;
        background: white;
        height: 31px;
        left: 0;
        top: 51px;
        z-index: -1;
      }

      @media (min-width: ${props => props.theme.breakpoints.lg}) {
        content: "";
        position: absolute;
        width: 64%;
        background: white;
        height: 31px;
        left: 0;
        top: 51px;
        z-index: -1;
      }
    }

    &::after {
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
        width: 91%;
        background: white;
        height: 33px;
        left: 0;
        top: 129px;
        z-index: -1;
      }

      @media (min-width: ${props => props.theme.breakpoints.lg}) {
        content: "";
        position: absolute;
        width: 57%;
        background: white;
        height: 31px;
        left: 0;
        top: 130px;
        z-index: -1;
      }
    }
  }
`

export const Sec6SecondLeftImg = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 50px;
  margin-top: 30px;
  padding-bottom: 100px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-bottom: 100px;
  }
  img {
    width: 30%;
  }
`

export const Sec6SecondRightText = styled.div`
  display: flex;

  margin-top: 20px;
  margin-left: 20px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-top: 50px;
    margin-left: 50px;
  }

  .Sec6-Second-Right-Container {
    line-height: normal !important;
    p {
      line-height: 1.6;
      @media (min-width: ${props => props.theme.breakpoints.l}) {
        font-size: 25px;
      }
    }
  }

  svg {
    width: 10px;
    margin-right: 10px;
    margin-top: 5px;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      width: 50px;
      margin-right: 30px;
      margin-top: 5px;
    }
  }
`
