import styled from "@emotion/styled"

export const Sec6SecondSlideContainer = styled.div`
  height: 700px;
  display: flex;
  .Sec6-First__Slide__Content {
    font-size: 30px !important;
  }
`

export const Sec6SecondLeftSlide = styled.div`
  width: 50%;
  background-color: ${props => props.theme.colors.yellow};
`
export const Sec6SecondRightSlide = styled.div`
  width: 50%;
`

export const Sec6SecondLeftTitle = styled.div`
  margin: 0 auto;
  width: 60%;
  margin-top: 100px;

  h2 {
    position: relative;
    width: fit-content;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      width: 86%;
      background: white;
      height: 40px;
      left: 0;
      top: 38px;
      z-index: -1;
    }

    &::after {
      content: "";
      position: absolute;
      width: 75%;
      background: white;
      height: 40px;
      left: 0;
      top: 125px;
      z-index: -1;
    }
  }
`

export const Sec6SecondLeftImg = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 50px;
  margin-top: 30px;
  img {
    width: 30%;
  }
`

export const Sec6SecondRightText = styled.div`
  display: flex;

  margin-top: 30px;
  margin-left: 50px;

  .Sec6-Second-Right-Container {
    line-height: normal !important;
  }

  svg {
    width: 50px;
    margin-top: 15px;
    margin-right: 30px;
  }
`
