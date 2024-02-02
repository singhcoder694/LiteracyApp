// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationProvider } from "./context/NavigationContext";
import Background from "./Components/Background";
import FillInTheBlanks from "./pages/FillInTheBlanks";
import MatchTheColumn from "./pages/MatchTheColumn";
import GreatestNumber from "./pages/GreatestNumber";
import StartingScreen from './pages/StartingScreen'
import Register from "./pages/Register";
import Login from "./pages/Login";
import SetAvatar from "./pages/SetAvatar";
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
            <Route path="/greatestnumber" element={<GreatestNumber />} />
            <Route path="/matchthecolumn" element={<MatchTheColumn />} />
            
            <Route path="/fillintheblanks" element={<FillInTheBlanks />} />
            <Route path = '/guest' element = {<StartingScreen/>}/>
            <Route path = '/register' element = {<Register/>}/>
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/avatar' element = {<SetAvatar/>}/>
          </Routes>
        </NavigationProvider>
      </Router>
    </main>
  );
};

export default App;
