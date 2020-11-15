import styled from "@emotion/styled"
import { createMuiTheme } from "@material-ui/core/styles"
import { theme as localTheme } from "~/utils/styles"

export let theme = createMuiTheme({})
theme = {
  ...theme,
  overrides: {
    MuiFormControl: {
      root: {
        paddingRight: "30px",
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: "0 !important",
      },
    },
    MuiInput: {
      background: "white",
      underline: {
        "&:before": {
          borderBottom: `none`,
          content: "none",
        },
        "&:after": {
          borderBottom: `none`,
        },
      },
    },

    MuiInputBase: {
      root: {},
      input: {
        background: "white",
        opacity: 1,
      },
    },

    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
        marginBottom: 18,
        fontSize: 14,
      },
      input: {
        color: "black",
        fontFamily: localTheme.fontFamily.tertiary,
        padding: "18px",
        [theme.breakpoints.down("600")]: {
          maxHeight: "45px",
        },
      },
      notchedOutline: {
        borderColor: "white",
      },
    },
  },
}

export const ContactFormStyled = styled.form`
  @media (min-width: ${props => props.theme.breakpoints.md}) {
  }

  .MuiSvgIcon-root-42.MuiSelect-icon-11 {
    position: absolute;
    right: 17px;
    display: inline-block;
    pointer-events: none;
    transform: translate(0%, 7%);
  }
  .MuiSelect-iconOpen {
    transform: rotate(180deg);
  }

  .Mui-focused {
    color: white !important;

    .MuiOutlinedInput-notchedOutline {
      border-color: green !important;
    }
  }

  .MuiOutlinedInput-multiline {
    padding: 0;
  }

  .Mui-checked {
    color: white !important;
  }

  #body {
    height: 150px !important;
    padding-left: 18px;
    padding-top: 10px;
  }

  #name-option {
    padding-left: 14px;
  }

  .Success-Message {
    color: white;
  }
  .Error-Message {
    color: white;
    max-width: 300px;
  }
`

export const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`

export const MessageContainer = styled.div`
  padding-top: 6px;
`

export const MessageContainerMain = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-right: 20px;
  flex-direction: row-reverse;

  .Form__SubmitButton {
    border: 2px solid red;
  }

  .Error-Message {
    p {
      font-size: 16px !important;
    }
    color: white;
    font-family: ${props => props.theme.fonts.primary};
    width: 100%;
  }
  .Success-Message {
    color: white;

    @media (max-width: ${localTheme.breakpoints.md}) {
      width: 100%;
    }
  }

  button {
    border: none;
    background: transparent;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }
`

export const FormSelectLabel = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-right: 30px;
  padding-bottom: 15px;

  p {
    padding-right: 13px;
  }
`

export const SuccessContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 100%;
  margin-top: 50px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-top: 150px;
  }
`
export const SuccesContent = styled.div`
  margin: 0 auto;
  width: 250px;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 350px;
  }
`

export const SuccessTitle = styled.div`
  font-family: ${props => props.theme.fontFamily.tertiary};
  font-size: ${props => props.theme.fonts.heading6};
  line-height: 1.4;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.fonts.heading6};
  }
`
export const SuccessText = styled.div`
  margin-top: 25px;
`

export const FormContainer = styled.div`
  width: 53%;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 73%;
  }
`
