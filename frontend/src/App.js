import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationProvider } from "./context/NavigationContext";
import Background from "./Components/Background";
import StartingScreen from './pages/GuestLogin'
import Register from "./pages/Register";
import Login from "./pages/Login";
import SetAvatarGuest from "./pages/SetAvatarGuest";
import SetAvatarRegister from "./pages/SetAvatarRegister";
import Instructions from "./pages/Instructions";
import Dashboard from "./pages/Dashboard";
import ShowAvatars from "./Components/dashboard/ShowAvatars";
import AllAnswers from "./Components/dashboard/AllAnswers";
import { QuestionProvider } from "./context/QuestionContext";

const App = () => {
  return (
    <main className="main-bg">
      <QuestionProvider >
      <Router>
        <NavigationProvider>
          <Routes>
            <Route path="/questions" element={<Background />} />
            <Route path='/' element={<StartingScreen />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/guestAvatar' element={<SetAvatarGuest />} />
            <Route path='/registerAvatar' element={<SetAvatarRegister />} />
            <Route path="/background" element={<Background />} />
            <Route path='/instructions' element={<Instructions />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/showavatars' element={<ShowAvatars />} />
            <Route path='/allAnswers' element={<AllAnswers />} />
          </Routes>
        </NavigationProvider>
      </Router>
      </QuestionProvider>
    </main>
  );
};

export default App;
