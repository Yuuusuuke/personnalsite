import './App.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Index from './pages/Index/Index';
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
