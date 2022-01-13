import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import LogoImg from '@assets/img/logo.png';
import MenuIcon from '@components/Image/Menu';
import { menuData } from '@tempData/menu';
import { widthMedia } from '@styles/device';
import { useOnClickOutside } from 'hooks/useOnClickOutside';

const Header = () => {
    const theme = useTheme();
    const [shownMenuId, setShownMenuId] = useState<string>('');
    
    const ref = useRef<HTMLUListElement>(null);
    useOnClickOutside(ref, () => resetOpenMenu());

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const setActiveMenu = ({ menuId }: { menuId: string }) => {
        shownMenuId === menuId ? setShownMenuId('') : setShownMenuId(menuId);
    };

    const resetOpenMenu = () => {
        setShownMenuId('');
        setIsMenuOpen(false);
    };
    

    return (
        <Container>
            <Logo>
                <Link to="/">
                    <img alt="로고" src={LogoImg} width="100" height="20.71" />
                </Link>
                <DropDownButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <MenuIcon width="25" height="25" fill={theme.default.text.gray} />
                </DropDownButton>
            </Logo>
            <Menu>
                <ItemList ref={ref} visible={isMenuOpen}>
                    {menuData.map(({ id, title: menuTitle, link: menuLink, sub }, menuIndex) => {
                        return (
                            <Item
                                key={menuIndex}
                                onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                                    if (sub && e.defaultPrevented) return;
                                    sub ? setActiveMenu({ menuId: id }) : resetOpenMenu();
                                }}
                            >
                                {menuLink ? <Link to={menuLink}>{menuTitle}</Link> : <span>{menuTitle}</span>}
                                {sub && (
                                    <SubMenuList visible={id === shownMenuId}>
                                        {sub.map(({ title: subTitle, link: subLink }, subMenuIndex) => {
                                            return (
                                                <SubItem
                                                    onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                                                        e.preventDefault();
                                                        resetOpenMenu();
                                                    }}
                                                    key={subMenuIndex}
                                                >
                                                    <Link to={subLink}>{subTitle}</Link>
                                                </SubItem>
                                            );
                                        })}
                                    </SubMenuList>
                                )}
                            </Item>
                        );
                    })}
                </ItemList>
            </Menu>
        </Container>
    );
};

const Container = styled.header`
    display: flex;

    position: sticky;

    box-sizing: border-box;
    top: 0;
    padding: 1.2em;
    z-index: 100;

    background: ${props => props.theme.default.mainBackground};

    width: 100%;
    height: 60px;

    &:hover {
        cursor: pointer;
    }

    ${widthMedia.tablet} {
        display: block;
    }
`;

const Logo = styled.article`
    margin-left: 10px;

    ${widthMedia.tablet} {
        display: flex;
    }
`;

const Menu = styled.nav`
    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;

    ${widthMedia.tablet} {
        display: block;
    }
`;

const ItemList = styled.ul<{ visible: boolean }>`
    display: flex;
    justify-content: flex-end;

    background: ${props => props.theme.default.mainBackground};

    box-sizing: border-box;

    width: 100%;

    ${widthMedia.tablet} {
        display: ${props => (props.visible ? `block` : `none`)};

        padding: 2em;
    }
`;

const SubMenuList = styled.ul<{ visible: boolean }>`
    display: ${props => (props.visible ? `block` : `none`)};

    position: absolute;
    background-color: ${props => props.theme.default.detail};
    box-shadow: 0px 3px 10px -1px rgb(0 0 0 / 20%);

    box-sizing: border-box;
    padding: 0.6em 0;

    ${widthMedia.tablet} {
        position: inherit;
    }
`;

const Item = styled.li`
    & > a,
    span {
        display: block;

        box-sizing: border-box;
        margin-right: 2em;
        padding: 0.5em 0;

        color: ${props => props.theme.default.text.gray};
        font-size: 0.9rem;
        text-decoration: none;

        &:hover {
            font-weight: 600;
            color: ${props => props.theme.default.text.primary};
        }
    }

    &:hover {
        ul {
            display: block;
            color: red;
        }
    }

    ${widthMedia.tablet} {
        padding-top: 0.6em;
    }
`;

const DropDownButton = styled.div`
    display: none;

    ${widthMedia.tablet} {
        display: flex;
        justify-content: flex-end;

        position: relative;

        width: 100%;
        height: 100%;
    }
`;

const SubItem = styled.li`
    font-size: 0.9em;

    width: 100%;

    &:hover {
        & > a {
            color: ${props => props.theme.default.text.primary};
        }

        font-weight: 500;
        background: ${props => props.theme.default.hover};
    }

    & > a {
        display: inline-block;

        color: ${props => props.theme.default.text.gray};
        text-decoration: none;

        box-sizing: border-box;
        padding: 0.9em 1.9em;

        width: 100%;
    }
`;

export default Header;
