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

const StatusProduct = styled.p`
  text-align: center;
  margin: auto;
  width: 30%;
  height: 50%;
  color: ${(props) => (props.red ? "#f00000" : "#0AB728")};
`;

const TextItems = styled.p`
  font-size: 15px;
  color: ${(props) => (props.color ? props.color : "black")};
`;

const BtnChangeStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 50%;
  border: none;
  background-color: transparent;
  border: 2px solid #444;
  border-radius: 10px;

  p {
    color: #444;
    font-size: 14px;
  }

  :hover {
    cursor: pointer;
    background-color: #444;

    p {
      color: #fbf8ff;
    }
  }
`;

export {
  Container,
  ContainerItems,
  ContainerButtons,
  TextItems,
  StatusProduct,
  BtnChangeStatus,
};
