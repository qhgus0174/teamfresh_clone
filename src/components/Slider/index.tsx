import React, { useEffect, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import RightArrow from '@components/Image/RightArrow';
import SlideItem from '@components/Slider/SlideItem';
import LeftArrow from '@components/Image/LeftArrow';
import { ISliderItem } from '@tempData/slider';
import { widthMedia } from '@styles/device';

interface ISlider {
    slideItem: ISliderItem[];
    autoFlow: number;
}

type ISliderDirection = 'prev' | 'next';

const Slider = ({ slideItem, autoFlow }: ISlider) => {
    const theme = useTheme();

    const slide = useRef<HTMLDivElement>(null);

    const size = slideItem.length + 2;
    const slideSpeed = 400;
    const imgWidth = 100;

    const [isFlowing, setIsFlowing] = useState(true);
    const [currentSlide, setCurrentSlide] = useState<number>(1);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        if (isFlowing) {
            interval = setInterval(() => {
                onClickMoveNext();
            }, autoFlow);
        }
        return () => clearTimeout(interval);
    }, [isFlowing, currentSlide]);

    const onClickMovePrev = () => {
        const { current } = slide;

        if (!current) return;

        const prevSlide = currentSlide - 1;
        const translate = prevSlide * -imgWidth;
        moveImgTran({ current: current, width: translate.toString() });

        if (prevSlide == 0) {
            moveImgNoTran({ current: current, width: '300' });
            setCurrentSlide(3);
        } else {
            setCurrentSlide(prevSlide);
        }
    };

    const onClickMoveNext = () => {
        const { current } = slide;
        if (!current) return;

        const nextSlide = currentSlide + 1;
        const translate = nextSlide * -imgWidth;
        moveImgTran({ current: current, width: translate.toString() });

        if (nextSlide == size - 1) {
            moveImgNoTran({ current: current, width: '100' });
            setCurrentSlide(1);
        } else {
            setCurrentSlide(nextSlide);
        }
    };

    const moveImgTran = ({ current, width }: { current: HTMLDivElement; width: string }) => {
        current.style.transition = `${slideSpeed}ms`;
        current.style.transform = `translateX(${width}vw)`;
    };

    const moveImgNoTran = ({ current, width }: { current: HTMLDivElement; width: string }) => {
        setTimeout(function () {
            current.style.transition = '0s';
            current.style.transform = `translateX(-${width}vw)`;
        }, slideSpeed);
    };

    return (
        <Container onMouseOver={() => setIsFlowing(false)} onMouseOut={() => setIsFlowing(true)}>
            <SlideList ref={slide} size={size}>
                {[slideItem[2]].concat(slideItem.concat(slideItem[0])).map(({ imgUrl, text }, index: number) => {
                    return (
                        <SlideItem
                            key={index}
                            alt={`슬라이드 이미지${index}`}
                            img={imgUrl}
                            text={{ title: text?.title, content: text?.content }}
                        />
                    );
                })}
            </SlideList>
            <Nav currentSlide={currentSlide}>
                <li></li>
                <li></li>
                <li></li>
            </Nav>
            <Arrow onClick={() => onClickMovePrev()} direction="prev">
                <LeftArrow width="25" fill={theme.default.icon} />
            </Arrow>
            <Arrow onClick={() => onClickMoveNext()} direction="next">
                <RightArrow width="25" fill={theme.default.icon} />
            </Arrow>
        </Container>
    );
};

const Container = styled.section`
    position: relative;
    overflow: hidden;
`;

const SlideList = styled.div<{ size: number }>`
    display: flex;
    width: ${props => (props.size > 0 ? props.size * 100 : `100`)}vw;
    transform: translateX(-100vw);
`;

const Arrow = styled.div<{ direction: ISliderDirection }>`
    display: flex;
    justify-content: center;

    position: absolute;
    top: 0;
    bottom: 0;
    ${props => (props.direction === `prev` ? `left: 0` : `right: 0`)};

    width: 15%;

    &:hover {
        cursor: pointer;
    }
`;

const Nav = styled.ul<{ currentSlide: number }>`
    display: flex;
    justify-content: center;

    position: absolute;
    bottom: 5%;

    width: 100%;

    & > li {
        height: 5px;
        width: 40px;
        margin-left: 3px;
        margin-right: 3px;
        background-color: ${props => props.theme.default.translucent};
    }

    & > li:nth-of-type(${props => props.currentSlide}) {
        background-color: ${props => props.theme.default.icon};
    }

    ${widthMedia.phone} {
        display: none;
    }
`;

export default Slider;
