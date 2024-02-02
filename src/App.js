import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MatchNumbers from "./pages/MatchNumbers";
import SmallestNumber from "./pages/SmallestNumber";
import Instructions from "./pages/Instructions";

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Instructions />} />
          <Route path="/smallestnumber" element={<SmallestNumber />} />
          <Route path="/matchnumbers" element={<MatchNumbers />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
