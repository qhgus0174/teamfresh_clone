import React, { useState } from "react";
import DaumPostcode, { Address } from "react-daum-postcode";
import styled, { useTheme } from "styled-components";
import SearchResult from "@routes/delivery/SearchResult";
import Title from "@components/Common/Contents/Title";
import Button from "@components/Common/Button/Button";
import ModalPortal from "@components/Modal/Portal";
import Warning from "@components/Image/Warning";
import Check from "@components/Image/Check";
import Back from "@components/Image/Back";
import { IResponse } from "@type/Response";
import { widthMedia } from "@styles/device";
import { getErrorMsg } from "utils/response";

interface IIsEarlyDelivery {
  delyverResult: string;
  delyverYn: string;
}

const EarlyDeliverySearch = () => {
  const theme = useTheme();

  const [isSearchComplete, setIsSearchComplete] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [zipCode, setZipCode] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const [isDelyver, setIseDelyver] = useState<boolean>(false);

  const [detailAddress, setDetailAddress] = useState<string>("");

  const onCompletePost = ({ zonecode, address }: Address) => {
    setZipCode(zonecode);
    setAddress(address);

    setIsSearchComplete(true);
  };

  const getSearchIsEarlyDelivery = async (): Promise<Response> => {
    const response = await fetch("/api/delivery/searchDeliveryAreaForTest", {
      method: "post",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        addrBasic: `${address} ${detailAddress}`,
      }),
    });

    return response;
  };

  const onClickSearchIsEarlyDelivery = async () => {
    try {
      const response = await getSearchIsEarlyDelivery(),
        { ok, status } = response;

      if (!ok)
        throw new Error(
          JSON.stringify(
            getErrorMsg({ type: "response", code: String(status) })
          )
        );

      const {
        resultCode,
        result: { delyverYn },
      }: IResponse<IIsEarlyDelivery> = await response.json();

      if (resultCode !== "0000")
        throw new Error(
          JSON.stringify(
            getErrorMsg({ type: "resultCode", code: String(status) })
          )
        );

      setIseDelyver(delyverYn === "1");
      setIsModalOpen(true);
    } catch (e: unknown) {
      const { message } = e as Error;

      alert("???????????? ???????????? ??? ????????? ?????????????????????.");
      //?????? ?????? ?????? ?????? ??????.
    }
  };

  const getCanDelyverModal = () => {
    return (
      <SearchResult
        icon={<Check width="70" height="70" fill={theme.default.success} />}
        titleText="?????????????????? ???????????????."
        explain="????????? 7??? ????????? ???????????????."
        warnComment="(?????????/??????/??????/??????/??????/?????????????????? ????????????)"
      />
    );
  };

  const getCannotDelyverModal = () => {
    return (
      <SearchResult
        icon={<Warning width="70" height="70" fill={theme.default.error} />}
        titleText="?????????????????? ???????????????."
        explain="????????????(??? ??????)??? ?????????????????? ????????? ????????? ?????? ????????? ?????????."
      />
    );
  };

  return (
    <Container>
      <SearchAddress>
        <Title text="?????? ?????? ?????? ??????" isUnderline={true}></Title>
        {isSearchComplete ? (
          <SearchCanDelivery>
            <SearchContainer>
              <SearchBack onClick={() => setIsSearchComplete(false)}>
                <Back width="30" height="30" />
                <span>?????? ?????? ??????</span>
              </SearchBack>
              <Body>
                <AddressInfo>
                  <AddressInput>
                    <input type="text" value={zipCode} readOnly />
                    <input type="text" value={address} readOnly />
                    <input
                      type="text"
                      value={detailAddress}
                      onChange={(e) => setDetailAddress(e.target.value)}
                    />
                  </AddressInput>
                  <Button
                    radius="round"
                    color="secondary"
                    onClick={() => onClickSearchIsEarlyDelivery()}
                  >
                    ?????? ??????
                  </Button>
                </AddressInfo>
                <Explain>
                  <span className="warning">
                    ???????????? ?????? ??? ?????? ?????? ?????? ??????
                  </span>
                  <span className="example">
                    ?????????/??????/??????/??????/??????/??????????????????
                  </span>
                  <hr />
                  <span>?????????????????????????????????</span>
                  <span>???????????????</span>
                </Explain>
              </Body>
            </SearchContainer>
          </SearchCanDelivery>
        ) : (
          <SearchPostCode>
            <DaumPostcode onComplete={onCompletePost} height={90} />
          </SearchPostCode>
        )}
      </SearchAddress>
      <ModalPortal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        content={isDelyver ? getCanDelyverModal() : getCannotDelyverModal()}
        options={{
          closeModal: () => setIsModalOpen(false),
          width: "260",
          height: isDelyver ? "435" : "400",
          header: isDelyver ? "??????????????????" : "??????????????????",
        }}
      />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  width: 100%;

  padding: 4em;

  ${widthMedia.tablet} {
    padding: 2em 1.5em;
  }
`;

const SearchAddress = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;

  ${widthMedia.tablet} {
    width: 100%;
  }
`;

const SearchPostCode = styled.div`
  box-sizing: border-box;
  margin-top: 2em;
`;

const SearchCanDelivery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  width: 100%;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  margin-top: 2em;

  width: 75%;
`;

const SearchBack = styled.div`
    display: flex;
    flex-direc
    align-items: center;

    font-weight: 500;
    font-size: 1.2rem;
    cursor: pointer;

    margin-bottom: 1em;

    span {
        padding-left: 0.5em;
    }

`;

const Body = styled.div`
  display: flex;
  flex-direction: column;

  &:before {
    content: "";
    display: block;
    border-top: 2.5px solid ${(props) => props.theme.default.main};
    width: 100%;
  }
`;

const AddressInput = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  margin-bottom: 1em;

  width: 100%;

  input[type="text"] {
    padding: 0.5em;
  }
`;

const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  box-sizing: border-box;
  padding-top: 1em;
  margin-bottom: 1em;

  width: 100%;

  button {
    width: 80%;
  }
`;

const Explain = styled.div`
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding: 2em;

  background-color: ${(props) => props.theme.default.detail};

  width: 100%;
  min-height: 300px;

  .warning {
    font-weight: 600;
    color: ${(props) => props.theme.default.text.warning};
  }

  .example {
    color: ${(props) => props.theme.default.text.gray};

    &:after {
      content: "";
      display: block;
      border-bottom: 2px solid ${(props) => props.theme.default.main};
      box-sizing: border-box;
      padding: 0.8em 0;
      margin: 1.6em 0;
      width: 100%;
    }
  }
`;

export default EarlyDeliverySearch;
