import styled from "styled-components";

const Wrap = styled.div`
  width: 80%;
  height: calc(100vh - 135px);
  float: right;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 15px #ededed;
`;

const DashBoard = (props: any): any => {
  const { children } = props;

  return <Wrap>{children}</Wrap>;
};

export default DashBoard;
