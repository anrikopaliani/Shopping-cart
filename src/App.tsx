import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingContextProvider } from "./context/ShoppingContext";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
