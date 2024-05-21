import axios from "axios";
import React, { useState } from "react";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (userName && email && password) {
      try {
        const token = localStorage.getItem("auth-token");

        // axios.post(url, { heders, body });

        const response = await axios.post(
          "http://localhost:9001/register",
          {
            email: email,
            username: userName,
            password: password,
          },
          {
            headers: {
              "auth-token": token,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(response.data);
      } catch (err) {
        console.log("Xatolik yuz berdi", err);
      }
    } else {
      alert("Barcha maydonlarni to'ldiring");
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-300 flex items-center justify-center">
      <div className=" bg-white p-6 shadow-xl">
        <div className="mb-5">
          <h1 className="text-xl text-center">Register</h1>
        </div>
        <div className="mb-4 flex flex-row justify-between">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            className="ml-4 border-2"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
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
            Create user
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
