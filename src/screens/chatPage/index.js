import React, { useState, useEffect } from "react";
import {
  Container,
  ContainerScreens,
  ContainerChat,
  InputText,
  ContainerInputs,
  BtnSend,
} from "./style";
import io from "socket.io-client";

import MenuBar from "../../components/menuBar";

import Message from "../../components/message";
import { Link, useLocation } from "react-router-dom";

const ENDPOINT = "https://recantocafeapp.herokuapp.com";
const socket = io(ENDPOINT);

function ChatPage() {
  const location = useLocation();
  const { data } = location.state;
  const [messageText, setMessageText] = useState("");
  const [chat, setChat] = useState([]);
  // [chatOn, setChatOn] = useState(false);

  useEffect(() => {
    //if (!chatOn) {
    socket.emit(
      "select_room",
      {
        username: "Admin",
        room: data._id,
      },
      (messages) => {
        //console.log("data " + messages);
        setChat(messages);
        //setChatOn(true);
      }
    );
    //}
  });

  // useEffect(() => {
  //   if (chatOn) {
  //     socket.on("message", ({ data }) => {
  //       console.log(data);
  //       //setChat(data);
  //     });
  //   }
  // }, [chatOn]);

  function sendMessage() {
    socket.emit("message", {
      username: "admin",
      room: data._id,
      text: messageText,
    });
  }

  return (
    <Container>
      <MenuBar />
      <ContainerScreens>
        <ContainerChat>
          {chat?.map((item) => {
            return (
              <Message
                date={item.createdAt}
                username={item.username}
                message={item.text}
              />
            );
          })}
        </ContainerChat>
        <ContainerInputs>
          <InputText
            type="text"
            value={messageText}
            onChange={(value) => {
              setMessageText(value.target.value);
            }}
          />
          <BtnSend
            onClick={() => {
              sendMessage();
              setMessageText("");
            }}
          >
            <p>Send</p>
          </BtnSend>
        </ContainerInputs>
      </ContainerScreens>
    </Container>
  );
}

export default ChatPage;
