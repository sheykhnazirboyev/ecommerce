import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://test-ecommerce-gamma.vercel.app/auth", {
        login: userName,
        password: password,
      });
      if(response.data.token) {
        localStorage.setItem("auth-token", response.data.token);
        navigate("/");
      }
    } catch (error) {
        alert("Foydalanuvchi username yoki parol xato")
        console.log("Xatolik yuz berdi");
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-300 flex items-center justify-center">
      <div className=" bg-white p-6 shadow-xl">
        <div className="mb-5">
          <h1 className="text-xl text-center">Login</h1>
        </div>
        <div className="mb-4 flex flex-row justify-between">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            className="ml-4 border-2"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </div>
        <div className="mb-4 flex flex-row justify-between">
          <label htmlFor="password">Password</label>
          <input
            className="border-2"
            id="password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <div className="mb-4 text-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
