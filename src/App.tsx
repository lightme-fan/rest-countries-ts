import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { ContextProvider } from './Context/GlobalContext';
import { CountryCards } from './components/Cards/CountryCards';
import styled from 'styled-components';
import { SearchForm } from './components/searchForm/searchForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CountryDetails } from './components/coutryDetails/CountryDetails';


const App: React.FC = () => {
  return (
    <Router>
      <ContextProvider>
        <div>
          <Header />
          <SearchForm />
          <Switch>
            <Route path="/" exact>
              <CountryCards />
            </Route>
            <Route path="/:countryName">
              <CountryDetails/>
            </Route>
            <Route path="/:border">
              <CountryCards/>
            </Route>
          </Switch>
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;
