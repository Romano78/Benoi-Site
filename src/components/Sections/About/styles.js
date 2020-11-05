import styled from "@emotion/styled"

export const AboutSectionContainer = styled.div`
  background: ${props => props.theme.colors.pink};
  margin-top: 30px;
  padding-top: 50px;
  margin-bottom: 50px;
  animation: 2s ease-in 0s 1 slideInFromLeft;

  .copy-right {
    text-align: center;
    margin-top: 50px;
  }
`

export const AboutSectionText = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    .About__Section__Content {
      p {
        line-height: 1.6 !important;
        font-size: 60px !important;
        font-family: "Times";
        position: relative;
        width: fit-content;
        z-index: 1;
      }

      p::after {
        content: "";
        position: absolute;
        width: 100%;
        background: white;
        height: 39px;
        z-index: -1;
        left: 0;
        top: 49px;
      }
    }
  }
`

export const AboutSectionFooter = styled.div`
  padding-left: 185px;

  .contact {
  }

  .contact-info {
    position: relative;
    border: 2px solid white;
    margin-bottom: 50px;
    margin-top: 50px;
    width: fit-content;
  }

  p {
    margin-top: 10px;
    font-family: "Times";
  }
`
