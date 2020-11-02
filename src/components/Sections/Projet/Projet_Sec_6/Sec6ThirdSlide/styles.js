import styled from "@emotion/styled"

export const Section6ThirdSlideContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  height: 720px;
  margin-top: 80px;
  margin-bottom: 200px;
  background-color: ${props => props.theme.colors.yellow};
`

export const Section6ThirdText = styled.div`
  padding-top: 80px;
  margin-left: 200px;
  width: 70%;

  p {
    position: relative;
    z-index: 1;
    width: fit-content;
    line-height: 1.5 !important;

    &::before {
      content: "";
      position: absolute;
      width: 85%;
      height: 45px;
      left: 0;
      top: 61px;
      background: white;
      z-index: -1;
    }

    &::after {
      content: "";
      position: absolute;
      width: 85%;
      height: 45px;
      left: 0;
      bottom: 9px;
      background: white;
      z-index: -1;
    }
  }
`
export const Section6ThirdImg = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 200px;
  img {
    width: 25%;
  }
`
