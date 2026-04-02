import "./App.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./Pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;