import { useState, createContext, useLayoutEffect } from "react";

export const ThemeContext = createContext({
  theme: 'null',
  setTheme: () => null
})

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? 'dark' : 'light'

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultTheme)
  const value = {theme, setTheme}

  useLayoutEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('app-theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}