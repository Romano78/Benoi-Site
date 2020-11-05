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
  }
`

export const SecondSliderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
  }
`

export const GrandGraphContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
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

export const PetitGraphBody = styled.div`
  position: relative;
  img {
    width: 38%;
    padding-top: 79px;
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    .city-Quebec {
      font-size: 20px;
      position: absolute;
      bottom: 111px;
      right: 271px;
    }

    .Price-Québec {
      font-size: 40px;
      position: absolute;
      bottom: 75px;
      right: 125px;
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
