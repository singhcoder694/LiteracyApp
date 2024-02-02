import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MatchNumbers from "./pages/MatchNumbers";
import SmallestNumber from "./pages/SmallestNumber";
import Instructions from "./pages/Instructions";
import Background from "./Components/Background";

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Instructions />} />
          <Route path="/smallestnumber" element={<SmallestNumber />} />
          <Route path="/matchnumbers" element={<MatchNumbers />} />
          <Route path="/background" element={<Background />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
