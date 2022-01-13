import React from "react";
import styled, { useTheme } from "styled-components";

interface ISearchResult {
  titleText: string;
  explain: string;
  icon: JSX.Element;
  warnComment?: string;
}

const SearchResult = ({
  titleText,
  explain,
  icon,
  warnComment,
}: ISearchResult) => {
  const theme = useTheme();

  return (
    <Container>
      <div>{icon}</div>
      <Title>{titleText}</Title>
      <Explain>{explain}</Explain>
      {warnComment && <WarnComment>{warnComment}</WarnComment>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
  padding-top: 1.2em;
  overflow-y: auto;

  width: 100%;
  height: 100%;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;

  box-sizing: border-box;
  margin: 0.7em 0;
`;

const Explain = styled.span`
  text-align: center;

  padding: 0 1em;
`;

const WarnComment = styled.span`
  color: ${(props) => props.theme.default.text.warning};
  text-align: center;

  box-sizing: border-box;
  margin: 2em 0;
`;

export default SearchResult;
