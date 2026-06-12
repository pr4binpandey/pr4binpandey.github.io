import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-simple">
      <div className="footer-simple-content">
        <div className="footer-rules">
          <Link to="/privacy" className="footer-link">Privacy</Link>
          <Link to="/terms" className="footer-link">Terms</Link>
        </div>
        <p className="footer-copyright">
          &copy; 2025 Prabin Pandey. All rights reserved. <br />
          === Designed and Developed by <a style={{color: "red"}} href="https://bishnuneupane13.com.np" target="_blank" rel="noopener noreferrer">Bishnu Neupane</a>.===
        </p>
      </div>
    </footer>
  );
}

export default Footer;
