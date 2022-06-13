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

import Orders from "../../components/orders";
import MenuBar from "../../components/menuBar";

function ListHistoricOrderPage() {
  const { data, isFetching } = useGetApi("/orders/getoff");

  return (
    <Container>
      <MenuBar />
      <ContainerScreens>
        <ContainerHeader>
          <HeaderOptions>
            <h1>Histórico de Pedidos</h1>
          </HeaderOptions>
          <HeaderInfos>
            <p>Cliente</p>
            <p>Valor</p>
            <p>Status</p>
            <p>Data</p>
            <p>Opções</p>
          </HeaderInfos>
        </ContainerHeader>
        <ContainerList>
          {isFetching && <p>carregando...</p>}
          {data?.map((item) => {
            return <Orders data={item} />;
          })}
        </ContainerList>
        <ContainerFooter></ContainerFooter>
      </ContainerScreens>
    </Container>
  );
}

export default ListHistoricOrderPage;
