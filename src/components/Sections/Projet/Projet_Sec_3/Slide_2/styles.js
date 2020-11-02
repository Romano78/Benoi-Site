import styled from "@emotion/styled"

export const SecondSliderContainer = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-bottom: 50px;
    display: flex !important;
  }
`

export const SecondSliderContent = styled.div`
  background-color: ${props => props.theme.colors.tertiary};
  width: 100%;
  height: 769px;
  display: flex;
  flex-direction: column;
  padding-left: 160px;
  position: relative;
  padding-top: 40px;
`

export const SecondSliderBodyText = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: space-between;
  }
`
export const SecondSliderImg = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
  }
`

export const PetitGraphContainer = styled.div``

export const GrandGraphContent = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 50%;
    position: relative;
    .grand-cochon {
      position: absolute;
      bottom: 33px;
      img {
        width: 86%;
      }

      .city-Canada {
        position: absolute;
        bottom: 160px;
        font-size: 30px;
        left: -130px;
        z-index: 1;

        &::after {
          content: "";
          width: 100%;
          background-color: white;
          height: 20px;
          position: absolute;
          right: 0;
          top: 20px;
          z-index: -1;
        }
      }

      .Price-Canada {
        position: absolute;
        bottom: 75px;
        left: 48px;
        font-size: 50px;
        color: white;
      }
    }
  }
`
export const PetitGraphContentPetit = styled.div`
  position: relative;
  margin-top: 100px;
  margin-left: 100px;
  img {
    width: 100%;
  }

  .Price-Québec {
    position: absolute;
    font-size: 60px;
    bottom: 100px;
    left: 20px;
    font-weight: bold;
    color: white;
  }

  .chiffre-description {
    position: absolute;
    bottom: 30px;
    right: -160px;
    font-size: 25px;
    width: 60%;
  }

  .city-Quebec {
    position: absolute;
    left: -150px;
    font-size: 30px;
    bottom: 190px;
    z-index: 1;

    &::after {
      content: "";
      width: 100%;
      background-color: white;
      height: 20px;
      position: absolute;
      right: 0;
      top: 20px;
      z-index: -1;
    }
  }
`
