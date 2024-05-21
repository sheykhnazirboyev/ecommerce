import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GeneralLayout from "./pages/GeneralLayout";
import Profile from "./pages/Profile";

const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const Cards = React.lazy(() => import("./pages/Cards"));
const SingleProduct = React.lazy(() => import("./pages/SingleProduct"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<GeneralLayout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/profile/:userId" element={<Profile />}  />
            <Route path="/products/:productId" element={<SingleProduct />}  />
            <Route path="/create-user" element={<Register />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
