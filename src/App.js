import "./App.css";
import LoginPage from "./pages/loginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/home" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
