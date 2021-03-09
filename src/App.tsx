import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { ContextProvider } from './Context/GlobalContext';
import { CountryCards } from './components/Cards/CountryCards';
import styled from 'styled-components';


const App: React.FC = () => {
  return (
    <ContextProvider>
      <div>
        <Header />
        <CountryCards />
      </div>
    </ContextProvider>
  );
}

export default App;
