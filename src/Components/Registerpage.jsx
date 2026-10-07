import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Job Seeker");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all the fields");
      return;
    }

    alert(`Registered successfully as ${role}`);

    if (role === "Job Seeker") {
      navigate("/jobseeker-dashboard");
    } else {
      navigate("/recruiter-dashboard");
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center py-5">

      <div
        className="row shadow-lg bg-white rounded-4 overflow-hidden"
        style={{ maxWidth: "900px", width: "100%" }}
      >

        {/* Left Side */}
        <div className="col-md-5 bg-primary text-white p-5 d-flex flex-column justify-content-center">

          <h1 className="fw-bold">
            JobPortal
          </h1>

          <h3 className="mt-4">
            Create Your Account
          </h3>

          <p className="mt-3">
            Join our platform and connect with companies
            and exciting job opportunities.
          </p>

        </div>

        {/* Right Side */}
        <div className="col-md-7 p-5">

          <h2 className="fw-bold text-center">
            Register
          </h2>

          <p className="text-muted text-center mb-4">
            Create a new account
          </p>

          <form onSubmit={handleRegister}>

            {/* Name */}
            <div className="mb-3">

              <label className="form-label fw-semibold">
                Full Name
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

            </div>

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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>

            {/* Role */}
            <div className="mb-4">

              <label className="form-label fw-semibold">
                Register As
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

            {/* Register Button */}
            <button
              type="submit"
              className="btn btn-primary w-100 py-2 fw-semibold"
            >
              Create Account
            </button>

          </form>

          {/* Login */}
          <p className="text-center mt-4">

            Already have an account?{" "}

            <button
              type="button"
              onClick={() => navigate("/")}
              className="btn btn-link p-0 text-primary fw-semibold text-decoration-none"
            >
              Login
            </button>

          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;