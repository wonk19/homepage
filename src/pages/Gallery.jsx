import { useState } from 'react'
import './Gallery.css'

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const photos = [
    {
      id: 1,
      category: 'fieldwork',
      title: 'Field Campaign in Yellow Sea',
      description: 'Collecting water samples for validation',
      date: '2025-07'
    },
    {
      id: 2,
      category: 'fieldwork',
      title: 'In-situ Measurements',
      description: 'Measuring water reflectance with spectroradiometer',
      date: '2025-07'
    },
    {
      id: 3,
      category: 'fieldwork',
      title: 'Research Vessel',
      description: 'Onboard measurements in coastal waters',
      date: '2025-06'
    },
    {
      id: 4,
      category: 'lab',
      title: 'Lab Meeting',
      description: 'Weekly research discussion',
      date: '2025-09'
    },
    {
      id: 5,
      category: 'lab',
      title: 'Data Processing',
      description: 'Working with satellite imagery',
      date: '2025-08'
    },
    {
      id: 6,
      category: 'lab',
      title: 'Equipment Calibration',
      description: 'Calibrating field instruments',
      date: '2025-08'
    },
    {
      id: 7,
      category: 'events',
      title: 'Conference Presentation',
      description: 'IGARSS 2025 in Athens',
      date: '2025-09'
    },
    {
      id: 8,
      category: 'events',
      title: 'Workshop',
      description: 'Python for Remote Sensing workshop',
      date: '2025-06'
    },
    {
      id: 9,
      category: 'events',
      title: 'Lab Retreat',
      description: 'Annual lab retreat and team building',
      date: '2025-05'
    },
    {
      id: 10,
      category: 'events',
      title: 'Graduation Ceremony',
      description: 'Congratulations to our graduates!',
      date: '2025-05'
    },
    {
      id: 11,
      category: 'outreach',
      title: 'Public Lecture',
      description: 'Science communication event for high school students',
      date: '2025-08'
    },
    {
      id: 12,
      category: 'outreach',
      title: 'Media Interview',
      description: 'TV interview about our research',
      date: '2025-07'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Photos', icon: '🖼️' },
    { id: 'fieldwork', label: 'Fieldwork', icon: '🌊' },
    { id: 'lab', label: 'Lab Activities', icon: '🔬' },
    { id: 'events', label: 'Events', icon: '🎉' },
    { id: 'outreach', label: 'Outreach', icon: '🎤' }
  ]

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory)

  return (
    <div className="gallery-page">
      <div className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Visual stories from our lab and field activities</p>
        </div>
      </div>

      <div className="page-section">
        <div className="container">
          {/* Category Filter */}
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="filter-icon">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photo Count */}
          <div className="photo-count">
            Showing {filteredPhotos.length} {filteredPhotos.length === 1 ? 'photo' : 'photos'}
          </div>

          {/* Photo Grid */}
          <div className="photo-grid">
            {filteredPhotos.map((photo) => (
              <div key={photo.id} className="photo-card">
                <div className="photo-placeholder">
                  <span className="photo-icon">📷</span>
                </div>
                <div className="photo-info">
                  <h3>{photo.title}</h3>
                  <p className="photo-description">{photo.description}</p>
                  <p className="photo-date">{photo.date}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="no-photos">
              <p>No photos found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Gallery

