import { Container, ContainerInfo, ContainerMessage } from "./style";

function Message({ date, username, message }) {
  return (
    <Container>
      <ContainerInfo>
        <p>{username}</p>
        <p>{date}</p>
      </ContainerInfo>
      <ContainerMessage>{message}</ContainerMessage>
    </Container>
  );
}

export default Message;
