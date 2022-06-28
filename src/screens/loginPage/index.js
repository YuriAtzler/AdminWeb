import React, { useState } from "react";
import { Container, ContainerInputs, InputText, BtnSubmit } from "./style";

import { useAuth } from "../../hooks/useAuth";

import background from "../../assets/images/backgroundMenu.jpg";
import logo from "../../assets/images/logo.jpg";
import { Logo } from "../../components/menuBar/style";
const styleImage = {
  backgroundImage: `url(${background})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const styleLogo = {
  backgroundImage: `url(${logo})`,
  backgroundPosition: "center",
  backgroundSize: "70px 70px",
  backgroundRepeat: "no-repeat",
};

function LoginPage() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <ContainerInputs>
        <Logo style={styleLogo} />
        <InputText
          placeholder="email..."
          value={email}
          onChange={(value) => setEmail(value.target.value)}
        />
        <InputText
          placeholder="senha..."
          value={password}
          onChange={(value) => setPassword(value.target.value)}
        />
        <BtnSubmit
          onClick={() => {
            if (!password || !email) {
              alert("Algum campo está vázio!");
            } else {
              signIn(email, password);
            }
          }}
        >
          <p>login</p>
        </BtnSubmit>
      </ContainerInputs>
    </Container>
  );
}

export default LoginPage;

// export const theme = {
//   colors: {
//     backgroundApp: "#FFF4E5",
//     backgroundDark: "#333333",
//     title: "#43312A",
//     text: "#755716",
//     price: "#C1554D",
//     textCategory: "#4F4537",
//     textCategorySelected: "#D2AB67",
//     buttonHeaderBackground: "#D2AB67",
//     buttonHeaderStroke: "#A68D65",
//     backgroundItems: "rgba(181,170,153,0.6)",
//     backgroundItemsOn: "rgba(67,135,147,0.6)",
//     backgroundItemsOff: "rgba(254,138,126,0.6)",
//     buttonAddItemBackground: "#007663",
//     buttonAddItemStroke: "#2F8D7E",
//     buttonRemoveItemBackground: "#A64942",
//     buttonRemoveItemStroke: "#FE8A7E",
//     buttonStatusBackground: "#2F4858",
//     buttonStatusStroke: "#28616A",
//   },
// };
