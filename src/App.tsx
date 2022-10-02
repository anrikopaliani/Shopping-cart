import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Store from "./pages/Store";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
