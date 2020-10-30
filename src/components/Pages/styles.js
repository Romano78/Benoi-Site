import styled from "@emotion/styled"

export const HomePageContainer = styled.div`
  margin-top: 40px;

  .Header__Title {
    text-align: center;
  }

  .test-nav {
    position: sticky;
    background: white;
    top: 0px;
    z-index: 100;
    padding-top: 50px;
  }
`

export const HomeMenuLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  padding-bottom: 10px; /* for nav test */

  p {
    margin-right: 30px;
  }
`
