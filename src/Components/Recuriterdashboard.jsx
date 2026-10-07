import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecruiterDashboard() {
  const navigate = useNavigate();

  const [activePage, setActivePage] = useState("dashboard");

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      type: "Full Time",
      location: "Chennai",
      status: "Active",
    },
    {
      id: 2,
      title: "React Developer",
      type: "Full Time",
      location: "Bangalore",
      status: "Active",
    },
    {
      id: 3,
      title: "Web Developer",
      type: "Full Time",
      location: "Coimbatore",
      status: "Active",
    },
    {
      id: 4,
      title: "Python Developer",
      type: "Full Time",
      location: "Bangalore",
      status: "Active",
    },
    {
      id: 5,
      title: "Fullstack Developer",
      type: "Full Time",
      location: "Madurai",
      status: "Active",
    },
  ]);

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div className="bg-light min-vh-100">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">

          <a
            className="navbar-brand fw-bold text-primary"
            href="#"
            onClick={() => setActivePage("dashboard")}
          >
            JobPortal
          </a>

          <div className="d-flex align-items-center gap-2 gap-md-3">

            <span className="fw-semibold d-none d-sm-block">
              Recruiter
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
              Welcome, Recruiter
            </h2>

            <p className="text-muted">
              Manage your job postings and find the right candidates.
            </p>
          </div>


          {/* Statistics */}
          <div className="row g-4 mb-5">

            {/* Jobs Posted */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="card border-0 shadow-sm p-4 text-center h-100"
                style={{ cursor: "pointer" }}
                onClick={() => setActivePage("jobs")}
              >
                <h2 className="text-primary">
                  {jobs.length}
                </h2>

                <h5>Jobs Posted</h5>

                <p className="text-muted mb-0">
                  Total job postings
                </p>
              </div>
            </div>


            {/* Applications */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="card border-0 shadow-sm p-4 text-center h-100"
                style={{ cursor: "pointer" }}
                onClick={() => setActivePage("applicants")}
              >
                <h2 className="text-success">
                  48
                </h2>

                <h5>Applications</h5>

                <p className="text-muted mb-0">
                  Candidates applied
                </p>
              </div>
            </div>


            {/* Active Jobs */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="card border-0 shadow-sm p-4 text-center h-100"
                style={{ cursor: "pointer" }}
                onClick={() => setActivePage("jobs")}
              >
                <h2 className="text-warning">
                  {jobs.filter(
                    (job) => job.status === "Active"
                  ).length}
                </h2>

                <h5>Active Jobs</h5>

                <p className="text-muted mb-0">
                  Currently active
                </p>
              </div>
            </div>

          </div>


          {/* Job Management */}
          <div className="card border-0 shadow-sm">

            <div className="card-header bg-white py-3">

              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">

                <h4 className="fw-bold mb-0">
                  Manage Jobs
                </h4>

                {/* Router Navigation */}
                <button
                  className="btn btn-primary w-100 w-md-auto"
                  onClick={() => navigate("/add-job")}
                >
                  + Add New Job
                </button>

              </div>

            </div>


            <div className="card-body">

              {jobs.map((job) => (

                <div
                  key={job.id}
                  className="border rounded p-3 mb-3"
                >

                  <div className="d-flex flex-column flex-md-row justify-content-between gap-3">

                    {/* Job Details */}
                    <div>

                      <h5 className="fw-bold mb-1">
                        {job.title}
                      </h5>

                      <p className="text-muted mb-2">
                        {job.type} &nbsp; | &nbsp; {job.location}
                      </p>

                      <span className="badge bg-success">
                        {job.status}
                      </span>

                    </div>


                    {/* Buttons */}
                    <div className="d-flex flex-wrap gap-2 align-items-start">

                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => setActivePage("edit")}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => deleteJob(job.id)}
                      >
                        Delete
                      </button>

                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => setActivePage("applicants")}
                      >
                        Applicants
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>
      )}


      {/* Jobs Page */}
      {activePage === "jobs" && (
        <div className="container py-4 py-md-5">

          <button
            className="btn btn-secondary mb-4"
            onClick={() => setActivePage("dashboard")}
          >
            ← Back
          </button>

          <h2 className="fw-bold mb-4">
            My Jobs
          </h2>

          <div className="row g-4">

            {jobs.map((job) => (

              <div
                className="col-12 col-md-6"
                key={job.id}
              >

                <div className="card border-0 shadow-sm p-4 h-100">

                  <h4>{job.title}</h4>

                  <p className="text-muted">
                    {job.type} | {job.location}
                  </p>

                  <span className="badge bg-success mb-3">
                    {job.status}
                  </span>

                  <button
                    className="btn btn-primary"
                    onClick={() => setActivePage("applicants")}
                  >
                    View Applicants
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>
      )}


      {/* Applicants Page */}
      {activePage === "applicants" && (
        <div className="container py-4 py-md-5">

          <button
            className="btn btn-secondary mb-4"
            onClick={() => setActivePage("dashboard")}
          >
            ← Back
          </button>

          <h2 className="fw-bold mb-4">
            Applicants
          </h2>

          <div className="card border-0 shadow-sm p-4 mb-3">

            <h5>Atchaya Jayakumar</h5>

            <p className="text-muted">
              Full Stack Developer
            </p>

            <p>
              Skills: HTML, CSS, JavaScript, React.js
            </p>

            <button className="btn btn-success">
              View Resume
            </button>

          </div>

          <div className="card border-0 shadow-sm p-4">

            <h5>Candidate 2</h5>

            <p className="text-muted">
              Frontend Developer
            </p>

            <p>
              Skills: HTML, CSS, Bootstrap, React
            </p>

            <button className="btn btn-success">
              View Resume
            </button>

          </div>

        </div>
      )}


      {/* Edit Page */}
      {activePage === "edit" && (
        <div className="container py-4 py-md-5">

          <button
            className="btn btn-secondary mb-4"
            onClick={() => setActivePage("dashboard")}
          >
            ← Back
          </button>

          <h2 className="fw-bold mb-4">
            Edit Job
          </h2>

          <div className="card border-0 shadow-sm p-4">

            <div className="mb-3">

              <label className="form-label">
                Job Title
              </label>

              <input
                type="text"
                className="form-control"
                defaultValue="Frontend Developer"
              />

            </div>


            <div className="mb-3">

              <label className="form-label">
                Location
              </label>

              <input
                type="text"
                className="form-control"
                defaultValue="Chennai"
              />

            </div>


            <button
              className="btn btn-primary"
              onClick={() => {
                alert("Job updated successfully");
                setActivePage("dashboard");
              }}
            >
              Update Job
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default RecruiterDashboard;