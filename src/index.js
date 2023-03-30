import React from 'react';
import ReactDOM from 'react-dom/client';
import Content from './components/Content';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';


const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    color:#fff;
    background-color: #222;
  }
`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <Content />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
