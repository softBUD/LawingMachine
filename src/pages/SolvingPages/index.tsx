import styled from "styled-components";
import DashBoard from "../../components/DashBoard/DashBoard";

const TitleText = styled.p`
  font-size: 20px;
`;

const SovingPages = () => {
  return (
    <DashBoard>
      <TitleText>시험응시</TitleText>
    </DashBoard>
  );
};

export default SovingPages;
