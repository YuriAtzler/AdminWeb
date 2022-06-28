import {
  Container,
  ContainerScreens,
  ContainerHeader,
  ContainerList,
  HeaderOptions,
  HeaderInfos,
} from "./style";
import { useGetApi } from "../../hooks/useGetApi";

import MenuBar from "../../components/menuBar";
import Products from "../../components/products";

function ListProductsPage() {
  const { data, isFetching } = useGetApi("/products/get");
  return (
    <Container>
      <MenuBar />
      <ContainerScreens>
        <ContainerHeader>
          <HeaderOptions>
            <h1>Produtos</h1>
          </HeaderOptions>
          <HeaderInfos>
            <p>Nome</p>
            <p>Valor</p>
            <p>Categoria</p>
            <p>Tempo</p>
            <p>Opções</p>
          </HeaderInfos>
        </ContainerHeader>
        <ContainerList>
          {isFetching && <p>carregando...</p>}
          {data?.map((item) => {
            return <Products data={item} />;
          })}
        </ContainerList>
      </ContainerScreens>
    </Container>
  );
}

export default ListProductsPage;
