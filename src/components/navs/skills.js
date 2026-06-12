import "./skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>
      <p>
        Below are the technologies, tools, and disciplines I work with. I
        focus on writing clean, maintainable, and scalable code while blending
        design, logic, security, and performance into complete digital
        experiences.
      </p>

      <div className="skills-list">
        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5"
            width="50"
            height="50"
          />
          <div className="skill-copy">
            <h3>HTML</h3>
            <p>
              Semantic HTML is the foundation of everything I build. I use it
              to create accessible, SEO-friendly, and well-organized pages.
            </p>
          </div>
        </div>

        <div className="skill-item">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
            width="50"
            height="50"
          />
          <div className="skill-copy">
            <h3>CSS</h3>
            <p>
              I use CSS to build responsive layouts, layered visuals, motion,
              and polished interactions with Flexbox, Grid, and animations.
            </p>
          </div>
        </div>

      
<div className="skill-item">
  <img
    src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
    alt="Medical Care"
    width="50"
    height="50"
  />
  <div className="skill-copy">
    <h3>Patient Care</h3>
    <p>
      Dedicated to providing compassionate, evidence-based patient care and
      supporting positive health outcomes.
    </p>
  </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
