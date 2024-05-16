import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import About from "./pages/about";
import Profile from "./pages/profile";
import SignIn from "./pages/signin";
import Home from "./pages/home";
import Header from "./components/header";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
    {/* header */ }
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        
      </Routes>
</BrowserRouter>
  );
}
