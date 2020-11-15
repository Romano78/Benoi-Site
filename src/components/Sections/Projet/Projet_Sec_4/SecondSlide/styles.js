import styled from "@emotion/styled"

export const SecondSlideSec4Container = styled.div`
  margin-top: 80px;
  padding-bottom: 100px;

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
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 30px;

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
    }

    img {
      width: 15%;
    }

    svg {
      width: 5%;
    }
  }
  .container-test {
    display: flex;
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
    /* margin-right: 28px; */
    padding-left: 10px;
    padding-right: 10px;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      padding-left: 10px;
      padding-top: 6px;
      margin-right: 15px;
    }
  }
  .test-2 {
    margin-top: 50px;
    width: 50%;
  }
`
