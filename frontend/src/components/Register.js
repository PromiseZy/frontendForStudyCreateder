import React, { useState, useEffect } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {
  const initialUser = {
    username: "Sadvkcxlg",
    password: "asweddddddddr",
    email: "asasdzxcdwqt@gmail.com",
    name: "Ratregd",
    surname: "Retdfg",
  };

  const [user, setUser] = useState(initialUser);

  const handleChange = ({ target }) => {
    setUser((currentUser) => ({
      ...currentUser,
      [target.name]: target.value,
    }));
  };

  const handleLogin = async () => {
    const url = "http://localhost:1337/api/accounts";
    try {
      if (
        user.username &&
        user.password &&
        user.email &&
        user.name &&
        user.surname
      ) {
        const res = await axios.post(url, {
          data: user,
        }
        );
        console.log({ res });
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
      console.log(user);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-green-200 w-full h-12 flex justify-center">
        <span className="text-3xl text-amber-600 font-bold">Register Page</span>
      </div>
      <div className="justify-center text-center items-center py-12 space-y-2">
        <span>
          username
          <br />
        </span>
        <input
          className="text-amber-600 border-4 rounded-md"
          type="username"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Enter your username"
        />
        <span>
          <br />
          password
          <br />
        </span>
        <input
          className="text-amber-600 border-4 rounded-md"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <span>
          <br />
          E-mail
          <br />
        </span>
        <input
          className="text-amber-600 border-4 rounded-md"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your E-mail"
        />
        <span>
          <br />
          Name
          <br />
        </span>
        <input
          className="text-amber-600 border-4 rounded-md"
          type="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <span>
          <br />
          Surname
          <br />
        </span>
        <input
          className="text-amber-600 border-4 rounded-md"
          type="surname"
          name="surname"
          value={user.surname}
          onChange={handleChange}
          placeholder="Enter your surname"
        />
        <div className="space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogin}
          >
            ลงทะเบียน
          </button>
          <a href="/">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded space-x-2">
              ย้อนกลับ
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
