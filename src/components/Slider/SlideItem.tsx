import React from 'react';
import styled from 'styled-components';
import { widthMedia } from '@styles/device';
import { ISlideTextItem } from '@tempData/slider';

interface ISlideItem {
    img: string;
    alt: string;
    text?: ISlideTextItem;
}

const SlideItem = ({ img, alt, text }: ISlideItem) => {
    return (
        <Container>
            <Img src={img} alt={alt} />
            {text && (
                <Text>
                    <Title>{text.title}</Title>
                    <Content>{text.content}</Content>
                </Text>
            )}
        </Container>
    );
};

const Container = styled.article`
    position: relative;

    width: 100vw;
    height: auto;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;

    ${widthMedia.phone} {
        min-height: 250px;
    }
`;

const Text = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    bottom: 0;

    width: 100%;
    height: 100%;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 500;
    color: ${props => props.theme.default.text.white};

    margin-bottom: 0.3em;

    ${widthMedia.tablet} {
        font-size: 1.2rem;
    }

    ${widthMedia.phone} {
        font-size: 1.1rem;
    }
`;

const Content = styled.h1`
    font-size: 3rem;
    text-align: center;
    font-weight: 600;
    color: ${props => props.theme.default.text.translucent};

    width: 70%;

    ${widthMedia.tablet} {
        font-size: 1.4rem;
    }

    ${widthMedia.phone} {
        font-size: 1.2rem;
    }
`;

export default SlideItem;
