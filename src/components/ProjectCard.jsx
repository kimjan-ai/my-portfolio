function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  demo
}) {
  return (
    <div className="project-card">

      {/* Project image */}
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      {/* Project information */}
      <div className="project-content">

        {/* Project title */}
        <h3>{title}</h3>

        {/* Project description */}
        <p>{description}</p>

        {/* Technology tags */}
        <div className="project-technologies">
          {technologies.map((technology, index) => (
            <span key={index} className="technology">
              {technology}
            </span>
          ))}
        </div>

        {/* Project links */}
        <div className="project-buttons">

          {/* GitHub button */}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn github-btn"
            >
              GitHub
            </a>
          )}

          {/* Live project button */}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn demo-btn"
            >
              View Project
            </a>
          )}

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;