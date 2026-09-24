function Contact() {
  return (
    <section id="contact">

      <div className="section-container">

        {/* Section heading */}
        <p className="section-label">
          GET IN TOUCH
        </p>

        <h2>
          LET'S WORK TOGETHER
        </h2>

        <p className="contact-intro">
          Have a project in mind? Looking to collaborate? Or just want
          to say hi? My inbox is always open — I'll get back to you
          as soon as possible.
        </p>


        <div className="contact-layout">

          {/* Contact Form */}
          <div className="contact-form">

            <div className="form-group">
              <label htmlFor="name">
                Your Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>


            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>


            <div className="form-group">
              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this about?"
              />
            </div>


            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>


            <button
              type="button"
              className="contact-submit"
            >
              Send Message →
            </button>

          </div>


          {/* Contact Information */}
          <div className="contact-details">

            {/* Availability */}
            <div className="contact-availability">

              <h3>
                Currently Available
              </h3>

              <p>
                Open to full-time roles, freelance projects,
                and collaborations. Response time is usually
                within 24 hours.
              </p>

            </div>


            {/* Email */}
            <div className="contact-detail">

              <h3>
                Email
              </h3>

              <a href="mailto:kjanclaveria@protonmail.com">
                kjanclaveria@protonmail.com
              </a>

            </div>


            {/* GitHub */}
            <div className="contact-detail">

              <h3>
                GitHub
              </h3>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile →
              </a>

            </div>


            {/* LinkedIn */}
            <div className="contact-detail">

              <h3>
                LinkedIn
              </h3>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile →
              </a>

            </div>


            {/* Location */}
            <div className="contact-detail">

              <h3>
                Based In
              </h3>

              <strong>
                Iloilo, Philippines 🇵🇭
              </strong>

            </div>


            {/* Timezone */}
            <div className="contact-detail">

              <h3>
                Timezone
              </h3>

              <strong>
                GMT+8 (PHT)
              </strong>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;

