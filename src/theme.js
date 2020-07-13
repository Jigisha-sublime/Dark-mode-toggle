import theme from 'styled-theming'

export const backgroundColor = theme('mode', {
  light: 'white',
  dark: 'black'
})

export const textColor = theme('mode', {
  light: 'black',
  dark: 'white'
})

export const buttonBackgroundColor = theme('mode', {
  light: '#222',
  dark: '#eee'
});

export const buttonTextColor = theme('mode', {
  light: 'white',
  dark: 'black'
});