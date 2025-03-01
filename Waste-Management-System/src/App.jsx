import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
    </BrowserRouter>
  );
}

export default App;
