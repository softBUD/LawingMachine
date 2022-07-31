import { useTranslation } from "react-i18next";
import QuestionButton from "../Button/QuestionButton";
import SearchBar from "../Forms/SearchBar";
import { Wrap, Container, Logo, MyPage } from "./useHeaderStyles";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Wrap>
      <Container>
        {/* Link to */}
        <Logo />
        <SearchBar
          onChangeValue={function (value: string): void {}}
          onSearchEvent={function (): void {}}
          disabledValue={false}
        />
        <QuestionButton />
        <MyPage>
          {/* Link to, 3항 연산자, 프로필 이미지 */}
          <span>{t("IMyPage")}</span>
        </MyPage>
      </Container>
    </Wrap>
  );
};

export default Header;
