import styled, { createGlobalStyle } from 'styled-components'
import lightMode from '../icons/light-mode.svg'
import darkMode from '../icons/dark-mode.svg'
import whiteUpIcon from '../icons/white-up-arrow.svg'
import darkUpIcon from '../icons/select.svg'
import darkSearch from '../icons/search.svg'
import whiteSearch from '../icons/full-search.svg'
import whiteLeftArrow from '../icons/white-left-arrow.svg'
import darkLeftArrow from '../icons/left-arrow.svg'

export const MainContainer = styled.div`
  position: relative;

  a {
    text-decoration: none;
    color: #111214;
  }
`

export const WrapperContainer = styled.div`
  max-width: 1225px;
  margin: auto;
`

export const lightTheme = {
  body: '#FFF',
  text: '#000',
  toggleBorder: '#FFF',
  background: '#363537',
  active: '#FFF',
  icon: lightMode,
  upIcon: darkUpIcon,
  searchIcon: darkSearch,
  leftArrow: darkLeftArrow,
  hover: '#E0F8D7',
}

export const darkTheme = {
  body: '#202D36',
  text: '#fff',
  toggleBorder: '#6B8096',
  background: '#202D36',
  active: '#2B3743',
  icon: darkMode,
  upIcon: whiteUpIcon,
  searchIcon: whiteSearch,
  leftArrow: whiteLeftArrow,
  hover: '#383624',
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: any) => theme.body};
    color: ${({ theme }: any) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`
