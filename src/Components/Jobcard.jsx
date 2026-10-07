import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// Individual Job Card
function JobCard({ job, onApply }) {
  return (
    <div className="card h-100 p-3 shadow-sm">

      <h4>{job.title}</h4>

      <p>
        <b>Company:</b> {job.company}
      </p>

      <p>
        <b>Location:</b> {job.location}
      </p>

      <p>
        <b>Salary:</b> {job.salary}
      </p>

      <button
        className="btn btn-primary mt-auto"
        onClick={() => onApply(job.title)}
      >
        Apply Now
      </button>

    </div>
  );
}


// Main Job Card Page
function Jobcard() {

  const navigate = useNavigate();

  const [jobs] = useState([
    {
      id: 1,
      title: "React Developer",
      company: "Prefoxy Technologies",
      location: "Chennai",
      salary: "₹25,000"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Axeous Solutions",
      location: "Bangalore",
      salary: "₹50,000"
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "Delta Solutions",
      location: "Chennai",
      salary: "₹30,000"
    },
    {
      id: 4,
      title: "Web Developer",
      company: "Venus Tech",
      location: "Madurai",
      salary: "₹25,000"
    },
    {
      id: 5,
      title: "Recruiter",
      company: "Ziva Solution",
      location: "Salem",
      salary: "₹20,000"
    },
    {
      id: 6,
      title: "Prompt Engineer",
      company: "Capiler Tech",
      location: "Bangalore",
      salary: "₹50,000"
    },
    {
      id: 7,
      title: "Cloud Architect",
      company: "Southern Infosys",
      location: "Coimbatore",
      salary: "₹40,000"
    },
    {
      id: 8,
      title: "Support Engineer",
      company: "Tech Nova",
      location: "Bangalore",
      salary: "₹30,000"
    },
    {
      id: 9,
      title: "Software Engineer",
      company: "Axion Solution",
      location: "Chennai",
      salary: "₹25,000"
    },
    {
      id: 10,
      title: "Python Developer",
      company: "Pilex",
      location: "Bangalore",
      salary: "₹40,000"
    },
    {
      id: 11,
      title: "Backend Developer",
      company: "BTS",
      location: "Bangalore",
      salary: "₹25,000"
    },
    {
      id: 12,
      title: "React Developer",
      company: "Simon",
      location: "Bangalore",
      salary: "₹50,000"
    }
  ]);


  const handleApply = (jobTitle) => {
    alert(`Applied for ${jobTitle}`);
  };


  return (
    <div className="container mt-5">

      {/* Back Button */}
      <button
        className="btn btn-secondary mb-4"
        onClick={() => navigate("/jobseeker-dashboard")}
      >
        ← Back to Dashboard
      </button>


      <h2 className="mb-4 text-center">
        Available Jobs
      </h2>


      <div className="row g-4">

        {jobs.map((job) => (

          <div
            className="col-12 col-md-6 col-lg-4"
            key={job.id}
          >

            <JobCard
              job={job}
              onApply={handleApply}
            />

          </div>

        ))}

      </div>

    </div>
  );
}

export default Jobcard;