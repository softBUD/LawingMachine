import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Button = styled.button`
  padding: 15px 0;
  border-radius: 20px;
  background: #00b0ff;
  color: #fff;
  flex: 0.3;
`;

interface Inherit {
  name: string;
}

class Question implements Inherit {
  constructor(private _name: string) {}

  get name() {
    return this._name;
  }
}

const QuestionButton = () => {
  const { t } = useTranslation();
  const TitleName1 = new Question(t("ISolving"));

  return <Button>{TitleName1.name}</Button>;
};

export default QuestionButton;
