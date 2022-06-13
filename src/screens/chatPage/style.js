import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f2ecff;
`;

const ContainerScreens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
  width: 80%;
  height: 100vh;
`;

const ContainerChat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
  height: 80%;
  background-color: white;
  border: 1px solid #333;
  overflow: scroll;
`;

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  height: 40px;
  background-color: white;
`;

const InputText = styled.input`
  width: 80%;
  height: 94%;
  background-color: white;
  border: 1px solid #333;
`;

const BtnSend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18%;
  height: 100%;
  background-color: green;
  border: 1px solid green;

  :hover {
    opacity: 80%;
    cursor: pointer;
  }

  p {
    color: white;
  }
`;

export {
  Container,
  ContainerScreens,
  ContainerChat,
  InputText,
  ContainerInputs,
  BtnSend,
};
