import styled from "@emotion/styled"

export const FirstSlideSec4Container = styled.div`
  height: 720px;
  display: flex;
`

export const SlideSec4RightContainer = styled.div`
  width: 50%;
  padding-left: 50px;
  padding-top: 50px;

  img {
    width: 100%;
  }
`

export const SlideSec4LeftContainer = styled.div`
  width: 50%;
  background-color: ${props => props.theme.colors.blue};
`

export const SlideSec4LeftBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  padding-left: 150px;
  width: 90%;

  .Principe-Title {
    position: relative;
    width: fit-content;
    z-index: 1;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      background: white;
      height: 40px;
      left: 0;
      top: 41px;
      z-index: -1;
    }
  }

  .Principe-SubTitle {
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
    width: fit-content;
    border: 3px solid white;
  }
`
