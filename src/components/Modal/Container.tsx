import React from 'react';
import styled from 'styled-components';
import { IPortalOption } from '@components/Modal/Portal';
import Title from '@components/Common/Contents/Title';
import { widthMedia } from '@styles/device';
import Button from '@components/Common/Button/Button';

export interface IPortalProperty {
    children: React.ReactNode;
    options: IPortalOption;
}

const ModalContainer = ({ children, options }: IPortalProperty) => {
    return (
        <ModalInner width={options.width} height={options.height}>
            <ModalHeader>
                <Title fontSize="small" text={options.header} isUnderline={true} />
            </ModalHeader>
            <ModalContent>{children}</ModalContent>
            <ModalFooter>
                <Button onClick={() => options.closeModal(true)} color="success">
                    확인
                </Button>
            </ModalFooter>
        </ModalInner>
    );
};

const ModalHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;
    font-size: 1.3em;
    font-weight: 500;

    height: 80px;
`;

const ModalInner = styled.div<Pick<IPortalOption, 'width' | 'height'>>`
    display: flex;
    flex-direction: column;

    z-index: 2;

    position: relative;

    padding: 1rem 2rem;

    ${widthMedia.phone} {
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 0.5rem;
        padding-bottom: 1rem;
    }

    box-sizing: content-box;
    border-radius: 4px;
    background-color: ${props => props.theme.default.mainBackground};
    box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.3);

    overflow-x: hidden;
    overflow-y: auto;

    width: ${props => (props.width ? props.width : '300')}px;
    height: ${props => (props.height ? props.height : '450')}px;
    overflow-y: auto;

    max-height: 90vh;
    max-width: 95vw;

    ${widthMedia.phone} {
        max-height: 80vh;
        max-width: 80vw;
    }
`;

const ModalContent = styled.section`
    box-sizing: border-box;
    height: calc(100% - 120px);
`;

const ModalFooter = styled.footer`
    display: flex;
    justify-content: flex-end;
    height: 40px;
`;

export default ModalContainer;
