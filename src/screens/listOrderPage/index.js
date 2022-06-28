import {
  Container,
  ContainerScreens,
  ContainerHeader,
  ContainerList,
  HeaderOptions,
  HeaderInfos,
} from "./style";
import { useGetApi } from "../../hooks/useGetApi";

import OrdersProgress from "../../components/orders/ordersProgress";
import Orders from "../../components/orders";
import MenuBar from "../../components/menuBar";

function ListOrderPage() {
  const { data, isFetching } = useGetApi("/orders/get");

  return (
    <Container>
      <MenuBar />
      <ContainerScreens>
        <ContainerHeader>
          <HeaderOptions>
            <h1>Pedidos</h1>
          </HeaderOptions>
          <HeaderInfos>
            <p>Cliente</p>
            <p>Valor</p>
            <p>Data</p>
            <p>Opções</p>
          </HeaderInfos>
        </ContainerHeader>
        <ContainerList>
          {isFetching && <p>carregando...</p>}
          {data?.map((item) => {
            return <OrdersProgress data={item} />;
          })}
        </ContainerList>
      </ContainerScreens>
    </Container>
  );
}

export default ListOrderPage;
