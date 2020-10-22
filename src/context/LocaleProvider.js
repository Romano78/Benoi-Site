import React, { createContext } from "react"
import PropTypes from "prop-types"

const LocaleContext = createContext()

export const LocaleProvider = ({ children }) => {
  return <LocaleContext.Provider>{children}</LocaleContext.Provider>
}

LocaleProvider.propTypes = {
  children: PropTypes.any,
  locale: PropTypes.string,
}

export default LocaleContext
