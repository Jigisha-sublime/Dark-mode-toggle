import React, { useContext, createContext, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { backgroundColor, textColor } from './theme'


const ThemeToggleContext = createContext({
  toggle: () => { }
})


export const useTheme = () => useContext(ThemeToggleContext)


export const MyThemeProvider = ({ children }) => {

  const [themeState, setThemeState] = useState({ mode: 'dark' })

  const toggle = () => {
    const modeToggle = themeState.mode === 'light' ? 'dark' : 'light';

    setThemeState({ mode: modeToggle })

  }

  const Wrapper = styled.div`
      background-color:${backgroundColor};
      color: ${textColor}
  `
  return (
    <ThemeToggleContext.Provider value={toggle}>
      <ThemeProvider theme={themeState}>
        <Wrapper>
          {children}
        </Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  )
}