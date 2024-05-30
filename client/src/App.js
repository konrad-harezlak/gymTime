import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import Exercises from "./pages/Excercies.js";
import Forum from './pages/Forum.js';
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Error from "./pages/Error.js";
import "./assets/styles/app.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/forum" element={<Forum />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
