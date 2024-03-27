import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import { AreaProvider } from './contexts/AreaContext';
import MyRouter from './MyRouter';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AreaProvider>
          <GlobalStyles />
          <MyRouter />
        </AreaProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
