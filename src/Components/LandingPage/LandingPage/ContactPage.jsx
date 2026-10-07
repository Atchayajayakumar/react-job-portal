function ContactPage (){
    return(
<section id="contact" className="contact">
  <h2>Contact Us </h2>

  <p>Have any questions? We'd love to hear from you!</p>

  <form>
    <input type="text" placeholder="Your Name" />
    <input type="email" placeholder="Your Email" />
   <input type="message"placeholder="Your Message"/>
    <button type="submit">Send Message</button>
  </form>
</section>

    );

}
export default ContactPage



