import "./project.css";
import comingsoon from './coming-soon.png';

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <p>
        Welcome to my project portfolio. Here you will find a curated selection
        of work that reflects my focus on web development, clean UI, and
        cybersecurity-inspired problem solving.
      </p>

      <div className="projects-container">
       
        <div className="project-item">
          <img src={comingsoon} alt="Coming soon project" />
          <div className="project-copy">
            <h3>Coming Soon</h3>
            <p>
              I am working on more exciting projects. Stay tuned for updates.
            </p>
            <a
              className="btn project-link"
              href="https://pr4binpandey.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
            </a>
          </div>
        </div>

        <div className="project-item">
          <img src={comingsoon} alt="Coming soon project" />
          <div className="project-copy">
            <h3>Coming Soon</h3>
            <p>
              I am working on more exciting projects. Stay tuned for updates.
            </p>
            <a
              className="btn project-link"
              href="https://pr4binpandey.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
            </a>
          </div>
        </div>

        <div className="project-item">
          <img src={comingsoon} alt="Coming soon project" />
          <div className="project-copy">
            <h3>Coming Soon</h3>
            <p>
              I am working on more exciting projects. Stay tuned for updates.
            </p>
            <a
              className="btn project-link"
              href="https://pr4binpandey.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
            </a>
          </div>
        </div>
      </div>

      <div className="thank-you">Thank you for visiting my portfolio.</div>
    </section>
  );
}

export default Projects;
