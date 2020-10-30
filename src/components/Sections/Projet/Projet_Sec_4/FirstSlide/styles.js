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
`
