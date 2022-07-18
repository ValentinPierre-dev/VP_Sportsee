import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import VerticalMenu from './components/VerticalMenu';
import Profil from './pages/Profil';

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Roboto', Helvetica, sans-serif;
    }
    body {
      width: 100%;
      min-height: 100vh;
      margin: auto;
    }
    h1 {
      font-size: 48px;
      margin: 0;
    }
    h2 {
      font-size: 18px;
      margin: 30px 0 60px 0;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Content>
      <VerticalMenu />
      <Routes>
        <Route path="/user" element={<Profil />}>
          <Route path=":userId" element={<Profil />} />
        </Route>
      </Routes>
    </Content>
  </BrowserRouter>
);
