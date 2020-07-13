import React from 'react';
import styled, { withTheme } from 'styled-components';

import { buttonBackgroundColor, buttonTextColor } from './theme'
import { useTheme } from './ThemeContext'
import './App.css';

function App(props) {

  const themeContext = useTheme();

  const toggleTheme = () => {
    themeContext()
  }

  const Button = styled.button`
      background-color:${buttonBackgroundColor};
      color:${buttonTextColor}
      `

  return (
    <div className="App">
      <Button onClick={toggleTheme}>Switch to  {props.theme.mode === 'dark' ? 'light' : 'dark'} mode</Button>
      <h3>Dark-Light theme toggler</h3>
    </div>
  );
}

export default withTheme(App);
