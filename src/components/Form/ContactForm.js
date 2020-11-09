import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import TextField from "@material-ui/core/TextField"
import { ThemeProvider } from "@material-ui/core/styles"
import { validateInput, validateAll } from "../../utils/Function/ValidateForm"

import Text from "~/components/Utilities/Text"
import {
  theme,
  ContactFormStyled,
  MessageContainerMain,
  MessageContainer,
} from "./styles"

const ContactForm = () => {
  const [formSuccess, setFormSuccess] = useState(false)
  const [formValue, setFormValue] = useState({
    value: "",
    name: "",
    email: "",
    text: "",
  })

  const [formStatus, setFormStatus] = useState({
    state: false,
    message: "",
    error: "",
  })

  useEffect(() => {
    if (formSuccess) {
      setTimeout(() => {
        setFormSuccess(false)
        setFormStatus({
          state: false,
          message: "",
        })
        setFormValue({ name: "", email: "", text: "" })
      }, 5000)
    }
  }, [formSuccess])

  const handleSubmit = e => {
    e.preventDefault()

    const validationOnSubmit = validateAll(e.target, formValue)

    if (!validationOnSubmit.state) {
      return setFormStatus({
        message: validationOnSubmit.message,
        state: validationOnSubmit.state,
      })
    }

    const form = e.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        setFormSuccess(true)
        setFormStatus({
          state: true,
          message: "Success",
        })
      } else {
        setFormStatus({
          state: false,
          message: "Error!!!",
        })
      }
    }

    xhr.send(data)
  }

  const handleChange = e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  }

  const formOnBlur = e => {
    const validation = validateInput(e.target, formValue)
    if (!validation.state) {
      setFormStatus({
        message: validation.message,
        state: validation.state,
        error: !validation.state ? e.target.name : "",
      })
    } else {
      setFormStatus({
        message: "",
        state: validation.state,
        error: !validation.state ? e.target.name : "",
      })
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: "73%", margin: "0 auto" }}>
        <ContactFormStyled
          name="contact"
          noValidate
          onBlur={formOnBlur}
          onSubmit={handleSubmit}
          fullWidth
          label=""
          action="https://formspree.io/f/moqplaqw"
          method="POST"
        >
          <TextField
            required
            id="name"
            placeholder="Name"
            onChange={handleChange}
            fullWidth
            variant="outlined"
            name="name"
            error={formStatus.error === "name"}
            focused={false}
            value={formValue.name}
          />
          <TextField
            placeholder="Email"
            required
            id="forgot-password-email"
            name="email"
            onChange={handleChange}
            fullWidth
            variant="outlined"
            error={formStatus.error === "email"}
            focused={false}
            value={formValue.email}
          />
          <TextField
            required
            id="body"
            type="textarea"
            name="text"
            onChange={handleChange}
            placeholder="Enter your message"
            fullWidth
            variant="outlined"
            multiline={true}
            error={formStatus.error === "text"}
            focused={false}
            value={formValue.text}
          />
          <MessageContainerMain>
            <button type="submit">Send</button>

            <MessageContainer
              className={formStatus.state ? "Success-Message" : "Error-Message"}
            >
              <Text type="smallText400">{formStatus.message}</Text>
            </MessageContainer>
          </MessageContainerMain>
        </ContactFormStyled>
      </div>
    </ThemeProvider>
  )
}

ContactForm.propTypes = {
  query: PropTypes.object,
  page17: PropTypes.object,
}

export default ContactForm
