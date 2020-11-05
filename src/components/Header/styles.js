import styled from "@emotion/styled"

export const HeaderContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 30px;
  h1 {
    text-align: center;
  }

  position: sticky !important;
  top: 0;
  z-index: 9999;
  background: white;
`
export const HeaderMenuList = styled.div`
  display: flex;
  justify-content: center;

  .home-link.active {
    position: relative;
    width: fit-content;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      width: 90%;
      height: 15px;
      left: 0;
      top: 22px;
      z-index: -1;
      background: ${props => props.theme.colors.beige};
    }
  }

  .projet-link.active {
    position: relative;
    width: fit-content;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      width: 85%;
      height: 15px;
      left: 0;
      top: 22px;
      z-index: -1;
      background: ${props => props.theme.colors.secondary};
    }
  }

  .contact-link.active {
    position: relative;
    width: fit-content;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      width: 85%;
      height: 15px;
      left: 0;
      top: 22px;
      z-index: -1;
      background: ${props => props.theme.colors.pink};
    }
  }

  a {
    color: black;
    text-decoration: none;
    padding-right: 20px;
    font-size: 30px;
    cursor: pointer;
  }
`
