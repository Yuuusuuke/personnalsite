import './App.scss';
import {BrowserRoutes as Router, Routes, Route} from "react-router-dom";
import Index from './pages/index';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
