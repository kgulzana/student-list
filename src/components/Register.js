import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Login() {
  let [regForm, setRegForm] = useState({});
  let dispatch = useDispatch();

  let handleChange = (e) => {
    setRegForm({
      ...regForm,
      [e.target.name]: e.target.value,
    });
  };

  let registerHandler = (e) => {
    e.preventDefault();

    let request = {
      method: "POST",
      body: JSON.stringify(regForm),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:1717/signin", request)
      .then((r) => r.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("x_token", data.token);
          dispatch({ type: "*", payload: true });
          window.location.href = "/";
        }
      });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Register</h3>
      </div>

      <div className="card-body">
        <form onSubmit={registerHandler}>
          <div className="mb-3">
            <label for="login" class="form-label">
              Username
            </label>
          <input
              type="text"
              class="form-control"
              id="username"
              name="username"
              onChange={handleChange}
              value={regForm.username}
            ></input>
          </div>
          <div className="mb-3">
            <label for="firstname" class="form-label">
              Firstname
            </label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              name="firstName"
              onChange={handleChange}
              value={regForm.firstName}
            ></input>
          </div>
          <div className="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              onChange={handleChange}
              value={regForm.password}
            ></input>
          </div>

          <div className="mb-3">
            <label for="password" class="form-label">
              Age
            </label>
            <input
              type="text"
              class="form-control"
              id="age"
              name="age"
              onChange={handleChange}
              value={regForm.age}
            ></input>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
