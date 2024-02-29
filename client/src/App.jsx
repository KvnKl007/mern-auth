import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import About from "./pages/about";
import Profile from "./pages/profile";
import SignIn from "./pages/signin";
import Home from "./pages/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
</BrowserRouter>
  );
}
