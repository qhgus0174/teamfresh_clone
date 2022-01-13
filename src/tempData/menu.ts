export interface IMenu {
    id: string;
    title: string;
    link?: string;
    sub?: ISubMenu[];
}

export interface ISubMenu {
    title: string;
    link: string;
}

export const menuData: IMenu[] = [
    {
        id: '1',
        title: '회사소개',
        sub: [
            {
                title: '회사 소개',
                link: '/company/timf/timfInfo',
            },
            {
                title: '협력사 소개',
                link: '/company/partner/partnerInfo',
            },
            {
                title: '고객사 소개',
                link: '/company/customer/customerInfo',
            },
            {
                title: '오시는 길',
                link: '/company/map/timfMap',
            },
        ],
    },
    {
        id: '2',
        title: '사업소개',
        sub: [
            {
                title: '새벽배송',
                link: '/business/ts/TS',
            },
            {
                title: '화물 주선',
                link: '/business/lf/LF',
            },
            {
                title: '풀필먼트',
                link: '/business/fu/FU',
            },
            {
                title: '그로서리',
                link: '/business/gr/GR',
            },
        ],
    },

    {
        id: '3',
        title: '공지사항',
        sub: [
            {
                title: '공지사항',
                link: '/notice/notice/noticeList',
            },
            {
                title: '인재채용',
                link: '/notice/employment/employmentList',
            },
            {
                title: '서비스 소개',
                link: '/notice/serviceinfo/serviceInfo',
            },
        ],
    },
    { id: '4', title: '보도자료', link: '/pressrelease/pressReleaseList' },
    { id: '5', title: '배송지역검색', link: '/delivery/earlyDeliverySearch' },
];
