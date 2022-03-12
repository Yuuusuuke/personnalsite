import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.scss';
// Components
import Navbar from './components/Navbar/Navbar';
import Index from './pages/Index/Index';
import Footer from './components/Footer/Footer';
// Pages
import Thes from './pages/Thes/Thes';
import GuildWars from './pages/GuildWars/GuildWars';
import Projets from './pages/Projets/Projets';
import Error404 from './pages/Error404/Error404';
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
      <Router>
          <Navbar />

          <Routes>
            <Route path="/thes" element={<Thes />} />
            <Route path="/guildwars" element={<GuildWars />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/" element={<Index />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>

        <Footer />
      </DarkModeProvider>
    </div>
  );
}

export default App;
