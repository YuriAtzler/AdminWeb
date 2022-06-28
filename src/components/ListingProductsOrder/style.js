import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 50px;
  background-color: #666;
  border-bottom: 1px solid #fff;
`;

export const ContainerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #fff;
`;
