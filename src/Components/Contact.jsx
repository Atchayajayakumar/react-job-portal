function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            Feel free to contact me for internship opportunities,
            projects and web development.
          </p>
          <p>Email: atchayajayakumaratchaya@gmail.com</p>
          <p> Phone: +91 9344899489</p>
          <p> Salem, Tamil Nadu, India</p>
        </div>
        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
          ></textarea>

          <button type="button">
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;