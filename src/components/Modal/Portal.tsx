import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import Container from '@components/Modal/Container';

interface IModalPortal {
    isOpen: boolean;
    setIsOpen: (e: boolean) => void;
    content: JSX.Element;
    options: IPortalOption;
}

export interface IPortalOption {
    header: string;
    closeModal: (e: boolean) => void;
    width?: string;
    height?: string;
}

const ModalPortal = ({ isOpen, setIsOpen, content, options }: IModalPortal) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', (e: KeyboardEvent) => handleEsc(e));

        return () => {
            window.removeEventListener('keydown', (e: KeyboardEvent) => handleEsc(e));
        };
    }, []);

    return createPortal(
        isOpen && (
            <ModalContainer>
                <Dimmer tabIndex={-1} onClick={() => setIsOpen(false)}></Dimmer>
                <Container options={options}>{content}</Container>
            </ModalContainer>
        ),
        document.getElementById('modal-root') as HTMLElement,
    );
};

const Dimmer = styled.article`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
`;

const ModalContainer = styled.section`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    box-sizing: content-box;
    border-radius: 4px;
    outline: none;

    z-index: 8888;
`;

export default ModalPortal;
