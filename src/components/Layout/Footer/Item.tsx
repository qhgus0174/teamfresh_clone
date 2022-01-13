import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { widthMedia } from '@styles/device';

interface IFooterItem {
    titleText: string;
    data: IFooterData[];
}

interface IFooterData {
    text: string;
    link?: string;
}

const FooterItem = ({ titleText, data }: IFooterItem) => {
    return (
        <Info>
            <Title>{titleText}</Title>
            <Contents>
                {data.map(({ text, link }, index) => {
                    return (
                        <ContentsText key={index}>
                            {link ? <Link to={link}>{text}</Link> : <div dangerouslySetInnerHTML={{ __html: text }} />}
                        </ContentsText>
                    );
                })}
            </Contents>
        </Info>
    );
};

const Info = styled.div`
    margin-top: 3em;
    width: 25%;

    ${widthMedia.phone} {
        width: 90%;
        margin-top: 1.5em;
        margin-bottom: 1.5em;
    }
`;

const Title = styled.div`
    border-top: 1px solid ${props => props.theme.default.footer.text};
    border-bottom: 1px solid ${props => props.theme.default.footer.text};

    font-size: 0.9em;

    padding: 1em 0;

    text-align: center;
`;

const Contents = styled.div`
    text-align: center;
    font-size: 0.85em;
`;

const ContentsText = styled.div`
    text-align: center;
    padding-top: 1em;
`;

export default FooterItem;
