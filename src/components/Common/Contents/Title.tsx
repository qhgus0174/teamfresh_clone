import React from 'react';
import styled from 'styled-components';

interface ITitle {
    text: string;
    fontSize?: FontSizeType;
    isUnderline?: boolean;
    align?: TitleAlignType;
    bold?: boolean;
    width?: string;
    icon?: JSX.Element;
    iconDirection?: IconDirectionType;
}

type FontSizeType = 'small' | 'medium' | 'large';
type TitleAlignType = 'flex-start' | 'center' | 'flex-end';
type IconDirectionType = 'left' | 'right';

const Title = ({
    text,
    isUnderline = false,
    align = 'flex-start',
    fontSize = 'medium',
    bold = true,
    width = '100',
    icon,
    iconDirection = 'right',
}: ITitle) => {
    return (
        <Container isUnderline={isUnderline} fontSize={fontSize} bold={bold} width={width}>
            <Body align={align} iconDirection={iconDirection}>
                {text}
                {icon && icon}
            </Body>
        </Container>
    );
};

const getFontSize = (fontSize: FontSizeType) => {
    switch (fontSize) {
        case 'small':
            return '1.2';
        case 'medium':
            return '1.5';
        case 'large':
            return '1.8';
    }
};

const Container = styled.article<Required<Omit<ITitle, 'text' | 'icon' | 'align' | 'iconDirection'>>>`
    font-size: ${props => getFontSize(props.fontSize)}em;
    ${props => props.bold && `font-weight:600;`}

    width: ${props => props.width}%;

    ${props =>
        props.isUnderline &&
        `
                &:after {
                    content: '';
                    margin-top: 1em;
                    display: block;
                    width: 100%;
                    border-bottom: 1px solid ${props.theme.default.text.underline};
                }
            `}
`;

const Body = styled.div<{ align: TitleAlignType; iconDirection: IconDirectionType }>`
    display: flex;
    ${props => props.iconDirection === 'left' && `flex-direction : row-reverse;`}
    justify-content: ${props => props.align};
    align-items: center;

    svg {
        margin-left: 0.5em;
    }
`;

export default Title;
