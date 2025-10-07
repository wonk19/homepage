import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact</h1>
          <p>Get in touch with us</p>
        </div>
      </div>

      <div className="page-section">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Information */}
            <div className="contact-info">
              <section className="info-section">
                <h2>Lab for Quantitative Remote Sensing</h2>
                <p className="lab-subtitle">정량적 원격탐사 연구실</p>
                
                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">🏢</div>
                    <div className="info-content">
                      <h3>Address</h3>
                      <p>
                        School of Civil and Environmental Engineering<br />
                        Pusan National University<br />
                        2, Busandaehak-ro 63beon-gil, Geumjeong-gu<br />
                        Busan 46241, South Korea
                      </p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">📧</div>
                    <div className="info-content">
                      <h3>Email</h3>
                      <p>
                        <a href="mailto:lab@example.edu">lab@example.edu</a>
                      </p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">📞</div>
                    <div className="info-content">
                      <h3>Phone</h3>
                      <p>+82-51-510-XXXX</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">🔗</div>
                    <div className="info-content">
                      <h3>Connect</h3>
                      <div className="social-links">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">Google Scholar</a>
                        <a href="https://researchgate.net" target="_blank" rel="noopener noreferrer">ResearchGate</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Office Hours */}
              <section className="hours-section">
                <h3>📅 Office Hours</h3>
                <div className="hours-content">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                  <p><strong>Weekends:</strong> By appointment</p>
                  <p className="hours-note">
                    Please email in advance to schedule a meeting
                  </p>
                </div>
              </section>
            </div>

            {/* Map */}
            <div className="contact-map">
              <h3>Location</h3>
              <div className="map-container">
                <div className="map-placeholder">
                  <div className="map-icon">🗺️</div>
                  <p>Pusan National University</p>
                  <p className="map-coordinates">35.2332° N, 129.0822° E</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Pusan+National+University" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* Directions */}
              <div className="directions">
                <h4>How to get here</h4>
                <div className="direction-item">
                  <span className="direction-icon">🚇</span>
                  <div>
                    <strong>By Metro:</strong> Take Line 1 to Pusan National University Station (Exit 3)
                  </div>
                </div>
                <div className="direction-item">
                  <span className="direction-icon">🚌</span>
                  <div>
                    <strong>By Bus:</strong> Bus routes 10, 49, 77, 100, 121, 148
                  </div>
                </div>
                <div className="direction-item">
                  <span className="direction-icon">🚗</span>
                  <div>
                    <strong>By Car:</strong> Visitor parking available on campus
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Section */}
          <section className="inquiry-section">
            <h2>Interested in Joining Our Lab?</h2>
            <p>
              We welcome inquiries from prospective graduate students, postdoctoral researchers, 
              and visiting scholars who are interested in remote sensing and environmental monitoring. 
              Please send us an email with your CV and research interests.
            </p>
            <div className="inquiry-buttons">
              <a href="mailto:lab@example.edu?subject=Prospective%20Graduate%20Student" className="btn btn-primary">
                Prospective Students
              </a>
              <a href="mailto:lab@example.edu?subject=Collaboration%20Inquiry" className="btn btn-secondary">
                Collaboration Inquiries
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact

