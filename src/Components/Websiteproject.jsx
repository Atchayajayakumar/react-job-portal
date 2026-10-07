function Websiteproject() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Website Projects</h2>

      <div className="project-container">

        <div className="project-card">
          <h3>Portfolio Website</h3>

          <p>
            A responsive personal portfolio website created using
            HTML, CSS, JavaScript and React.
          </p>

          <button className="project-btn">
            View Project
          </button>
        </div>

        <div className="project-card">
          <h3>Resume Generator</h3>

          <p>
            A web application that collects user information and
            generates a resume template.
          </p>

          <button className="project-btn">
            View Project
          </button>
        </div>

        <div className="project-card" >
          <h3>College Event Website</h3>

          <p>
            A responsive college symposium website containing event
            details, registration and contact sections.
          </p>

          <button className="project-btn">
            View project
          </button>
        </div>

      </div>
    </section>
  );
}

export default Websiteproject;