import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Devotion from "./pages/Devotion";
import Prayer from "./pages/Prayer";
import Meditation from "./pages/Meditation";
import Accountability from "./pages/Accountability";
import Settings from "./pages/Settings";
import login from "./pages/login";
import Videos from "./pages/Videos";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("flic_token");
    if (token) setIsLoggedIn(true);
  }, []);

  return isLoggedIn ? (
    <Videos />
  ) : (
    <Login onLogin={() => setIsLoggedIn(true)} />
  );
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/devotion" element={<Devotion />} />
          <Route path="/prayer" element={<Prayer />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/accountability" element={<Accountability />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
