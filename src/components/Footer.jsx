import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Research Lab</h3>
            <p>Advancing knowledge through innovative research and collaboration.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/people">People</a></li>
              <li><a href="/publications">Publications</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>School of Civil and Environmental Engineering</p>
            <p>Pusan National University</p>
            <p>Email: lab@example.edu</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Research Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

