import { Route, Routes, BrowserRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminPages from "../pages/AdminPages";
import CommunityPages from "../pages/CommunityPages";
import Home from "../pages/Home";
import LoginPages from "../pages/LoginPages";
import MyPages from "../pages/MyPages";
import SolvingPages from "../pages/SolvingPages";

function MainRoute() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/loginPages" element={<LoginPages />} />
        <Route path="/" element={<Home />} />
        <Route path="/solvingPages" element={<SolvingPages />} />
        <Route path="/communityPages" element={<CommunityPages />} />
        <Route path="/myPages" element={<MyPages />} />
        <Route path="/adminPages" element={<AdminPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoute;
