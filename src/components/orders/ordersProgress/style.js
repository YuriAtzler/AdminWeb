import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  min-height: 50px;
  border-radius: 20px;
  background-color: #444;
  margin-top: 10px;

  :hover {
    cursor: pointer;
  }
`;

export const ContainerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 18px;
`;

export const BtnFinish = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 40px;
  border-radius: 10px;
  background-color: #c1554d;
  margin: auto;

  p {
    color: #fff;
    font-size: 15px;
    text-decoration: none;
  }

  :hover {
    cursor: pointer;
    opacity: 80%;
  }
`;

export const BtnChat = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 40px;
  text-decoration: none;
  border-radius: 10px;
  background-color: #28616a;
  margin: auto;

  p {
    color: #fff;
    font-size: 15px;
    text-decoration: none;
  }

  :hover {
    opacity: 80%;
    cursor: pointer;
  }
`;

export const ContainerProducts = styled.div`
  width: 80%;
  height: 50px;
  background-color: #666;
`;
