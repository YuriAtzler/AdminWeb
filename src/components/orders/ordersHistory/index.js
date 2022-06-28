import React, { useState } from "react";

import {
  Container,
  ContainerItem,
  Text,
  BtnRemove,
  ContainerClient,
  ContainerDrop,
  Image,
} from "./style";

import ListingProductsOrder from "../../ListingProductsOrder";
import DeleteOrder from "../../../services/deleteOrder";
import arrowDrop from "../../../assets/icons/arrowDrop.png";

function OrdersHistory(data) {
  const [status, setStatus] = useState(false);

  return (
    <>
      <Container>
        <ContainerDrop onClick={() => setStatus(!status)}>
          <Image src={arrowDrop} />
        </ContainerDrop>
        <ContainerClient>
          <Text>{data.data.client}</Text>
        </ContainerClient>
        <ContainerItem>
          <Text>R$ {data.data.price.toFixed(2)}</Text>
        </ContainerItem>
        <ContainerItem>
          <Text>{data.data.created_at}</Text>
        </ContainerItem>
        <ContainerItem>
          <BtnRemove onClick={() => DeleteOrder(data.data._id)}>
            <Text>Excluir</Text>
          </BtnRemove>
        </ContainerItem>
      </Container>
      {status === true ? (
        data.data.items.map((item) => {
          return <ListingProductsOrder data={item} />;
        })
      ) : (
        <></>
      )}
    </>
  );
}

export default OrdersHistory;
