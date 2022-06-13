import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 50px;
  border-bottom: 1.5px solid gray;
`;

const ContainerItems = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: center;
`;

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  align-items: center;
  justify-content: center;

  button {
    margin: auto;
    width: 30%;
    height: 50%;
  }
`;

const TextItems = styled.p`
  font-size: 15px;
  color: ${(props) => (props.color ? props.color : "black")};
`;

const BtnTurnAdmin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 60%;
  border: none;
  background-color: transparent;
  border: 2px solid #f00000;
  border-radius: 10px;

  p {
    color: #f00000;
    font-size: 15px;
  }

  :hover {
    cursor: pointer;
    background-color: #f00000;

    p {
      color: #fbf8ff;
    }
  }
`;

export { Container, ContainerItems, ContainerButtons, TextItems, BtnTurnAdmin };
