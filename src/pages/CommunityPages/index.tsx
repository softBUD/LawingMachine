import styled from "styled-components";
import DashBoard from "../../components/DashBoard/DashBoard";

const TitleText = styled.p`
  font-size: 20px;
`;

const CommunityPages = () => {
  return (
    <DashBoard>
      <TitleText>커뮤니티</TitleText>
    </DashBoard>
  );
};

export default CommunityPages;
