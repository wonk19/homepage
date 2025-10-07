import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const recentNews = [
    {
      id: 1,
      date: '2025-10-01',
      title: 'New Research Grant Awarded',
      description: 'Our lab has been awarded a major research grant for innovative water quality monitoring.'
    },
    {
      id: 2,
      date: '2025-09-15',
      title: 'Paper Published in Nature',
      description: 'Congratulations to our team for publishing groundbreaking research in Nature.'
    },
    {
      id: 3,
      date: '2025-08-20',
      title: 'Welcome New Members',
      description: 'We are excited to welcome 3 new graduate students to our lab this semester.'
    }
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Lab for Quantitative Remote Sensing</h1>
            <p className="hero-subtitle">정량적 원격탐사 연구실</p>
            <p className="hero-description">
              Advancing the frontiers of remote sensing science through innovative research, 
              cutting-edge technology, and collaborative partnerships.
            </p>
            <div className="hero-buttons">
              <Link to="/research" className="btn btn-primary">Our Research</Link>
              <Link to="/people" className="btn btn-secondary">Meet the Team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2>About Our Lab</h2>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">🔬</div>
              <h3>Research Excellence</h3>
              <p>
                We focus on quantitative remote sensing applications in environmental monitoring, 
                water quality assessment, and Earth observation.
              </p>
            </div>
            <div className="about-card">
              <div className="about-icon">🌍</div>
              <h3>Global Impact</h3>
              <p>
                Our research contributes to solving critical environmental challenges through 
                advanced satellite data analysis and modeling.
              </p>
            </div>
            <div className="about-card">
              <div className="about-icon">🎓</div>
              <h3>Education</h3>
              <p>
                We train the next generation of scientists in remote sensing technologies, 
                data science, and environmental engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="container">
          <div className="section-header">
            <h2>Latest News & Updates</h2>
            <Link to="/news" className="view-all-link">View All →</Link>
          </div>
          <div className="news-grid">
            {recentNews.map((news) => (
              <div key={news.id} className="news-card">
                <div className="news-date">{news.date}</div>
                <h3>{news.title}</h3>
                <p>{news.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Publications</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Active Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">20+</div>
              <div className="stat-label">Lab Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Collaborations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

