import styled from "@emotion/styled"

export const Slider4Section3Container = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  width: 100%;
  padding-top: 60px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-top: 50px;
  }

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
      display: flex;
    }
  }

  .Body-Container {
    display: flex;
    justify-content: space-between;
  }

  .Icon-container {
    margin-left: 28px;
    padding-top: 47px;
    padding-right: 37px;
  }
  .test-2 {
    width: 71%;
    margin: 0 auto;
  }

  h1 {
    margin-bottom: 100px;
  }

  .image {
    margin-bottom: 50px;
  }

  p {
    font-size: 30px;
    padding-top: 30px;
  }
`
