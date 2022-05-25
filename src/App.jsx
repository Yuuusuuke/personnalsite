import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
// Components
import Navbar from "./components/Navbar/Navbar";
import Index from "./pages/index/index";
import Footer from "./components/Footer/Footer";
// Pages
import Thes from "./pages/Thes/Thes";
import GuildWars from "./pages/GuildWars/GuildWars";
import Projets from "./pages/Projets/Projets";
import Error404 from "./pages/Error404/Error404";
import SortTeam from "./pages/SortTeam/SortTeam";
//Redux
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector((state) => state.darkMode).active;
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className={`background ${darkMode && "background--dark"}`}></div>
        <Routes>
          <Route path="/sort_team" element={<SortTeam />} />
          <Route path="/thes" element={<Thes />} />
          <Route path="/guildwars" element={<GuildWars />} />
          <Route path="/about" element={<Projets />} />
          <Route path="/" element={<Index />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
