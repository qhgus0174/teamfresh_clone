import React from 'react';
import styled from 'styled-components';
import Facebook from '@components/Image/Facebook';
import Youtube from '@components/Image/Youtube';
import Title from '@components/Common/Contents/Title';
import Explain from '@components/Common/Box/Explain';
import Slider from '@components/Slider';
import Card from '@components/Common/Box/Card';
import List from '@components/Common/Box/List';
import { cardData } from '@tempData/card';
import { noticeData } from '@tempData/notice';
import { sliderData } from '@tempData/slider';
import { widthMedia } from '@styles/device';

const Main = () => {
    return (
        <div>
            <Slider slideItem={sliderData} autoFlow={6000} />
            <Explain
                title="대한민국 No.1 Cold-Chain Platform"
                content="팀프레시는 국내 유일 Door to Door Cold Chain 통합물류 서비스를 제공합니다. 입출고 – 주문처리 - 새벽배송 전 과정에 신선도 유지를 위한 설비/역량을 보유하고 있습니다."
            />
            <Business>
                <Title text="TIMF BUSINESS" align="center" fontSize="large" width="70" isUnderline={true} />
                <CardList>
                    {cardData.map(({ imgUrl, titleText, explainText }, cardIndex) => {
                        return <Card key={cardIndex} imgUrl={imgUrl} titleText={titleText} explainText={explainText} />;
                    })}
                </CardList>
            </Business>
            <Board>
                <BoardContainer>
                    <Notice>
                        <Title text="공지사항" fontSize="small" />
                        <List titleText="Notice" data={noticeData} />
                    </Notice>
                    <Notice>
                        <Title text="보도자료" fontSize="small" />
                        <List titleText="TimF News" data={[]} />
                    </Notice>
                </BoardContainer>
            </Board>
            <Connect>
                <Title text="Connect" fontSize="large" align="center" />
                <Icons>
                    <a href="https://www.facebook.com/teamfresh.timf">
                        <Facebook width="70" height="70" fill="#475993" />
                    </a>
                    <a href="https://www.youtube.com/watch?v=vlXzU-1Oec4">
                        <Youtube width="70" height="70" fill="#d7143a" />
                    </a>
                </Icons>
            </Connect>
        </div>
    );
};

const Business = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    padding: 3em;

    width: 100%;

    ${widthMedia.phone} {
        padding: 4em 0;
    }
`;

const CardList = styled.section`
    display: flex;
    flex-wrap: wrap;

    margin-top: 6em;

    ${widthMedia.phone} {
        padding: 0 1.7em;
    }
`;

const Board = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

const BoardContainer = styled.div`
    display: flex;
    justify-content: space-between;

    border-top: thin solid ${props => props.theme.default.divider};
    border-bottom: thin solid ${props => props.theme.default.divider};

    padding: 3em;
    margin-top: 1em;
    margin-bottom: 4em;

    width: 90%;

    ${widthMedia.tablet} {
        flex-direction: column;

        width: 85%;
    }
`;

const Notice = styled.article`
    display: flex;
    flex-direction: column;
    flex-basis: 49%;
    width: 100%;

    ${widthMedia.tablet} {
        flex-basis: 100%;
        margin-bottom: 2em;
    }
`;

const Connect = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    margin-bottom: 4em;

    width: 100%;
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    box-sizing: border-box;
    margin-top: 3em;

    width: 450px;

    cursor: pointer;

    & > a {
        &:hover {
            & > svg {
                width: 100%;
                height: auto;
                fill: ${props => props.theme.default.text.gray};
            }
        }
    }

    ${widthMedia.phone} {
        width: 200px;
        .connect-svg-container {
            width: 40px;
        }
    }
`;

export default Main;
