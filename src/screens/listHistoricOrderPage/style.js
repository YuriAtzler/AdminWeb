import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fbf8ff;
`;

const ContainerScreens = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100vh;
`;

const ContainerHeader = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 20%;
  background-color: #333;
  box-shadow: 0px 0px 10px #444;
`;

const HeaderOptions = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fbf8ff;
  }
`;

const HeaderInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 30%;

  p {
    display: flex;
    width: 25%;
    height: 70%;
    justify-content: center;
    align-items: center;
    border-left: 1px solid black;
    color: #fbf8ff;
    border-color: #fbf8ff;
  }

  p:last-child {
    border-right: 1px solid #fbf8ff;
  }
`;

const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow: scroll;
  margin-top: 10px;
`;

export {
  Container,
  ContainerScreens,
  ContainerHeader,
  ContainerList,
  HeaderOptions,
  HeaderInfos,
};
