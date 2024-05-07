import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Cards from "./pages/Cards";
import GeneralLayout from "./pages/GeneralLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GeneralLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cards" element={<Cards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
