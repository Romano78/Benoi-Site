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
    padding-bottom: 20px;
  }
`

export const AboutSectionText = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    .About__Section__Content {
      p {
        font-size: 30px !important;
        position: relative;
        width: fit-content;
        z-index: 1;

        @media (min-width: ${props => props.theme.breakpoints.lg}) {
          font-size: 50px !important;
          line-height: 1.6 !important;
        }
      }

      p::after {
        @media (min-width: ${props => props.theme.breakpoints.md}) {
          content: "";
          position: absolute;
          width: 100%;
          background: white;
          height: 15px;
          z-index: -1;
          left: 0;
          top: 28px;
        }

        @media (min-width: ${props => props.theme.breakpoints.lg}) {
          content: "";
          position: absolute;
          width: 100%;
          background: white;
          height: 33px;
          z-index: -1;
          left: 0;
          top: 45px;
        }
      }
    }
  }
`

export const AboutSectionFooter = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding-left: 185px;
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
  }
`
