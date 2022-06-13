import React, { useState } from "react";
import {
  Container,
  ContainerButtons,
  ContainerItems,
  TextItems,
  StatusProduct,
  BtnChangeStatus,
} from "./style";
import axios from "axios";
const BASE_URL = "https://recantocafeapp.herokuapp.com";

function Products(data) {
  const [status, setStatus] = useState(data.data.status);

  const changeStatus = (url) => {
    axios.patch(BASE_URL + url).then((response) => {
      setStatus(!status);
      alert(response.data.message);
    });
  };

  return (
    <Container>
      <ContainerItems>
        <TextItems>{data.data.name}</TextItems>
      </ContainerItems>
      <ContainerItems>
        <TextItems color="#f00000">{data.data.price}</TextItems>
      </ContainerItems>
      <ContainerItems>
        <TextItems>{data.data.category}</TextItems>
      </ContainerItems>
      <ContainerItems>
        <TextItems>{data.data.timeToPrepare}</TextItems>
      </ContainerItems>
      <ContainerButtons>
        {status === true ? (
          <StatusProduct>{status.toString()}</StatusProduct>
        ) : (
          <StatusProduct red={"#f00000"}>{status.toString()}</StatusProduct>
        )}
        <BtnChangeStatus
          onClick={() => changeStatus("/products/status/" + data.data._id)}
        >
          <p>Status</p>
        </BtnChangeStatus>
      </ContainerButtons>
    </Container>
  );
}

export default Products;
