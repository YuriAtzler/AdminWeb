import { Link } from "react-router-dom";
import styled from "styled-components";

const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  height: 100vh;
  background-color: #222222;
  z-index: 99;
`;

const HeaderMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25%;
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: transparent;
  border: 3px solid #d2ab67;
`;

const ContainerProdutos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  align-items: center;
`;

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 30px;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid white;
  margin-bottom: 5px;

  h6 {
    color: white;
    font-size: 20px;
    margin-left: 10px;
  }

  img {
    margin-left: 10px;
    width: 20px;
    height: 20px;
  }
`;

const Logout = styled.p`
  width: 80%;
  height: 30px;
  color: white;
  font-size: 20px;

  :hover {
    cursor: pointer;
    color: #d2ab67;
  }
`;

const LinkStyle = styled(Link)`
  color: white;
  margin: 0;
  padding: 0;
  width: 80%;
  margin: 5px;
  font-size: 13px;
  text-decoration: none;

  :hover {
    color: #d2ab67;
  }
`;

export {
  DivMain,
  HeaderMenu,
  Logo,
  ContainerProdutos,
  HeaderTitle,
  Logout,
  LinkStyle,
};
