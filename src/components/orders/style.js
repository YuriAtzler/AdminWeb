import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 50px;
  border-bottom: 1.5px solid gray;
  margin-top: 5px;
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
    width: 25%;
    height: 50%;
  }
`;

const BntFinish = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 60%;
  margin: auto;
  background-color: transparent;
  border: 2px solid red;
  border-radius: 10px;
  opacity: 50%;

  p {
    color: red;
    font-size: 15px;
  }

  :hover {
    opacity: 80%;
    background-color: red;
    cursor: pointer;

    p {
      color: white;
    }
  }
`;

const BntChat = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 60%;
  margin: auto;
  background-color: transparent;
  text-decoration: none;
  border-radius: 10px;
  border: 2px solid blue;
  opacity: 50%;

  p {
    color: blue;
    font-size: 15px;
    text-decoration: none;
  }

  :hover {
    opacity: 80%;
    background-color: blue;
    cursor: pointer;

    p {
      color: white;
    }
  }
`;

const TextItems = styled.p`
  font-size: 15px;
  color: ${(props) => (props.blue ? "blue" : "black")};
`;

export {
  Container,
  ContainerItems,
  ContainerButtons,
  TextItems,
  BntFinish,
  BntChat,
};
