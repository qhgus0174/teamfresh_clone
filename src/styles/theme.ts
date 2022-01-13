import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
    default: {
        main: '#172d4c',
        mainBackground: '#f8f9fa',
        detail: '#fafafa',
        hover: '#dddddd',
        divider: 'rgba(0,0,0,.1)',
        icon: '#ffffff',
        translucent: 'rgba(255, 255, 255, 0.5)',
        error: '#f71e1e',
        success: '#0acf97',

        text: {
            primary: '#222222',
            warning: '#f71e1e',
            hover: '#0d0d0d',
            white: '#ffffff',
            gray: '#606060',
            underline: '#b4b4b4',
            translucent: 'rgba(255, 255, 255, 0.8)',
        },

        button: {
            primary: {
                text: '#6c757d',
                background: '#ffffff',
                border: '#6c757d',
                hover: {
                    text: '#ffffff',
                    background: '#6c757d',
                    border: '#6c757d',
                },
            },
            secondary: {
                text: '#ffffff',
                background: '#172d4c',
                border: 'transparent',
                hover: {
                    text: '#ffffff',
                    background: '#172d4c',
                    border: 'transparent',
                },
            },
            success: {
                text: '#ffffff',
                background: '#0acf97',
                border: 'transparent',
                hover: {
                    text: '#ffffff',
                    background: '#0fa67b',
                    border: 'transparent',
                },
            },
        },

        footer: {
            background: '#30353e',
            text: '#d5d5d5',
        },
    },
};

export default { theme };
