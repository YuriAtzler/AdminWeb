import { Container, ContainerItem, Text } from "./style";

function ListingProductsOrder(data) {
  return (
    <Container>
      <ContainerItem>
        <Text>{data.data.name}</Text>
      </ContainerItem>
      <ContainerItem>
        <Text>R$ {data.data.price}</Text>
      </ContainerItem>
      <ContainerItem>
        <Text>Quant. {data.data.amount}</Text>
      </ContainerItem>
      <ContainerItem>
        <Text>{data.data.timeToPrepare}</Text>
      </ContainerItem>
    </Container>
  );
}

export default ListingProductsOrder;
