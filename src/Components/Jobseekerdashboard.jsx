import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function JobSeekerDashboard() {

  const navigate = useNavigate();

  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="bg-light min-vh-100">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">

          <a
            className="navbar-brand fw-bold text-primary"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActivePage("dashboard");
            }}
          >
            JobPortal
          </a>

          <div className="d-flex align-items-center gap-2 gap-md-3">

            <span className="fw-semibold d-none d-sm-block">
              Job Seeker
            </span>

            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => {
                alert("Logged out successfully");
                navigate("/");
              }}
            >
              Logout
            </button>

          </div>

        </div>
      </nav>


      {/* Dashboard */}
      {activePage === "dashboard" && (
        <div className="container py-4 py-md-5">

          {/* Welcome */}
          <div className="mb-4">
            <h2 className="fw-bold">
              Welcome Back, Job Seeker
            </h2>

            <p className="text-muted">
              Find your next opportunity and build your career.
            </p>
          </div>


          {/* Search */}
          <div className="card shadow-sm border-0 p-3 p-md-4 mb-5">

            <div className="row g-3">

              <div className="col-12 col-md-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search job title or skills"
                />
              </div>

              <div className="col-12 col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                />
              </div>

              <div className="col-12 col-md-3">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => navigate("/jobs")}
                >
                  Search Jobs
                </button>
              </div>

            </div>
          </div>


          {/* Dashboard Cards */}
          <div className="row g-4">

            {/* Available Jobs */}
            <div className="col-12 col-sm-6 col-lg-4">

              <div className="card border-0 shadow-sm p-4 text-center h-100">

                <h2 className="text-primary">
                  25
                </h2>

                <h5>
                  Available Jobs
                </h5>

                <p className="text-muted">
                  Jobs matching your skills
                </p>

                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => navigate("/jobs")}
                >
                  View Jobs
                </button>

              </div>
            </div>


            {/* Applications */}
            <div className="col-12 col-sm-6 col-lg-4">

              <div
                className="card border-0 shadow-sm p-4 text-center h-100"
                style={{ cursor: "pointer" }}
                onClick={() => setActivePage("applications")}
              >

                <h2 className="text-success">
                  5
                </h2>

                <h5>
                  Applications
                </h5>

                <p className="text-muted">
                  Jobs you have applied for
                </p>

                <button className="btn btn-outline-success btn-sm">
                  View Applications
                </button>

              </div>
            </div>


            {/* Saved Jobs */}
            <div className="col-12 col-sm-6 col-lg-4">

              <div
                className="card border-0 shadow-sm p-4 text-center h-100"
                style={{ cursor: "pointer" }}
                onClick={() => setActivePage("saved")}
              >

                <h2 className="text-warning">
                  3
                </h2>

                <h5>
                  Saved Jobs
                </h5>

                <p className="text-muted">
                  Jobs saved for later
                </p>

                <button className="btn btn-outline-warning btn-sm">
                  View Saved Jobs
                </button>

              </div>
            </div>

          </div>


          {/* Quick Actions */}
          <div className="mt-5">

            <h4 className="fw-bold mb-3">
              Quick Actions
            </h4>

            <div className="d-flex flex-wrap gap-2">

              {/* Browse Jobs */}
              <button
                className="btn btn-primary"
                onClick={() => navigate("/jobs")}
              >
                Browse Jobs
              </button>

              <button
                className="btn btn-outline-primary"
                onClick={() => setActivePage("applications")}
              >
                My Applications
              </button>

              <button
                className="btn btn-outline-primary"
                onClick={() => setActivePage("saved")}
              >
                Saved Jobs
              </button>

              <button
                className="btn btn-outline-primary"
                onClick={() => setActivePage("profile")}
              >
                My Profile
              </button>

            </div>

          </div>

        </div>
      )}


      {/* Applications */}
      {activePage === "applications" && (
        <div className="container py-4 py-md-5">

          <button
            className="btn btn-secondary mb-4"
            onClick={() => setActivePage("dashboard")}
          >
            ← Back
          </button>

          <h2 className="fw-bold">
            My Applications
          </h2>

          <div className="card shadow-sm border-0 p-4 mt-4">

            <h5>
              React Developer
            </h5>

            <p>
              Prefoxy Technologies
            </p>

            <span className="badge bg-warning text-dark">
              Application Pending
            </span>

          </div>

        </div>
      )}


      {/* Saved Jobs */}
      {activePage === "saved" && (
        <div className="container py-4 py-md-5">

          <button
            className="btn btn-secondary mb-4"
            onClick={() => setActivePage("dashboard")}
          >
            ← Back
          </button>

          <h2 className="fw-bold">
            Saved Jobs
          </h2>

          <div className="card shadow-sm border-0 p-4 mt-4">

            <h5>
              Frontend Developer
            </h5>

            <p>
              Axeous Solutions
            </p>

            <p className="text-muted">
              Bangalore
            </p>

          </div>

        </div>
      )}


      {/* Profile */}
      {activePage === "profile" && (
        <div className="container py-4 py-md-5">

          <button
            className="btn btn-secondary mb-4"
            onClick={() => setActivePage("dashboard")}
          >
            ← Back
          </button>

          <h2 className="fw-bold mb-4">
            My Profile
          </h2>

          <div className="card shadow-sm border-0 p-4">

            <h4>
              Job Seeker
            </h4>

            <p className="text-muted">
              Full Stack Developer
            </p>

            <p>
              Skills: HTML, CSS, JavaScript, React.js
            </p>

            <button className="btn btn-primary">
              Edit Profile
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default JobSeekerDashboard;