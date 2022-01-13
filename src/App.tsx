import React from 'react';
import AppRouter from './Router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/global-styles';
import { theme } from '@styles/theme';

const App = () => {
    return (
        <ThemeProvider theme={{ default: theme.default }}>
            <GlobalStyle />
            <AppRouter />
        </ThemeProvider>
    );
};

export default App;
