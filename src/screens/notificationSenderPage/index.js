import React, { useState } from "react";
import {
  Container,
  ContainerScreens,
  ContainerHeader,
  ContainerList,
  HeaderOptions,
  HeaderInfos,
  ContainerFooter,
  InputText,
  BtnSend,
} from "./style";
import axios from "axios";
import MenuBar from "../../components/menuBar";

const BASE_URL = "https://recantocafeapp.herokuapp.com";

function NotificationSenderPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const sendNotification = (url) => {
    const send = {
      title,
      body,
    };

    axios.post(BASE_URL + url, send).then((response) => {
      alert(response.data.message);
    });
  };

  return (
    <Container>
      <MenuBar />
      <ContainerScreens>
        <ContainerHeader>
          <HeaderOptions>
            <h1>Mandar Notificação</h1>
          </HeaderOptions>
          <HeaderInfos></HeaderInfos>
        </ContainerHeader>
        <ContainerList>
          <InputText
            type={"text"}
            placeholder="titulo"
            value={title}
            onChange={(value) => setTitle(value.target.value)}
          />
          <InputText
            type={"text"}
            placeholder="corpo"
            value={body}
            onChange={(value) => setBody(value.target.value)}
          />
          <BtnSend
            onClick={() => {
              sendNotification("/users/sendnotification");
              setBody("");
              setTitle("");
            }}
          >
            <p>send</p>
          </BtnSend>
        </ContainerList>
        <ContainerFooter></ContainerFooter>
      </ContainerScreens>
    </Container>
  );
}

export default NotificationSenderPage;
