import { useState } from 'react'
import './Publications.css'

function Publications() {
  const [filter, setFilter] = useState('all')

  const publications = {
    journals: [
      {
        id: 1,
        year: 2024,
        authors: 'Author A., Author B., PI Name',
        title: 'Advanced algorithms for ocean color remote sensing in coastal waters',
        journal: 'Remote Sensing of Environment',
        volume: '290',
        pages: '113532',
        doi: '10.1016/j.rse.2024.113532'
      },
      {
        id: 2,
        year: 2024,
        authors: 'Author C., PI Name, Author D.',
        title: 'Machine learning approaches for water quality parameter retrieval from satellite imagery',
        journal: 'IEEE Transactions on Geoscience and Remote Sensing',
        volume: '62',
        pages: '1-15',
        doi: '10.1109/TGRS.2024.1234567'
      },
      {
        id: 3,
        year: 2023,
        authors: 'PI Name, Author E., Author F.',
        title: 'Global assessment of inland water quality using multi-sensor satellite data',
        journal: 'Nature Communications',
        volume: '14',
        pages: '5678',
        doi: '10.1038/s41467-023-12345-6'
      }
    ],
    conferences: [
      {
        id: 1,
        year: 2024,
        authors: 'Author G., PI Name',
        title: 'Deep learning-based algal bloom detection using Sentinel-3 OLCI',
        conference: 'IEEE International Geoscience and Remote Sensing Symposium (IGARSS)',
        location: 'Athens, Greece'
      },
      {
        id: 2,
        year: 2024,
        authors: 'Author H., Author I., PI Name',
        title: 'Validation of satellite-derived water quality products in Korean coastal waters',
        conference: 'Ocean Optics Conference',
        location: 'Barcelona, Spain'
      },
      {
        id: 3,
        year: 2023,
        authors: 'PI Name, Author J.',
        title: 'Integration of UAV and satellite data for coastal monitoring',
        conference: 'American Geophysical Union (AGU) Fall Meeting',
        location: 'San Francisco, USA'
      }
    ],
    books: [
      {
        id: 1,
        year: 2023,
        authors: 'PI Name',
        title: 'Remote Sensing for Water Quality Monitoring',
        type: 'Book Chapter',
        publisher: 'Springer Nature',
        pages: '125-156'
      }
    ]
  }

  const getFilteredPublications = () => {
    if (filter === 'all') {
      return {
        journals: publications.journals,
        conferences: publications.conferences,
        books: publications.books
      }
    }
    return {
      journals: filter === 'journals' ? publications.journals : [],
      conferences: filter === 'conferences' ? publications.conferences : [],
      books: filter === 'books' ? publications.books : []
    }
  }

  const filtered = getFilteredPublications()
  const totalCount = publications.journals.length + publications.conferences.length + publications.books.length

  return (
    <div className="publications-page">
      <div className="page-header">
        <div className="container">
          <h1>Publications</h1>
          <p>Our research contributions to the scientific community</p>
        </div>
      </div>

      <div className="page-section">
        <div className="container">
          {/* Statistics */}
          <div className="pub-stats">
            <div className="stat-item">
              <div className="stat-number">{totalCount}</div>
              <div className="stat-label">Total Publications</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{publications.journals.length}</div>
              <div className="stat-label">Journal Papers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{publications.conferences.length}</div>
              <div className="stat-label">Conference Papers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{publications.books.length}</div>
              <div className="stat-label">Book Chapters</div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${filter === 'journals' ? 'active' : ''}`}
              onClick={() => setFilter('journals')}
            >
              Journal Papers
            </button>
            <button 
              className={`filter-btn ${filter === 'conferences' ? 'active' : ''}`}
              onClick={() => setFilter('conferences')}
            >
              Conference Papers
            </button>
            <button 
              className={`filter-btn ${filter === 'books' ? 'active' : ''}`}
              onClick={() => setFilter('books')}
            >
              Books & Chapters
            </button>
          </div>

          {/* Journal Papers */}
          {filtered.journals.length > 0 && (
            <section className="pub-section">
              <h2>📄 Journal Papers</h2>
              {filtered.journals.map((pub) => (
                <div key={pub.id} className="pub-card">
                  <div className="pub-year">{pub.year}</div>
                  <div className="pub-content">
                    <p className="pub-authors">{pub.authors}</p>
                    <h3 className="pub-title">{pub.title}</h3>
                    <p className="pub-venue">
                      <em>{pub.journal}</em>, Vol. {pub.volume}, {pub.pages}
                    </p>
                    <p className="pub-doi">DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">{pub.doi}</a></p>
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Conference Papers */}
          {filtered.conferences.length > 0 && (
            <section className="pub-section">
              <h2>🎤 Conference Papers</h2>
              {filtered.conferences.map((pub) => (
                <div key={pub.id} className="pub-card">
                  <div className="pub-year">{pub.year}</div>
                  <div className="pub-content">
                    <p className="pub-authors">{pub.authors}</p>
                    <h3 className="pub-title">{pub.title}</h3>
                    <p className="pub-venue">
                      <em>{pub.conference}</em>, {pub.location}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Books */}
          {filtered.books.length > 0 && (
            <section className="pub-section">
              <h2>📚 Books & Book Chapters</h2>
              {filtered.books.map((pub) => (
                <div key={pub.id} className="pub-card">
                  <div className="pub-year">{pub.year}</div>
                  <div className="pub-content">
                    <p className="pub-authors">{pub.authors}</p>
                    <h3 className="pub-title">{pub.title}</h3>
                    <p className="pub-venue">
                      {pub.type}, <em>{pub.publisher}</em>, pp. {pub.pages}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default Publications

