function About() {
  return (
    <section className="about-us" id="about">
      {/* BIO TEXT */}
      <header className="about-header">
        <h1>About Me</h1>
        <p>
          My name is Prabin Pandey, an 18-year-old student passionate about
          medicine, technology, and coding. I enjoy learning new things,
          exploring modern technologies, reading books, and playing games.
          Whether I'm studying, debugging code, or discovering something new,
          I'm always looking for ways to improve my skills and expand my
          knowledge.
        </p>
      </header>

      <div className="about-grid">
        {/* Education */}
        <div className="about-card">
          <div className="about-card-icon">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <h2>Education</h2>
          <p>
            Student focused on continuous learning with interests in
            medical science, information technology, and software
            development.
          </p>
        </div>

        {/* Skills */}
        <div className="about-card">
          <div className="about-card-icon">
            <i className="fa-solid fa-code"></i>
          </div>
          <h2>Skills</h2>
          <p>
            <strong>Turning coffee into code </strong><br />
            <strong>Professional bug finder & occasional bug fixer </strong><br />
            <strong>Fast learner with endless curiosity </strong>
          </p>
        </div>

        {/* Interests */}
        <div className="about-card">
          <div className="about-card-icon">
            <i className="fa-solid fa-heart"></i>
          </div>
          <h2>Interests</h2>
          <p>
            Coding and Programming <br />
            Medical Science <br />
            Reading Books <br />
            Gaming <br />
            Exploring New Technologies 
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;