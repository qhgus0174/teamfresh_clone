import React from 'react';
import styled from 'styled-components';
import FooterItem from '@components/Layout/Footer/Item';
import { ContactData, OthersData, TimfData } from '@tempData/footer';
import { widthMedia } from '@styles/device';

const Footer = () => {
    return (
        <Container>
            <FooterList>
                <FooterItem titleText="Timf" data={TimfData} />
                <FooterItem titleText="Contact us" data={ContactData} />
                <FooterItem titleText="Others" data={OthersData} />
            </FooterList>
            <CopyRight>© TeamFresh All right reserved</CopyRight>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;

    color: ${props => props.theme.default.footer.text};
    background-color: ${props => props.theme.default.footer.background};

    box-sizing: border-box;

    width: 100%;
    min-height: 470px;

    align-items: center;
`;

const FooterList = styled.div`
    display: flex;
    justify-content: space-around;

    margin-bottom: 4em;

    width: 100%;
    height: 85%;

    ${widthMedia.phone} {
        flex-direction: column;
        align-items: center;
    }
`;

const CopyRight = styled.div`
    font-size: 0.8em;
    text-align: center;
    border-top: 1px solid ${props => props.theme.default.footer.text};

    box-sizing: border-box;
    padding: 2em 0;

    width: 90%;
    height: 15%;
`;

export default Footer;
