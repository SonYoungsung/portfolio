import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from "./Styles/GlobalStyles"
import Theme from "./Styles/Theme"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);