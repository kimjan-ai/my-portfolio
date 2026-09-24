import ProjectCard from "../components/ProjectCard";

import tcrImage from "../assets/tcr-system.jpg";
import lmsImage from "../assets/lms-system.jpg";


function Projects() {
  return (
    <section id="projects">

      <div className="section-container">

        {/* Section label */}
        <p className="section-label">MY PROJECTS</p>

        {/* Section title */}
        <h2>Projects & Systems</h2>

        {/* Short introduction */}
        <p className="projects-intro">
          Here are some of the systems and digital solutions
          I have worked on in system development and learning
          management.
        </p>


        {/* Project cards */}
        <div className="projects-grid">


          {/* =================================================
              TRAINING REGISTRY SYSTEM
          ================================================= */}

          <ProjectCard
            title="Training Registry System"

            description="A web-based system for managing training requests, participants, training records, and reports."

            image={tcrImage}

            technologies={[
              "React",
              "Django",
              "REST API",
              "MySQL"
            ]}

            github=""

            demo=""
          />


          {/* =================================================
              LEARNING MANAGEMENT SYSTEM
          ================================================= */}

          <ProjectCard
            title="Learning Management System"

            description="A Moodle-based learning platform used to manage courses, learners, training activities, and learning data."

            image={lmsImage}

            technologies={[
              "Moodle",
              "PHP",
              "MySQL",
              "Linux"
            ]}

            github=""

            demo=""
          />


        </div>

      </div>

    </section>
  );
}

export default Projects;
