import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color: keyof DefaultTheme['default']['button'];
    radius?: ButtonRadiusType;
}

type ButtonRadiusType = 'basic' | 'round';

const Button = ({ type = 'button', children, color = 'primary', radius = 'basic', ...rest }: IButton) => {
    return (
        <BasicButton radius={radius} type={type} color={color} {...rest}>
            <span>{children}</span>
        </BasicButton>
    );
};

const BasicButton = styled.button<IButton>`
    background-color: ${props => props.theme.default.button[props.color].background};
    color: ${props => props.theme.default.button[props.color].text};
    border: 1px solid ${props => props.theme.default.button[props.color].border};
    ${props => props.radius === 'round' && `border-radius : 2rem;`};

    cursor: pointer;
    font-weight: 600;

    padding: 0.5em 1em;

    &:hover {
        background-color: ${props => props.theme.default.button[props.color].hover?.background};
        color: ${props => props.theme.default.button[props.color].hover?.text};
    }
`;

export default Button;
