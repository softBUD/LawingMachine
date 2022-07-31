import Header from "./components/Header/Header";
import { useEffect } from "react";
import i18n from "./i18n";
import DashBoard from "./components/DashBoard/DashBoard";
import Menubar from "./components/Menubar/Menubar";
import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div``;

const App = () => {
  useEffect(() => {
    const appStarted = async () => {
      await i18n.changeLanguage();
    };
    appStarted();
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <Wrap>
        <Container>
          <Header />
          <Menubar />
          <DashBoard />
        </Container>
      </Wrap>
    </>
  );
};

export default App;
