import { useTranslation } from "react-i18next";
import styled from "styled-components";
import i18next from "../i18n";

const LanguageButtonStyles = styled.div`
  float: left;
  transform: translateX(calc(20% + 40px));
  margin-top: -3vh;
  & button {
    margin: 0 30px;
  }
`;

const StyleLine = styled.span`
  width: 0.5px;
  height: 10px;
  background-color: #000;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Translation = () => {
  const clickHandler = (lang: string) => {
    i18next.changeLanguage(lang);
  };
  return (
    <LanguageButtonStyles>
      <button style={{}} onClick={() => clickHandler("ko")}>
        KO
      </button>
      <StyleLine />
      <button onClick={() => clickHandler("en")}>EN</button>
    </LanguageButtonStyles>
  );
};

export default Translation;
