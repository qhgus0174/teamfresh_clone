import Button from '@components/Common/Button/Button';
import { widthMedia } from '@styles/device';
import React from 'react';
import styled from 'styled-components';
interface ICard {
    imgUrl: string;
    titleText: string;
    explainText: string;
}

const Card = ({ imgUrl, titleText, explainText }: ICard) => {
    return (
        <Container>
            <Img>
                <img src={imgUrl} width="330" height="262" alt="메인 카드 이미지1" />
            </Img>
            <Header>
                <Title>{titleText}</Title>
                <Explain>{explainText}</Explain>
            </Header>
            <Footer>
                <Button color="primary" radius="round">
                    더 알아보기
                </Button>
            </Footer>
        </Container>
    );
};

const Container = styled.article`
    display: flex;
    flex-direction: column;
    flex-basis: 25%;

    padding-right: 1em;
    padding-left: 1em;
    box-sizing: border-box;

    img {
        max-width: 100%;
        height: auto;
    }

    ${widthMedia.tablet} {
        flex-basis: 100%;
        margin-bottom: 3em;

        img {
            width: 550px;
        }
    }
`;

const Img = styled.div`
    display: flex;
    justify-content: center;
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;

    padding: 0.9em;

    ${widthMedia.tablet} {
        padding: 1em 0.7em;
    }
`;

const Title = styled.h2`
    font-size: 1.3rem;
    font-weight: 500;

    margin-bottom: 0.5em;
`;

const Explain = styled.div`
    font-size: 0.9rem;
    color: ${props => props.theme.default.text.gray};

    margin-bottom: 1em;
`;

const Footer = styled.footer`
    padding: 0 1.1em;

    ${widthMedia.tablet} {
        padding: 0 0.4em;
    }
`;

export default Card;
