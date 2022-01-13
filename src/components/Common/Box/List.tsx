import React from "react";
import styled, { useTheme } from "styled-components";
import Title from "@components/Common/Contents/Title";
import Clock from "@components/Image/Clock";
import Plus from "@components/Image/Plus";
import { INoticeData } from "@tempData/notice";

interface IList {
  titleText: string;
  data: INoticeData[];
}

const List = ({ titleText, data }: IList) => {
  const theme = useTheme();

  return (
    <Container>
      <Title
        text={titleText}
        fontSize="small"
        bold={false}
        isUnderline={true}
        icon={<Plus width="20" height="20" fill={theme.default.text.gray} />}
      />
      <ListContainer>
        {data.map(({ title, createDt }, index) => {
          return (
            <ListItem key={index}>
              <DataTitle>{title}</DataTitle>
              <DataDate>
                <Clock width="17" height="17" fill={theme.default.text.gray} />
                <span>{createDt}</span>
              </DataDate>
            </ListItem>
          );
        })}
      </ListContainer>
    </Container>
  );
};

const Container = styled.article`
  border: 1px solid ${(props) => props.theme.default.divider};
  background-color: ${(props) => props.theme.default.detail};

  box-sizing: border-box;
  padding: 2.3em;
  margin-top: 1em;

  width: 100%;
  height: auto;
  min-height: 300px;
`;

const ListContainer = styled.div`
  width: 100%;
`;

const ListItem = styled.div`
  display: flex;

  cursor: pointer;

  padding: 1em 0.1em;

  width: 100%;

  &:hover {
    & > span:nth-of-type(1) {
      text-decoration: underline;
    }
  }
`;

const DataTitle = styled.span`
  display: flex;
  flex-basis: 70%;
`;

const DataDate = styled.span`
  display: flex;
  flex-basis: 30%;
  justify-content: flex-end;
  align-items: center;

  & > span {
    margin-left: 0.5em;
  }
`;

export default List;
