import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import '@fonts/fonts.css';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        color:${props => props.theme.default.text.primary};
        
        font-family: 'NotoSans', 'sans-serif';
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5; 
        height: 100%;
    }

`;
