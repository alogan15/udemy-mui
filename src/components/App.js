import React from 'react';
import theme from './ui/Theme';
import Header from './ui/Header';
import {  ThemeProvider  } from '@mui/material/styles';

function App() {
  return (
   <ThemeProvider theme={theme}>
      <Header />
      Hello!
  </ThemeProvider>
  );
}

export default App;
