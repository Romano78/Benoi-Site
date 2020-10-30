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
  }
`
export const SecondSliderImg = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
  }
`

export const PetitGraphContainer = styled.div`
  display: flex;
`

export const PetitGraphContent = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 59px;
  top: 72px;

  .city-Canada {
    position: absolute;
    right: 20px;
    top: 100px;
  }

  .Price-Canada {
    position: absolute;
    top: 110px;
    font-size: 50px;
    color: white;
    left: 10px;
  }

  img {
    width: 75%;
  }
`
export const PetitGraphContentPetit = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 110px;

  img {
    width: 54%;
  }
`
