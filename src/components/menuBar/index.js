import {
  DivMain,
  HeaderMenu,
  Logo,
  ContainerProdutos,
  HeaderTitle,
  Logout,
  LinkStyle,
} from "./style";

import background from "../../assets/images/backgroundMenu.jpg";
import logo from "../../assets/images/logo.jpg";
import coffee from "../../assets/icons/coffee.svg";
import user from "../../assets/icons/user.svg";
import order from "../../assets/icons/order.svg";
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

function MenuBar() {
  return (
    <DivMain>
      <HeaderMenu style={styleImage}>
        <Logo style={styleLogo} />
      </HeaderMenu>
      <ContainerProdutos>
        <HeaderTitle>
          <img src={coffee} />
          <h6>Produtos</h6>
        </HeaderTitle>
        <LinkStyle to={"/list/products"}>Listar Produtos</LinkStyle>
        <LinkStyle to={"/"}>Criar Produtos</LinkStyle>
        <LinkStyle to={"/"}>Remover Produtos</LinkStyle>
      </ContainerProdutos>
      <ContainerProdutos>
        <HeaderTitle>
          <img src={user} />
          <h6>Usuários</h6>
        </HeaderTitle>
        <LinkStyle to={"/list/users"}>Listar Usuários</LinkStyle>
        <LinkStyle to={"/remove/users"}>Remover Usuários</LinkStyle>
      </ContainerProdutos>
      <ContainerProdutos>
        <HeaderTitle>
          <img src={order} />
          <h6>Pedidos</h6>
        </HeaderTitle>
        <LinkStyle to={"/list/orders"}>Listar Pedidos</LinkStyle>
        <LinkStyle to={"/list/orders/historic"}>
          Listar Histórico de Pedidos
        </LinkStyle>
      </ContainerProdutos>
      <ContainerProdutos>
        <HeaderTitle>
          <img src={order} />
          <h6>Notificação</h6>
        </HeaderTitle>
        <LinkStyle to={"/notification/send"}>Mandar Notificações</LinkStyle>
      </ContainerProdutos>
      <Logout>Logout</Logout>
    </DivMain>
  );
}

export default MenuBar;
