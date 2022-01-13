import CardImage1 from '@assets/img/main/card/main_card1.png';
import CardImage2 from '@assets/img/main/card/main_card2.png';
import CardImage3 from '@assets/img/main/card/main_card3.jpg';
import CardImage4 from '@assets/img/main/card/main_card4.jpg';

export interface ICardData {
    imgUrl: string;
    titleText: string;
    explainText: string;
}

export const cardData: ICardData[] = [
    {
        imgUrl: CardImage1,
        titleText: '새벽배송',
        explainText:
            '팀프레시는 당일 입고 및 출고를 원칙으로 새벽배송 망을 운영 중입니다. 배송 기사님들은 팀프레시 배송매니저 앱을 사용해 아침 7시까지 배송을 완료합니다.',
    },
    {
        imgUrl: CardImage2,
        titleText: '화물주선',
        explainText:
            '화물주선은 화물차량이 필요한 곳에 차량을 보내드리는 서비스입니다. 팀프레시의 데이터베이스를 활용해 차량의 원활한 수급이 가능하도록 도와드립니다.',
    },
    {
        imgUrl: CardImage3,
        titleText: '풀필먼트',
        explainText:
            '풀필먼트는 재고관리, 주문처리, CS 업무 등을 자체적으로 해결하기 어려운 기업을 위한 서비스입니다. 각 화주사별 요구사항을 매뉴얼화해 관리합니다.',
    },
    {
        imgUrl: CardImage4,
        titleText: '그로서리',
        explainText:
            '급식·외식·온라인 커머스 등의 고객사에 식자재를 공급하는 서비스입니다. 기존 물류망을 활용해 식자재를 일괄 공급함으로써 비용 효율화가 가능하도록 합니다.',
    },
];
