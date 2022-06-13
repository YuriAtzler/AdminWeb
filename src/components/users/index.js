import {
  Container,
  ContainerButtons,
  ContainerItems,
  TextItems,
  BtnTurnAdmin,
} from "./style";

function Users(data) {
  return (
    <Container>
      <ContainerItems>
        <TextItems>{data.data.name}</TextItems>
      </ContainerItems>
      <ContainerItems>
        <TextItems>{data.data.username}</TextItems>
      </ContainerItems>
      <ContainerItems>
        <TextItems>{data.data.email}</TextItems>
      </ContainerItems>
      <ContainerItems>
        {data.data.admin === true ? (
          <TextItems color="#0AB728">{data.data.admin.toString()}</TextItems>
        ) : (
          <TextItems color="#f00000">{data.data.admin.toString()}</TextItems>
        )}
      </ContainerItems>
      <ContainerButtons>
        <BtnTurnAdmin>
          <p>Remover</p>
        </BtnTurnAdmin>
      </ContainerButtons>
    </Container>
  );
}

export default Users;
