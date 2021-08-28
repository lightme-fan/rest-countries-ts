import React, { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { ContextProvider } from './Context/GlobalContext'
import { CountryCards } from './components/Cards/CountryCards'
import { SearchForm } from './components/SearchForm/SearchForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CountryDetails } from './components/CountryDetails/CountryDetails'
import {
  darkTheme,
  GlobalStyles,
  lightTheme,
  MainContainer,
  WrapperContainer,
} from './globalStyles'
import { ThemeProvider } from 'styled-components'

const App: React.FC = () => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <ContextProvider>
          <MainContainer>
            <Header onClick={toggleTheme} />
            <WrapperContainer>
              <Switch>
                <Route path='/' exact>
                  <>
                    <SearchForm />
                    <CountryCards />
                  </>
                </Route>
                <Route path='/:countryName'>
                  <CountryDetails />
                </Route>
                <Route path='/:border'>
                  <CountryCards />
                </Route>
              </Switch>
            </WrapperContainer>
          </MainContainer>
        </ContextProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App
