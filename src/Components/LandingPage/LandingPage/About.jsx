function About() {
  return (
    <section id="about" className="py-5 bg-light">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary">
            About Dot&Key
          </h2>

          <p className="lead text-secondary">
            GlowCare helps you take care of your skin every day.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card h-100 shadow border-0 text-center p-4">
              <div className="card-body">
                <h3 className="text-success"> Natural Care</h3>
                <p className="text-secondary">
                  Gentle skincare for your daily routine.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow border-0 text-center p-4">
              <div className="card-body">
                <h3 className="text-warning"> Easy to Use</h3>
                <p className="text-secondary">
                  Simple products suitable for everyone.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow border-0 text-center p-4">
              <div className="card-body">
                <h3 className="text-danger"> Healthy Glow</h3>
                <p className="text-secondary">
                  Care for your skin and feel confident.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;