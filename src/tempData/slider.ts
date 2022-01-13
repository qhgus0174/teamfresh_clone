import SlideImg1 from '@assets/img/main/slide/img1.png';
import SlideImg2 from '@assets/img/main/slide/img2.png';
import SlideImg3 from '@assets/img/main/slide/img3.png';

export interface ISliderItem {
    imgUrl: string;
    text?: ISlideTextItem;
}

export interface ISlideTextItem {
    title?: string;
    content?: string;
}

export const sliderData: ISliderItem[] = [
    { imgUrl: SlideImg1, text: { title: '대한민국 NO.1', content: 'Cold Chain Platform' } },
    { imgUrl: SlideImg2, text: { title: 'TIMF', content: 'Connect Freshness' } },
    {
        imgUrl: SlideImg3,
        text: { title: 'COMMERCE TREND', content: '신선식품 물류를 선도하는 시스템 구축' },
    },
];
