import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddJob() {

  const navigate = useNavigate();

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    skills: "",
    description: ""
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Job Posted:", job);

    alert("Job Posted Successfully!");

    setJob({
      title: "",
      company: "",
      location: "",
      salary: "",
      skills: "",
      description: ""
    });
  };

  return (
    <div className="container mt-5">

      {/* Back Button */}
      <button
        className="btn btn-secondary mb-4"
        onClick={() => navigate("/recruiter-dashboard")}
      >
        ← Back to Dashboard
      </button>

      <div className="card shadow-sm border-0 p-4">

        <h2 className="fw-bold mb-4">
          Post a Job
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            className="form-control mb-3"
            placeholder="Job Title"
            value={job.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            className="form-control mb-3"
            placeholder="Company Name"
            value={job.company}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            className="form-control mb-3"
            placeholder="Location"
            value={job.location}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="salary"
            className="form-control mb-3"
            placeholder="Salary"
            value={job.salary}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="skills"
            className="form-control mb-3"
            placeholder="Required Skills"
            value={job.skills}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            className="form-control mb-3"
            placeholder="Job Description"
            rows="5"
            value={job.description}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="btn btn-primary"
          >
            Post Job
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddJob;