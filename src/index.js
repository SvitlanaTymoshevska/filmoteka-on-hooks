import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from "constans/theme";
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
);
