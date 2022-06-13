import { Container, ContainerScreens } from "./style";

import MenuBar from "../../components/menuBar";

function MainPage() {
  return (
    <Container>
      <MenuBar />
      <ContainerScreens />
    </Container>
  );
}

export default MainPage;
