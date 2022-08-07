import styled from "styled-components";
import DashBoard from "../../components/DashBoard/DashBoard";

const TitleText = styled.p`
  font-size: 20px;
`;

const AdminPages = (props: any): any => {
  return (
    <>
      <DashBoard>
        <TitleText>관리자</TitleText>
      </DashBoard>
    </>
  );
};

export default AdminPages;
