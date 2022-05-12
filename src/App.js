import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Post from "./components/post/Post";

function App() {

  const user = true; /* no user logged in */

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/register" element={user ? <Home /> : <Register />}></Route>
        <Route exact path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route exact path="/write" element={user ? <Write /> : <Register />}></Route>
        <Route exact path="/settings" element={user ? <Settings /> : <Register />}></Route>
        <Route exact path="/post/:postId" element={<Single />}></Route>
      </Routes>
      <Register />
    </Router>
  );
}

export default App;
 