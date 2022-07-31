import styled from "styled-components";

const M1 = "http://13.124.83.80:8080/images/lawingmachine.png";

export const Wrap = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export const Logo = styled.img`
  background: url(${M1}) no-repeat center center/70%;
  height: 100%;
  flex: 0.5;
`;

export const MyPage = styled.div`
  flex: 0.7;
`;
