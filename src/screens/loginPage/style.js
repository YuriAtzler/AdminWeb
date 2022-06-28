import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 20%;
  height: 50%;
  border-radius: 10px;
`;

const InputText = styled.input`
  width: 80%;
  height: 20px;
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: transparent;
  border: 3px solid #d2ab67;
`;

const BtnSubmit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 30px;
  background-color: #d2ab67;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    opacity: 80%;
  }

  p {
    color: white;
    font-size: 20px;
  }
`;

export { Container, ContainerInputs, InputText, Logo, BtnSubmit };
