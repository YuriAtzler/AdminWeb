import {
  Container,
  ContainerButtons,
  ContainerItems,
  TextItems,
  BntFinish,
  BntChat,
} from "./style";

import { Link } from "react-router-dom";

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
        {/* <button>
          <Link to={"/order/chat"} state={{ data: data.data }}>
            Chat
          </Link>
        </button> */}
        <BntChat to={"/order/chat"} state={{ data: data.data }}>
          <p>Chat</p>
        </BntChat>
        <BntFinish onClick={() => alert("you gay")}>
          <p>Finalizar</p>
        </BntFinish>
      </ContainerButtons>
    </Container>
  );
}

export default Orders;
