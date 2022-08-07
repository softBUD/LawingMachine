import styled from "styled-components";
import DashBoard from "../../components/DashBoard/DashBoard";

const TitleText = styled.p`
  font-size: 20px;
`;

const MyPages = () => {
  return (
    <DashBoard>
      <TitleText>마이페이지</TitleText>
    </DashBoard>
  );
};

export default MyPages;
