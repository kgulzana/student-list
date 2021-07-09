import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Login() {
  let [loginForm, setLoginForm] = useState({});
  let dispatch = useDispatch();

  let handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  let loginHandler = (e) => {
    e.preventDefault();

    let request = {
      method: "POST",
      body: JSON.stringify(loginForm),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:1717/login", request)
      .then((r) => r.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("x_token", data.token);
          alert("You have loginned successfully!");
          window.location.href = "/";
        } else {
          alert("login error!");
        }
      });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Login</h3>
      </div>

      <div className="card-body">
        <form onSubmit={loginHandler}>
          <div className="mb-3">
            <label for="username" class="form-label">
              Login
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              name="username"
              onChange={handleChange}
              value={loginForm.username}
            ></input>
          </div>
          <div className="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="text"
              class="form-control"
              id="password"
              name="password"
              onChange={handleChange}
              value={loginForm.password}
            ></input>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="card-footer">
        Have no account?
        <Link to="/register">register</Link>
        
      </div>
    </div>
  );
}
