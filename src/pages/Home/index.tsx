import styled from "styled-components";
import DashBoard from "../../components/DashBoard/DashBoard";

const TitleText = styled.p`
  font-size: 20px;
`;

const Home = (props: any): any => {
  return (
    <>
      <DashBoard>
        <TitleText>대시보드</TitleText>
      </DashBoard>
    </>
  );
};

export default Home;
