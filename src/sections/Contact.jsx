import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Close popup and return to Contact section
  const handlePopupClose = () => {
    setShowSuccess(false);
    setShowError(false);
    setErrorMessage("");

    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  
  // Update form fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit contact form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setShowSuccess(false);
    setShowError(false);
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to send your message."
        );
      }

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Show success popup
      setShowSuccess(true);
    } catch (error) {
      console.error("Contact form error:", error);

      setErrorMessage(
        error.message ||
          "Something went wrong. Please try again later."
      );

      setShowError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="section-container">

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

          </form>

          {/* Contact Details */}
          <div className="contact-details">

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

            <div className="contact-detail">
              <h3>
                Email
              </h3>

              <a href="mailto:kjanclaveria@protonmail.com">
                kjanclaveria@protonmail.com
              </a>
            </div>

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

            <div className="contact-detail">
              <h3>
                Based In
              </h3>

              <strong>
                Iloilo, Philippines 🇵🇭
              </strong>
            </div>

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

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-popup success">

            <div className="popup-icon success-icon">
              <svg
                viewBox="0 0 52 52"
                aria-hidden="true"
              >
                <circle
                  className="success-circle"
                  cx="26"
                  cy="26"
                  r="24"
                  fill="none"
                />

                <path
                  className="success-checkmark"
                  fill="none"
                  d="M14 27l7 7 17-17"
                />
              </svg>
            </div>

            <h3>
              Message sent successfully!
            </h3>

            <p>
              Thank you for reaching out.
            </p>

            <p className="success-subtext">
              I’ll review your message and get back to you
              within <strong>3–5 working days.</strong>
            </p>

            <button
              type="button"
              className="popup-ok-button"
              onClick={handlePopupClose}
            >
              OK
            </button>

          </div>
        </div>
      )}

      {/* ERROR POPUP */}
      {showError && (
        <div className="success-overlay">
          <div className="success-popup error">

            <div className="popup-icon error-icon">
              <svg
                viewBox="0 0 52 52"
                aria-hidden="true"
              >
                <circle
                  className="error-circle"
                  cx="26"
                  cy="26"
                  r="24"
                  fill="none"
                />

                <path
                  className="error-line error-line-one"
                  fill="none"
                  d="M16 16l20 20"
                />

                <path
                  className="error-line error-line-two"
                  fill="none"
                  d="M36 16L16 36"
                />
              </svg>
            </div>

            <h3>
              Message could not be sent
            </h3>

            <p className="error-subtext">
              {errorMessage ||
                "Something went wrong. Please try again later."}
            </p>

            <button
              type="button"
              className="popup-ok-button"
              onClick={handlePopupClose}
            >
              OK
            </button>

          </div>
        </div>
      )}

    </section>
  );
}

export default Contact;