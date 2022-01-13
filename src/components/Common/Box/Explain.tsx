import { widthMedia } from '@styles/device';
import React from 'react';
import styled from 'styled-components';

interface IExplain {
    title: string;
    content: string;
}

const Explain = ({ title, content }: IExplain) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 6em;
    box-sizing: border-box;

    width: 100%;
    height: auto;

    background-color: ${props => props.theme.default.main};

    ${widthMedia.phone} {
        padding: 2em;
        background-color: transparent;

        & > span {
            color: ${props => props.theme.default.main};
        }
    }
`;

const Title = styled.span`
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;
    color: ${props => props.theme.default.text.white};

    margin-bottom: 1em;

    ${widthMedia.tablet} {
        font-size: 1.4rem;
    }

    ${widthMedia.phone} {
        font-size: 1.1rem;
    }
`;

const Content = styled.span`
    font-size: 1.3rem;
    font-weight: 400;
    text-align: center;
    color: ${props => props.theme.default.text.white};

    ${widthMedia.tablet} {
        font-size: 1.1rem;
    }

    ${widthMedia.phone} {
        font-size: 1rem;
    }
`;
export default Explain;
