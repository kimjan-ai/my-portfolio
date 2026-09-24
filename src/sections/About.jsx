import { useEffect, useRef, useState } from "react";
import Profile3D from "../components/Profile3D";

function About() {
  /* =========================================================
     TYPING ANIMATION
  ========================================================= */

  const typingWords = [
    "practical digital solutions",
    "creative designs",
    "engaging video content",
    "modern web systems",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typingWords[wordIndex];
    const typingSpeed = isDeleting ? 45 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(
          currentWord.substring(0, displayText.length + 1)
        );

        if (displayText === currentWord) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1400);
        }
      } else {
        setDisplayText(
          currentWord.substring(0, displayText.length - 1)
        );

        if (displayText === "") {
          setIsDeleting(false);

          setWordIndex(
            (prev) => (prev + 1) % typingWords.length
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  /* =========================================================
     STATS ANIMATION
  ========================================================= */

  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">

      <div className="about-container">

        {/* =====================================================
            HERO SECTION
        ===================================================== */}

        <div className="about-hero">

          {/* LEFT SIDE */}
          <div className="about-hero-content">

            <p className="section-label">
              ABOUT ME
            </p>

            <h2>
              IT <span>Professional</span>
            </h2>

            <h1>
              <span className="name-main">
                Kim John
              </span>

              <span className="name-last">
                Claveria
              </span>
            </h1>

            <p className="about-hero-description">
              Information Systems professional focused on
              system development, LMS administration, database
              management, Linux server management, system
              testing, and technical support.
            </p>

            <p className="about-hero-description">
              I build and maintain practical digital solutions
              that simplify organizational processes, improve
              data management, and support better user
              experiences.
            </p>


          </div>


          {/* RIGHT SIDE */}
          <div className="about-hero-profile">

            {/* PROFILE IMAGE */}
           <div className="about-hero-image">
            <Profile3D />
          </div>


            {/* ROLES */}
            <div className="about-role">
            <span>System Developer</span>
            <span>LMS Administrator</span>
            <span>Multimedia Specialist</span>
          </div>


            {/* TYPING EFFECT */}
            <p className="about-typing">
            <span className="typing-prefix">I build </span>
            <span className="typing-highlight">{displayText}</span>
            <span className="typing-cursor">|</span>
          </p>

            {/* BUTTONS */}
            <div className="about-hero-buttons">

              <a
                href="/projects"
                className="btn primary-btn"
              >
                View My Work
              </a>

              <a
                href="/Kim_John_Claveria_CV.pdf"
                className="btn secondary-btn"
                download
              >
                Download CV
              </a>

            </div>

          </div>

        </div>


        {/* =====================================================
            STATS
        ===================================================== */}

        <div
          className={`about-stats ${
            statsVisible ? "stats-visible" : ""
          }`}
          ref={statsRef}
        >

          <div className="about-stat">

            <strong>
              <span className="stat-number">
                {statsVisible ? "3+" : "0"}
              </span>
            </strong>

            <span>
              Years Professional Experience
            </span>

          </div>


          <div className="about-stat">

            <strong>
              <span className="stat-number">
                {statsVisible ? "2" : "0"}
              </span>
            </strong>

            <span>
              Major Systems
            </span>

          </div>


          <div className="about-stat">

            <strong>
              <span className="stat-number">
                {statsVisible ? "8+" : "0"}
              </span>
            </strong>

            <span>
              Technologies
            </span>

          </div>


          <div className="about-stat">

            <strong>
              <span className="stat-number">
                {statsVisible ? "1" : "0"}
              </span>
            </strong>

            <span>
              BS Information Systems Degree
            </span>

          </div>

        </div>


        {/* =====================================================
            PROFESSIONAL SUMMARY
        ===================================================== */}

        <div className="about-summary">

          <p className="section-label">
            PROFESSIONAL SUMMARY
          </p>

          <h2>
            Building practical systems and digital solutions
          </h2>

          <p>
            I have experience working across system
            development, learning management systems,
            databases, server administration, data
            management, and system testing.
          </p>

          <p>
            My current work involves developing and maintaining
            web-based systems, administering Moodle learning
            platforms, managing training data, supporting
            users, and testing digital solutions before
            deployment.
          </p>

        </div>


        {/* =====================================================
            MY JOURNEY
        ===================================================== */}

        <div className="about-journey">

          <p className="section-label">
            MY JOURNEY
          </p>

          <h2>
            Development Roadmap
          </h2>

          <p className="journey-intro">
            A timeline of my education, professional experience,
            and transition into system development.
          </p>


          {/* ===================================================
              TWO COLUMN JOURNEY
          =================================================== */}

          <div className="journey-layout">


            {/* =================================================
                LEFT — DEVELOPMENT ROADMAP
            ================================================= */}

            <div className="journey-roadmap">


              {/* CURRENT */}
              <div className="roadmap-item current">

                <div className="roadmap-marker"></div>

                <div className="roadmap-card">

                  <div className="roadmap-year">
                    CURRENT
                  </div>

                  <h3>
                    System Development
                  </h3>

                  <p className="roadmap-organization">
                    Web-Based Systems &amp; Digital Solutions
                  </p>

                  <p className="roadmap-description">
                    Developing practical web applications
                    using Python, Django, React, REST APIs,
                    SQL, and modern web technologies.
                  </p>

                  <div className="roadmap-tags">

                    <span>Python</span>
                    <span>Django</span>
                    <span>React</span>
                    <span>REST API</span>

                  </div>

                </div>

              </div>


              {/* LMS ADMINISTRATOR */}
              <div className="roadmap-item">

                <div className="roadmap-marker"></div>

                <div className="roadmap-card">

                  <div className="roadmap-year">
                    2024–Present
                  </div>

                  <h3>
                    LMS Administrator &amp;
                    Multimedia Specialist
                  </h3>

                  <p className="roadmap-organization">
                    Lifebank Sustainable Initiatives Inc.
                  </p>

                  <p className="roadmap-description">
                    Manage Moodle learning platforms,
                    courses, learners, training data,
                    testing, reporting, Linux servers,
                    and LMS-related digital content.
                  </p>

                  <div className="roadmap-tags">

                    <span>Moodle</span>
                    <span>Linux</span>
                    <span>Training Systems</span>
                    <span>Plug-in Management</span>

                  </div>

                </div>

              </div>


              {/* HRIS */}
              <div className="roadmap-item">

                <div className="roadmap-marker"></div>

                <div className="roadmap-card">

                  <div className="roadmap-year">
                    2022–2023
                  </div>

                  <h3>
                    HRIS Assistant
                  </h3>

                  <p className="roadmap-organization">
                    LifeBank Foundation Inc.
                  </p>

                  <p className="roadmap-description">
                    Worked with HRIS data validation,
                    personnel records, organizational
                    setup, reporting, Biometric registration, and data management.
                  </p>

                  <div className="roadmap-tags">

                    <span>HRIS</span>
                    <span>Data Management</span>
                    <span>Reporting</span>

                  </div>

                </div>

              </div>


              {/* EDUCATION */}
              <div className="roadmap-item education-roadmap-item">

                <div className="roadmap-marker"></div>

                <div className="roadmap-card">

                  <div className="roadmap-year">
                    2018–2022
                  </div>

                  <h3>
                    BS Information Systems
                  </h3>

                  <p className="roadmap-organization">
                    Iloilo Science and Technology University
                  </p>

                  <p className="roadmap-description">
                    Built a foundation in information systems,
                    programming, databases, and technology.
                  </p>

                  <div className="roadmap-tags">

                    <span>Information Systems</span>
                    <span>Programming</span>
                    <span>Databases</span>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT — LANGUAGES & TOOLS
            ================================================= */}

            <div className="journey-tools-panel">

              <p className="about-tech-title">
                LANGUAGES &amp; TOOLS
              </p>

              <div className="about-tech-list">

                <span>Python</span>
                <span>Django</span>
                <span>React</span>
                <span>JavaScript</span>
                <span>MySQL</span>

                <span>Moodle</span>
                <span>Linux</span>
                <span>Git</span>
                <span>Premier Pro</span>
                <span>Canva Design</span>
                

                <span className="tool-placeholder">
                  
                </span>

                <span className="tool-placeholder">
                  
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;