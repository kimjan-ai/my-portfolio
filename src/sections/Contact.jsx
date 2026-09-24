import { useState } from "react";

function Contact() {
  // Store the form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Store sending/status messages
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  // Update form fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Send the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("Message sent successfully!");

      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus(
        "Something went wrong. Please try again later."
      );
    } finally {
      setSending(false);
    }
  };

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
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label htmlFor="name">
                Your Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
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
                value={formData.email}
                onChange={handleChange}
                required
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
                value={formData.subject}
                onChange={handleChange}
                required
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
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message →"}
            </button>

            {/* Success / error message */}
            {status && (
              <p className="contact-status">
                {status}
              </p>
            )}

          </form>

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