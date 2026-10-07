function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">
        <div className="skill-card" width="100px">
          <h3>HTML</h3>
          <p>Website structure and semantic elements</p>
        </div>

        <div className="skill-card"width="100px">
          <h3>CSS</h3>
          <p>Responsive layouts and website styling</p>
        </div>

        <div className="skill-card" width="100px">
          <h3>JavaScript</h3>
          <p>Functions, DOM manipulation and events</p>
        </div>

        <div className="skill-card" width="100px">
          <h3>Bootstrap</h3>
          <p>Responsive website design</p>
        </div>

        <div className="skill-card">
          <h3>React</h3>
          <p>Components and reusable UI development</p>
        </div>

        <div className="skill-card">
          <h3>MongoDB</h3>
          <p>Basic database knowledge</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;