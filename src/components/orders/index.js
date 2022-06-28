import {
  Container,
  ContainerButtons,
  ContainerItems,
  TextItems,
  BntFinish,
  BntChat,
} from "./style";

import FinishOrder from "../../services/finishOrder";

function Orders(data) {
  return (
    <Container>
      <ContainerItems>
        <TextItems>{data.data.client}</TextItems>
      </ContainerItems>
      <ContainerItems>
        <TextItems>R$ {data.data.price.toFixed(2)}</TextItems>
      </ContainerItems>
      <ContainerItems>
        <TextItems blue>{data.data.status.toString()}</TextItems>
      </ContainerItems>
      <ContainerItems>
        <TextItems>{data.data.created_at}</TextItems>
      </ContainerItems>
      <ContainerButtons>
        <BntChat to={"/order/chat"} state={{ data: data.data }}>
          <p>Chat</p>
        </BntChat>
        <BntFinish onClick={() => FinishOrder(data.data._id)}>
          <p>Finalizar</p>
        </BntFinish>
      </ContainerButtons>
    </Container>
  );
}

export default Orders;
