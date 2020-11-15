import styled from "@emotion/styled"
import Text from "~/components/Utilities/Text"

export const LinkSection3Text = styled(Text)`
  font-size: 9px !important;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 13px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 20px !important;
  }
`

export const SecondSliderContainer = styled.div`
  background: ${props => props.theme.colors.tertiary};
  text-align: center;
  margin-top: 20px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-top: 50px;
  }
`

export const SecondSliderHeader = styled.div`
  margin-bottom: 30px;
  padding-top: 20px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-top: 50px;
  }
`

export const SecondSliderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 0px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-column-gap: 50px;
  }
`
export const PetitGraphBody = styled.div`
  position: relative;

  img {
    width: 60%;
    padding-left: 10px;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      padding-left: 0;
    }
    @media (min-width: ${props => props.theme.breakpoints.s}) {
      width: 55%;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      width: 60%;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      width: 90%;
    }
  }

  .Price-Québec {
    position: absolute;
    top: 66%;
    left: 30%;
    color: white;
    font-weight: bold;
    font-size: 16px;
    @media (min-width: ${props => props.theme.breakpoints.s}) {
      font-size: 25px;
      left: 30%;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      left: 25%;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      font-size: 38px;
      left: 15%;
    }
  }

  .city-Quebec {
    position: absolute;
    top: 60%;
    font-size: 10px;
    z-index: 1;

    &::after {
      content: "";
      height: 5px;
      left: 0;
      top: 7px;
      width: 100%;
      position: absolute;
      background: white;
      z-index: -1;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 20px;
      left: -13%;
      &::after {
        content: "";
        height: 10px;
        left: 0;
        top: 15px;
        width: 100%;
        position: absolute;
        background: white;
        z-index: -1;
      }
    }

    @media (min-width: ${props => props.theme.breakpoints.l}) {
      font-size: 20px;
      left: -20%;
    }
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      font-size: 20px;
      left: -39%;
    }
  }

  .chiffre-description {
    position: absolute;
    top: 78%;
    left: 72%;
    font-size: 12px;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      position: absolute;
      top: 83%;
      left: 80%;
      font-size: 20px;
      width: 43%;
    }
  }
`

export const PetitGraphContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

export const GrandGraphBody = styled.div`
  position: relative;

  img {
    width: 80%;

    @media (min-width: ${props => props.theme.breakpoints.s}) {
      width: 60%;
    }
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      width: 75%;
    }
  }

  .Price-Canada {
    position: absolute;
    top: 77%;
    left: 16%;
    color: white;
    font-weight: bold;
    font-size: 21px;
    @media (min-width: ${props => props.theme.breakpoints.s}) {
      font-size: 25px;
      left: 30%;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      left: 25%;
    }

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      font-size: 53px;
      left: 19%;
    }
  }

  .city-Canada {
    position: absolute;
    top: 76%;
    font-size: 10px;
    z-index: 1;
    left: -19%;

    &::after {
      content: "";
      height: 5px;
      left: 0;
      top: 7px;
      width: 100%;
      position: absolute;
      background: white;
      z-index: -1;
    }

    @media (min-width: ${props => props.theme.breakpoints.s}) {
      left: 0%;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 20px;
      left: -5%;
      &::after {
        content: "";
        height: 10px;
        left: 0;
        top: 15px;
        width: 100%;
        position: absolute;
        background: white;
        z-index: -1;
      }
    }
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      top: 72%;
      font-size: 20px;
      left: -10%;
    }
  }
`

export const GrandGraphContent = styled.div`
  display: flex;
  justify-content: center;
`

export const SecondSliderImg = styled.div``

export const GrandGraphBodyImg = styled.div``

export const PetiGraphBodyImg = styled.div``

export const SectionSliderBody = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.s}) {
  }
`
