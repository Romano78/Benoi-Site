import styled from "@emotion/styled"
import Text from "~/components/Utilities/Text"

export const LinkSection3Text = styled(Text)`
  font-size: 12px !important;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 10px;
`

export const SecondSliderContainer = styled.div`
  background: ${props => props.theme.colors.tertiary};
  margin-top: 50px;
  text-align: center;
`

export const SecondSliderHeader = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-top: 50px;
    padding-right: 141px;
    /* to be removed */
  }
`

export const SecondSliderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-top: -78px;
  }
`

export const GrandGraphContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    .test-2 {
      position: relative;

      .city-Canada {
        font-size: 20px;
        position: absolute;
        right: 61%;
        bottom: 25%;
        left: -79%;
      }

      .Price-Canada {
        font-size: 42px;
        position: absolute;
        bottom: 17%;
        right: 58%;
        color: white;
        font-family: "Times";
        font-weight: bold;
      }
    }
  }
`

export const PetitGraphContent = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;

  .test {
    position: relative;

    .city-Quebec {
      font-size: 20px;
      position: absolute;
      left: 41%;
      bottom: 41%;
    }

    .Price-Québec {
      font-size: 40px;
      position: absolute;
      bottom: 28%;
      right: 27%;
      color: white;
      font-family: "Times";
    }

    .chiffre-description {
      font-size: 20px;
      position: absolute;
      bottom: 13px;
      right: -96px;
      width: 25%;
    }

    img {
      width: 100%;
      padding-top: 144px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    .test {
      position: relative;

      .city-Quebec {
        font-size: 20px;
        position: absolute;
        left: -35%;
        bottom: 41%;
      }

      .Price-Québec {
        font-size: 40px;
        position: absolute;
        bottom: 27%;
        right: 57%;
        color: white;
        font-family: "Times";
      }

      .chiffre-description {
        font-size: 20px;
        position: absolute;
        bottom: 9%;
        right: -23%;
        width: 38%;
      }
    }
  }
`

export const SecondSliderImg = styled.div``

export const GrandGraphBodyImg = styled.div`
  display: flex;
  justify-content: center;
`

export const PetiGraphBodyImg = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const SectionSliderBody = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.s}) {
  }
`
