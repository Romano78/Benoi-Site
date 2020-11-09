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
  padding-bottom: 100px;
  img {
    width: 30%;
  }
`
export const Sec6FirstRightSlide = styled.div`
  width: 50%;
`

export const Sec6FirstLeftTitle = styled.div`
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

export const Sec6FirstRightText = styled.div`
  display: flex;

  margin-top: 50px;
  margin-left: 50px;

  svg {
    width: 50px;
    margin-top: 10px;
    margin-right: 30px;
  }
`
