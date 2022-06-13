import {
  Container,
  ContainerScreens,
  ContainerHeader,
  ContainerList,
  HeaderOptions,
  HeaderInfos,
  ContainerFooter,
} from "./style";
import { useGetApi } from "../../hooks/useGetApi";

import MenuBar from "../../components/menuBar";
import Users from "../../components/users";

function ListUsersPage() {
  const { data, isFetching } = useGetApi("/users/get");
  return (
    <Container>
      <MenuBar />
      <ContainerScreens>
        <ContainerHeader>
          <HeaderOptions>
            <h1>Usuários</h1>
          </HeaderOptions>
          <HeaderInfos>
            <p>Nome</p>
            <p>Username</p>
            <p>Email</p>
            <p>Admin</p>
            <p>Opções</p>
          </HeaderInfos>
        </ContainerHeader>
        <ContainerList>
          {isFetching && <p>carregando...</p>}
          {data?.map((item) => {
            return <Users data={item} />;
          })}
        </ContainerList>
        <ContainerFooter></ContainerFooter>
      </ContainerScreens>
    </Container>
  );
}

export default ListUsersPage;
