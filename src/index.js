import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {Provider} from './context/context';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import './index.css';
const theme=createTheme();
const container=document.getElementById('root');
const root=createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <Provider>
    <App />
    </Provider>,
  </ThemeProvider>
);
