





// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationProvider } from "./context/NavigationContext";
import Background from "./Components/Background";
import StartingScreen from './pages/StartingScreen'
import Register from "./pages/Register";
import Login from "./pages/Login";
import SetAvatar from "./pages/SetAvatar";
import MatchNumbers from "./pages/MatchNumbers";

const App = () => {
  return (
    <main className="main-bg">
      <Router>
        <NavigationProvider>
          <Routes>
            <Route
              path="/"
              element={<Background />}
            ></Route>

            <Route path="/matchthecolumn" element={<MatchNumbers />} />
             <Route path='/guest' element={<StartingScreen />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/avatar' element={<SetAvatar />} />
            <Route path="/background" element={<Background />} />
          </Routes>
        </NavigationProvider>
      </Router>
    </main>
  );
};

export default App;
