import styled from "styled-components";

const BoardWrap = styled.div`
  width: 80%;
  height: calc(100vh - 135px);
  float: right;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 15px #ededed;
`;

const DashBoard = () => {
  return <BoardWrap></BoardWrap>;
};

export default DashBoard;
