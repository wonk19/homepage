import './News.css'

function News() {
  const newsItems = [
    {
      id: 1,
      date: '2025-10-01',
      category: 'Grant',
      title: 'Major Research Grant Awarded',
      description: 'Our lab has been awarded a 3-year research grant from the National Research Foundation for the project "Advanced AI-based Satellite Image Analysis for Environmental Monitoring".',
      image: '🎉'
    },
    {
      id: 2,
      date: '2025-09-15',
      category: 'Publication',
      title: 'Paper Published in Nature Communications',
      description: 'Congratulations to our team! Our research on global inland water quality assessment has been published in Nature Communications.',
      image: '📄'
    },
    {
      id: 3,
      date: '2025-09-10',
      category: 'Award',
      title: 'Best Paper Award at IGARSS 2025',
      description: 'PhD student received the Best Student Paper Award at IEEE IGARSS 2025 in Athens, Greece.',
      image: '🏆'
    },
    {
      id: 4,
      date: '2025-08-20',
      category: 'Lab News',
      title: 'Welcome New Members',
      description: 'We are excited to welcome 3 new graduate students and 1 postdoctoral researcher to our lab this semester!',
      image: '👋'
    },
    {
      id: 5,
      date: '2025-07-30',
      category: 'Event',
      title: 'Field Campaign in Yellow Sea',
      description: 'Successfully completed a two-week field campaign collecting in-situ water quality measurements in the Yellow Sea.',
      image: '🌊'
    },
    {
      id: 6,
      date: '2025-07-15',
      category: 'Seminar',
      title: 'International Guest Lecture',
      description: 'Dr. Jane Smith from NASA gave a guest lecture on "Recent Advances in Ocean Color Remote Sensing".',
      image: '🎤'
    },
    {
      id: 7,
      date: '2025-06-28',
      category: 'Collaboration',
      title: 'New Partnership with ESA',
      description: 'Signed a collaboration agreement with European Space Agency for satellite data validation research.',
      image: '🤝'
    },
    {
      id: 8,
      date: '2025-06-10',
      category: 'Workshop',
      title: 'Remote Sensing Workshop',
      description: 'Hosted a 2-day workshop on "Python for Satellite Data Processing" with 40 participants from various institutions.',
      image: '💻'
    },
    {
      id: 9,
      date: '2025-05-20',
      category: 'Graduation',
      title: 'Congratulations to Graduates',
      description: '2 PhD students and 4 Master students successfully defended their theses. Best wishes for their future careers!',
      image: '🎓'
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      date: '2025-11-15',
      title: 'Lab Seminar: Machine Learning for Remote Sensing',
      location: 'Lab Conference Room'
    },
    {
      id: 2,
      date: '2025-12-05',
      title: 'AGU Fall Meeting 2025',
      location: 'San Francisco, USA'
    },
    {
      id: 3,
      date: '2026-01-10',
      title: 'Winter Field Campaign',
      location: 'Korean Coastal Waters'
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'Grant': '#10b981',
      'Publication': '#3b82f6',
      'Award': '#f59e0b',
      'Lab News': '#8b5cf6',
      'Event': '#ec4899',
      'Seminar': '#06b6d4',
      'Collaboration': '#14b8a6',
      'Workshop': '#6366f1',
      'Graduation': '#ef4444'
    }
    return colors[category] || '#6b7280'
  }

  return (
    <div className="news-page">
      <div className="page-header">
        <div className="container">
          <h1>News & Events</h1>
          <p>Stay updated with our latest achievements and activities</p>
        </div>
      </div>

      <div className="page-section">
        <div className="container">
          <div className="news-layout">
            {/* Main News Feed */}
            <div className="news-main">
              <h2>Latest News</h2>
              <div className="news-feed">
                {newsItems.map((item) => (
                  <article key={item.id} className="news-item">
                    <div className="news-icon">{item.image}</div>
                    <div className="news-content">
                      <div className="news-meta">
                        <span className="news-date">📅 {item.date}</span>
                        <span 
                          className="news-category"
                          style={{ backgroundColor: getCategoryColor(item.category) }}
                        >
                          {item.category}
                        </span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="news-sidebar">
              <div className="sidebar-section">
                <h3>📅 Upcoming Events</h3>
                <div className="upcoming-events">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="event-item">
                      <div className="event-date">{event.date}</div>
                      <div className="event-title">{event.title}</div>
                      <div className="event-location">📍 {event.location}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-section">
                <h3>🔗 Quick Links</h3>
                <div className="quick-links">
                  <a href="/publications">Recent Publications</a>
                  <a href="/research">Research Projects</a>
                  <a href="/people">Lab Members</a>
                  <a href="/gallery">Photo Gallery</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News

