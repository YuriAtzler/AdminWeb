import styled from "styled-components";

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
`;

export const ContainerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;
`;

export const ContainerClient = styled(ContainerItem)`
  width: 20%;
`;

export const ContainerDrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
  height: 100%;

  :hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 50%;
  height: 50%;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 18px;
`;

export const BtnRemove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  background-color: #c1554d;

  :hover {
    cursor: pointer;
    opacity: 80%;
  }
`;
