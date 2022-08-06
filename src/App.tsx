import Header from "./components/Header/Header";
import { useEffect } from "react";
import i18n from "./i18n";
// import DashBoard from "./components/DashBoard/DashBoard";
// import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";
import MainRoute from "./routes";
import Translation from "./i18n/Translation";

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
      <Header />
      <MainRoute />
      <Translation />
      {/* {i18n.language === "ko" ? "ko" : "en"} ( return (<div>sdsd</div> ) ) */}
    </>
  );
};

export default App;
