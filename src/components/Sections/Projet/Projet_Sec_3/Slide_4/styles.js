import styled from "@emotion/styled"

export const Slider4Section3Container = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  width: 100%;
  margin-top: 50px;
`
export const Slider4Section3Header = styled.div`
  text-align: center;
  padding-top: 40px;
  margin-bottom: 30px;
`

export const Slider4Section3Img = styled.div`
  display: flex;
  img {
    width: 50%;
    margin: 0 auto;
    padding-top: 50px;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      width: 50%;
      padding-top: 50px;
    }
  }
`
export const Silder4Section3Options = styled.div`
  padding-bottom: 100px;
`
export const Slider4Section3OptionBody = styled.div``

export const Slider4Section3OptionContent = styled.div`
  display: flex;
  padding-left: 19px;
  padding-top: 33px;
  max-width: 90%;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    padding-top: 33px;
    max-width: 72%;

    p {
      font-size: 30px !important;
    }
  }
`
export const Slider4Section3Icon = styled.div`
  padding-right: 15px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-top: 15px;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding-top: 15px;
  }
`
