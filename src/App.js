import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./pages/navigation/Navigation";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import Sheets from "./pages/sheets/Sheets";
import Footer from "./pages/footer/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sheets" element={<Sheets />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
