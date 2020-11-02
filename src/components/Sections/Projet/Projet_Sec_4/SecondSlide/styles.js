import styled from "@emotion/styled"

export const SecondSlideSec4Container = styled.div`
  height: 720px;
  margin-top: 80px;

  background: linear-gradient(
    to right,
    #8f9ed0 0%,
    #8f9ed0 50%,
    #caabd5 50%,
    #caabd5 100%
  ); /* W3C */

  margin-top: 50px;

  .test {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 168px;
    padding-left: 46px;
    padding-right: 106px;
  }
  .container-test {
    @media (min-width: ${props => props.theme.breakpoints.md}) {
      width: 64%;
      display: flex;
      margin-left: 100px;
    }
  }

  .Body-Container {
    display: flex;
    justify-content: space-between;
  }

  .Icon-container {
    margin-right: 28px;
    padding-top: 10px;
  }
  .test-2 {
    margin-top: 50px;
    width: 50%;
  }
`
