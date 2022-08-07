import { useState, useTransition } from "react";
import { useTranslation } from "react-i18next";
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

interface Inherit {
  id: number;
  name: string;
  link: string;
}

const Data: Inherit[] = [
  { id: 1, name: "IMenuDashboard", link: "/" },
  { id: 2, name: "IMenuSolving", link: "/solvingPages" },
  { id: 3, name: "IMenuCommunity", link: "/communityPages" },
  // { id: 4, name: "IMyPage", link: "/myPages" },
  { id: 4, name: "IMenuAdmin", link: "/adminPages" },
];

const Sidebar = () => {
  const [toggleState, setToggleState] = useState(false);

  const { t } = useTranslation();

  return (
    <Wrap>
      <Container>
        <Content>
          <ul>
            {Data.map((title) => {
              return (
                <li>
                  <NavLink
                    to={title.link}
                    key={title.id}
                    className={toggleState === true ? "tabs active" : "tabs"}
                  >
                    {t(title.name)}
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
