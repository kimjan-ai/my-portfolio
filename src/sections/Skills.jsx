function Skills() {
  return (
    <section id="skills">
      <div className="section-container">

        <p className="section-label">MY SKILLS</p>

        <h2>Technical Skills</h2>

        <p className="skills-intro">
          My technical skills cover software development, database
          management, system infrastructure, and learning management
          technologies.
        </p>

        <div className="skills-grid">

          <div className="skill-card development">
            <h3>Development</h3>
            <ul>
              <li>Python</li>
              <li>Django</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML / CSS</li>
            </ul>
          </div>

          <div className="skill-card database">
            <h3>Database</h3>
            <ul>
              <li>MySQL</li>
              <li>MariaDB</li>
              <li>SQL</li>
              <li>Database Management</li>
            </ul>
          </div>

          <div className="skill-card systems">
            <h3>Systems & Infrastructure</h3>
            <ul>
              <li>Linux / Ubuntu</li>
              <li>Nginx</li>
              <li>Gunicorn</li>
              <li>Git / GitHub</li>
              <li>Server Management</li>
            </ul>
          </div>

          <div className="skill-card lms">
            <h3>LMS & Training Technology</h3>
            <ul>
              <li>Moodle Administration</li>
              <li>LMS Testing</li>
              <li>LMS Reporting</li>
              <li>Course Management</li>
              <li>Learning Data Management</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;

