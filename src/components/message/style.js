import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 35px;
  max-height: 35px;
  margin-top: 25px;
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 20px;
  align-items: center;
  justify-content: space-between;

  p:first-child {
    color: blue;
  }

  p:last-child {
    font-size: 13px;
  }
`;

const ContainerMessage = styled.div`
  display: flex;
  width: 100%;
  font-size: 15px;
`;

export { Container, ContainerInfo, ContainerMessage };
