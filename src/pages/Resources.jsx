import './Resources.css'

function Resources() {
  const datasets = [
    {
      id: 1,
      title: 'Korean Coastal Water Quality Dataset',
      description: 'In-situ water quality measurements collected from Korean coastal waters (2018-2024)',
      size: '~50,000 samples',
      format: 'CSV, NetCDF',
      access: 'Available upon request'
    },
    {
      id: 2,
      title: 'Satellite-derived Water Quality Products',
      description: 'Processed satellite imagery products for chlorophyll-a, turbidity, and other parameters',
      size: '~10 TB',
      format: 'GeoTIFF, NetCDF',
      access: 'Public (via data portal)'
    },
    {
      id: 3,
      title: 'Validation Database',
      description: 'Matchup database for satellite and in-situ measurements',
      size: '~5,000 matchups',
      format: 'CSV, JSON',
      access: 'Available upon request'
    }
  ]

  const software = [
    {
      id: 1,
      name: 'WaterQualityRS',
      description: 'Python package for water quality parameter retrieval from satellite imagery',
      language: 'Python',
      link: 'https://github.com/lab/waterqualityrs'
    },
    {
      id: 2,
      name: 'SatDataProcessor',
      description: 'Batch processing tool for satellite remote sensing data',
      language: 'Python',
      link: 'https://github.com/lab/satdataprocessor'
    },
    {
      id: 3,
      name: 'RemoteSensingToolkit',
      description: 'Collection of utilities for remote sensing data analysis',
      language: 'MATLAB/Python',
      link: 'https://github.com/lab/rstoolkit'
    }
  ]

  const instruments = [
    {
      id: 1,
      name: 'Hyperspectral Radiometer',
      model: 'ASD FieldSpec 4',
      description: 'Portable spectroradiometer for measuring water reflectance (350-2500 nm)'
    },
    {
      id: 2,
      name: 'Water Quality Sensors',
      model: 'YSI EXO2',
      description: 'Multi-parameter sonde for in-situ water quality measurements'
    },
    {
      id: 3,
      name: 'UAV System',
      model: 'DJI Matrice 300 RTK',
      description: 'Drone with multispectral camera for aerial surveys'
    },
    {
      id: 4,
      name: 'Computing Cluster',
      model: 'GPU Workstations',
      description: 'High-performance computing infrastructure for data processing and machine learning'
    }
  ]

  return (
    <div className="resources-page">
      <div className="page-header">
        <div className="container">
          <h1>Resources</h1>
          <p>Data, software, and facilities available to the research community</p>
        </div>
      </div>

      <div className="page-section">
        <div className="container">
          {/* Datasets Section */}
          <section className="resources-section">
            <h2>📊 Datasets</h2>
            <p className="section-intro">
              We are committed to open science and share our datasets with the research community.
            </p>
            <div className="resources-grid">
              {datasets.map((dataset) => (
                <div key={dataset.id} className="resource-card">
                  <h3>{dataset.title}</h3>
                  <p className="resource-description">{dataset.description}</p>
                  <div className="resource-details">
                    <div className="detail-item">
                      <span className="detail-label">Size:</span>
                      <span className="detail-value">{dataset.size}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Format:</span>
                      <span className="detail-value">{dataset.format}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Access:</span>
                      <span className="detail-value access-info">{dataset.access}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Software Section */}
          <section className="resources-section">
            <h2>💻 Software & Code</h2>
            <p className="section-intro">
              Open-source tools and software packages developed by our lab.
            </p>
            <div className="software-list">
              {software.map((sw) => (
                <div key={sw.id} className="software-card">
                  <div className="software-header">
                    <h3>{sw.name}</h3>
                    <span className="language-tag">{sw.language}</span>
                  </div>
                  <p>{sw.description}</p>
                  <a href={sw.link} target="_blank" rel="noopener noreferrer" className="github-link">
                    <span className="github-icon">⚙️</span>
                    View on GitHub →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Instruments Section */}
          <section className="resources-section">
            <h2>🔬 Instruments & Facilities</h2>
            <p className="section-intro">
              State-of-the-art equipment and computing infrastructure for cutting-edge research.
            </p>
            <div className="instruments-grid">
              {instruments.map((instrument) => (
                <div key={instrument.id} className="instrument-card">
                  <div className="instrument-icon">🔧</div>
                  <h3>{instrument.name}</h3>
                  <p className="instrument-model">{instrument.model}</p>
                  <p className="instrument-description">{instrument.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Data Request Section */}
          <section className="request-section">
            <div className="request-card">
              <h2>Request Data or Collaboration</h2>
              <p>
                If you are interested in using our datasets, software, or facilities, or would like to 
                collaborate with us, please feel free to contact us. We welcome collaborations with 
                researchers from around the world.
              </p>
              <a href="/contact" className="btn btn-primary">Contact Us</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Resources

