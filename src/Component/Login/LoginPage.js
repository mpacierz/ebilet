import React, { Component, setState, useState, useEffect, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router';

import AuthContext from "../../Context/authContext";


export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = useContext(AuthContext);


  const loginhandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8082/login", {
        username: username,
        password: password,
      });
      auth.login(e);
      if (res.data.token) {
        window.localStorage.setItem(
          "token-data",
          JSON.stringify(res.data.token)
        );
        window.localStorage.setItem(
          "tokenRef-data",
          JSON.stringify(res.data.refreshToken)
        );
        window.localStorage.setItem("user", JSON.stringify(res.data.user));
        window.localStorage.setItem(
          "admin",
          JSON.stringify(res.data.user.isAdmin)
        );
        window.localStorage.setItem(
          "moderator",
          JSON.stringify(res.data.user.isModerator)
        );
        window.localStorage.setItem(
          "banned",
          JSON.stringify(res.data.user.isbanned)
        );
      }
      navigate.push("/wyszukiwanie");
    } catch (ex) {
      console.log(ex);
      setLoading(false);
      setError(ex.response.status);
    }
  };
  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      loginhandler(e);
    }
  };
  return (
    <div >
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={onKeyDownHandler}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={onKeyDownHandler}
          />
        </div>
        <div>
          <button onClick={loginhandler}>
            {loading ? (
              <div className="spinner-border text-danger" role="status">
                <span className="sr-only"></span>
              </div>
            ) : (
              "Zaloguj"
            )}
          </button>
          <button
            onClick={() => navigate.push("/register")}
          >
            Rejestracja
          </button>
        </div>
      </form>
      {error ? (
        <div className={"alert alert-danger"}>
          {error === 403 ? "Zly login lub haslo" : "cos poszlo nie tak"}
        </div>
      ) : null}
    </div>
  );
}