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
      width: 100%;
      height: 13px;
      left: 0;
      top: 18px;
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
      width: 100%;
      height: 13px;
      left: 0;
      top: 18px;
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
      width: 100%;
      height: 13px;
      left: 0;
      top: 18px;
      z-index: -1;
      background: ${props => props.theme.colors.pink};
    }
  }

  a {
    color: black;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      font-size: 25px;
    }
  }

  a:not(:last-of-type) {
    margin-right: 50px;
  }
`
