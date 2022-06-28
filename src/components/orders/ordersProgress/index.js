import React, { useState } from "react";

import { Container, ContainerItem, Text, BtnFinish, BtnChat } from "./style";

import ListingProductsOrder from "../../ListingProductsOrder";
import FinishOrder from "../../../services/finishOrder";

function OrdersProgress(data) {
  const [status, setStatus] = useState(false);

  return (
    <>
      <Container onClick={() => setStatus(!status)}>
        <ContainerItem>
          <Text>{data.data.client}</Text>
        </ContainerItem>
        <ContainerItem>
          <Text>R$ {data.data.price.toFixed(2)}</Text>
        </ContainerItem>
        <ContainerItem>
          <Text>{data.data.created_at}</Text>
        </ContainerItem>
        <ContainerItem>
          <BtnChat to={"/order/chat"} state={{ data: data.data }}>
            <p>Chat</p>
          </BtnChat>
          <BtnFinish onClick={() => FinishOrder(data.data._id)}>
            <p>Finalizar</p>
          </BtnFinish>
        </ContainerItem>
      </Container>
      {status === true
        ? data.data.items.map((item) => {
            return <ListingProductsOrder data={item} />;
          })
        : null}
    </>
  );
}

export default OrdersProgress;
