import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Job Seeker");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter Email and Password");
      return;
    }

    alert(`Login successful as ${role}`);

    if (role === "Job Seeker") {
      navigate("/jobseeker-dashboard");
    } else {
      navigate("/recruiter-dashboard");
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">

      <div
        className="row shadow-lg bg-white rounded-4 overflow-hidden"
        style={{ maxWidth: "900px", width: "100%" }}
      >

        {/* Left Side */}
        <div className="col-md-6 bg-primary text-white d-flex flex-column justify-content-center p-5">

          <h1 className="fw-bold">
            JobPortal
          </h1>

          <h3 className="mt-4">
            Find Your Dream Job
          </h3>

          <p className="mt-3">
            Connect with top companies and discover the right
            opportunities for your career.
          </p>

        </div>

        {/* Right Side */}
        <div className="col-md-6 p-5">

          <h2 className="fw-bold text-center mb-2">
            Welcome Back!
          </h2>

          <p className="text-muted text-center mb-4">
            Login to your account
          </p>

          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="mb-3">

              <label className="form-label fw-semibold">
                Email Address
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

            {/* Password */}
            <div className="mb-3">

              <label className="form-label fw-semibold">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>

            {/* Role */}
            <div className="mb-3">

              <label className="form-label fw-semibold">
                Login As
              </label>

              <select
                className="form-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="Job Seeker">
                  Job Seeker
                </option>

                <option value="Recruiter">
                  Recruiter
                </option>
              </select>

            </div>

            {/* Forgot Password */}
            <div className="text-end mb-3">

              <a
                href="#"
                className="text-decoration-none"
              >
                Forgot Password?
              </a>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn btn-primary w-100 py-2 fw-semibold"
            >
              Login
            </button>

          </form>

          {/* Register */}
          <p className="text-center mt-4">

            Don't have an account?{" "}

            <a
              href="/register"
              className="text-primary fw-semibold text-decoration-none"
            >
              Register
            </a>

          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;