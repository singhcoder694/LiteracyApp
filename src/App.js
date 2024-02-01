import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MatchNumbers from "./pages/MatchNumbers";
import SmallestNumber from "./pages/SmallestNumber";

const App = () => {
  return (
    <main>
     
      <Router>
        
        <Routes>
        <Route path="/smallestnumber" element={<SmallestNumber />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
