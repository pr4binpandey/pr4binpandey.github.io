import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import cv from './ynubsec-cv.pdf';
import profile from '../medias/profile.png';

const roles = [
  "Developer",
  "Medical Learner",
];

function Hero() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);
  const [views, setViews] = useState('...');

  useEffect(() => {
    // Using abacus.jasoncameron.dev API as counterapi.dev is offline
    fetch('https://abacus.jasoncameron.dev/hit/pr4binpandey/portfolio')
      .then(res => res.json())
      .then(data => {
        console.log('View count response:', data);
        setViews(data.value);
      })
      .catch(err => {
        console.error('Error fetching view count:', err);
        setViews('999');
      });
  }, []);

  useEffect(() => {
    const tick = () => {
      const i = roleIndex % roles.length;
      const fullText = roles[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(1500);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setRoleIndex(prevIndex => prevIndex + 1);
        setDelta(200);
      } else {
        setDelta(prevDelta => (isDeleting ? 50 : 150));
      }
    };

    const ticker = setInterval(tick, delta);

    return () => clearInterval(ticker);
  }, [text, delta, roleIndex, isDeleting]);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-profile-wrapper">
            <div className="hero-img">
              <div className="view-count">
                <i className="fa-solid fa-eye"></i>
                <span>{views}</span>
              </div>
              <img src={profile} alt="pr4bin -  Developer & Medical Learner" />

            </div>

          </div>

          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">
              <span className="real-name">Prabin Pandey</span>
              <span className="hero-alias"> (@pr4bin)</span>
            </h1>

            <h2 className="role rotating-text">
              <span className="text">{text}</span>
            </h2>

            <p className="intro-text">
            <span style={{fontWeight:"bold"}}>Dev ×  Medical</span>
            <br />
             Energetic student passionate about medicine, technology, coding, continuous learning, reading, and gaming.
            </p>

            <div className="hero-buttons">
              <Link to="/projects" className="btn primary-btn">
                <i className="fa-solid fa-code"></i>
                View Projects
              </Link>

              <Link to="/contact" className="btn secondary-btn">
                <i className="fa-solid fa-envelope"></i>
                Get in Touch
              </Link>
            </div>
 
            <div className="hero-social">
              <a
                href="https://github.com/pr4binpandey"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://linkedin.com/in/pr4binpandey"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a
                href="https://pr4binpandey.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-newspaper"></i>
              </a>

            </div>

            {/* CV Download Button - Moved outside hero-social */}
            <a href={cv} download="pr4bin-cv.pdf" className="cv-link">
              <div className="cv-download">
                <i className="fa-solid fa-download"></i>
                <span>Download CV</span>
              </div>
            </a>
          </div>
        </div>
      </section >
    </>
    );
}

export default Hero;
