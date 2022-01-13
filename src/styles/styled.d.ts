import 'styled-components';

declare module 'styled-components' {
    interface IButtonColor {
        text: string;
        background: string;
        border: string;

        hover?: IButtonColor;
    }

    export interface DefaultTheme {
        default: {
            main: string;
            mainBackground: string;
            detail: string;
            hover: string;
            divider: string;
            icon: string;
            translucent: string;
            success: string;
            error: string;

            text: {
                primary: string;
                warning: string;
                hover: string;
                white: string;
                gray: string;
                underline: string;
                translucent: string;
            };

            button: {
                primary: IButtonColor;
                secondary: IButtonColor;
                success: IButtonColor;
            };

            footer: {
                background: string;
                text: string;
            };
        };
    }
}
