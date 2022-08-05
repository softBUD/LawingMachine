import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../../routes/index";

const Wrap = styled.div`
  width: 20%;
  height: calc(100vh - 135px);
  float: left;
`;

const Container = styled.div``;

const Content = styled.div`
  & ul {
    text-align: center;
    & .tabs {
      display: block;
      width: 60%;
      height: 50px;
      line-height: 50px;
      margin: 0 auto;
    }
    & .tabs.active {
      background-color: #00b0ff;
      border-radius: 15px;
      color: #fff;
    }
    & li {
      padding: 20px 0;
    }
  }
`;

const Data = [
  { id: 1, name: "대쉬보드", link: "/" },
  { id: 2, name: "시험응시", link: "/solvingPages" },
  { id: 3, name: "커뮤니티", link: "/communityPages" },
  { id: 4, name: "마이페이지", link: "/myPages" },
  { id: 5, name: "관리자", link: "/adminPages" },
];

const Sidebar = () => {
  const [toggleState, setToggleState] = useState(false);

  // function IsTab() {
  //   isTab(true);
  // }

  // const TodoItem = ({ id, text, checked, onToggle, onRemove }) => (
  //   <li
  //     style={{
  //       textDecoration: checked ? "line-through" : "none",
  //     }}
  //     onClick={() => onToggle(id)}
  //     onDoubleClick={() => onRemove(id)}
  //   >
  //     {text}
  //   </li>
  // );

  return (
    <Wrap>
      <Container>
        <Content>
          {/* <span style={{color: user.active ? 'green' : 'black'}}</span> */}
          {/* <span style={{ color: isTab.active ? "green" : "black" }}></span> */}
          <ul>
            {Data.map((title) => {
              return (
                <li>
                  <NavLink
                    to={title.link}
                    key={title.id}
                    className={toggleState === true ? "tabs active" : "tabs"}
                  >
                    {title.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </Content>
      </Container>
    </Wrap>
  );
};

export default Sidebar;
