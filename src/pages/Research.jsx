import './Research.css'

function Research() {
  const ongoingProjects = [
    {
      id: 1,
      title: 'Ocean Color Remote Sensing for Water Quality Monitoring',
      period: '2023-2026',
      funding: 'National Research Foundation',
      description: 'Development of advanced algorithms for monitoring coastal and inland water quality using satellite ocean color sensors.',
      keywords: ['Ocean Color', 'Water Quality', 'Algorithm Development']
    },
    {
      id: 2,
      title: 'AI-based Satellite Image Analysis for Environmental Monitoring',
      period: '2024-2027',
      funding: 'Ministry of Science and ICT',
      description: 'Application of deep learning techniques for automated analysis of satellite imagery for environmental applications.',
      keywords: ['Machine Learning', 'Satellite Imagery', 'Environmental Monitoring']
    },
    {
      id: 3,
      title: 'Global Inland Water Quality Assessment Using Multi-sensor Data',
      period: '2024-2026',
      funding: 'International Collaboration Grant',
      description: 'Comprehensive assessment of inland water quality across different regions using multiple satellite sensors.',
      keywords: ['Multi-sensor', 'Water Quality', 'Global Assessment']
    }
  ]

  const pastProjects = [
    {
      id: 1,
      title: 'Remote Sensing-based Algal Bloom Monitoring System',
      period: '2020-2023',
      outcomes: 'Developed operational monitoring system, 5 publications'
    },
    {
      id: 2,
      title: 'Validation of Satellite Water Quality Products',
      period: '2019-2022',
      outcomes: 'Established validation protocols, international collaboration'
    },
    {
      id: 3,
      title: 'Coastal Environmental Monitoring Using UAV and Satellite Data',
      period: '2018-2021',
      outcomes: 'Integrated monitoring framework, 3 publications'
    }
  ]

  const collaborations = [
    {
      id: 1,
      name: 'NASA Ocean Biology Processing Group',
      country: 'USA',
      type: 'International Research Collaboration'
    },
    {
      id: 2,
      name: 'European Space Agency (ESA)',
      country: 'Europe',
      type: 'Data Validation Partnership'
    },
    {
      id: 3,
      name: 'Korea Institute of Ocean Science & Technology',
      country: 'South Korea',
      type: 'Joint Research Program'
    },
    {
      id: 4,
      name: 'University of Tokyo',
      country: 'Japan',
      type: 'Academic Collaboration'
    }
  ]

  const researchAreas = [
    {
      icon: '🛰️',
      title: 'Remote Sensing',
      description: 'Satellite and airborne remote sensing for Earth observation'
    },
    {
      icon: '💧',
      title: 'Water Quality',
      description: 'Monitoring and assessment of water quality parameters'
    },
    {
      icon: '📊',
      title: 'Data Analysis',
      description: 'Advanced data processing and algorithm development'
    },
    {
      icon: '🤖',
      title: 'Machine Learning',
      description: 'AI-based approaches for environmental data analysis'
    }
  ]

  return (
    <div className="research-page">
      <div className="page-header">
        <div className="container">
          <h1>Research & Projects</h1>
          <p>Exploring the frontiers of remote sensing science</p>
        </div>
      </div>

      <div className="page-section">
        <div className="container">
          {/* Research Areas */}
          <section className="research-areas-section">
            <h2>Research Areas</h2>
            <div className="research-areas-grid">
              {researchAreas.map((area, index) => (
                <div key={index} className="research-area-card">
                  <div className="area-icon">{area.icon}</div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Ongoing Projects */}
          <section className="projects-section">
            <h2>Ongoing Projects</h2>
            {ongoingProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-status ongoing">Ongoing</span>
                </div>
                <div className="project-meta">
                  <span>📅 {project.period}</span>
                  <span>💰 {project.funding}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-keywords">
                  {project.keywords.map((keyword, index) => (
                    <span key={index} className="keyword-tag">{keyword}</span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Past Projects */}
          <section className="projects-section">
            <h2>Past Projects</h2>
            <div className="past-projects-grid">
              {pastProjects.map((project) => (
                <div key={project.id} className="past-project-card">
                  <h3>{project.title}</h3>
                  <p className="project-period">📅 {project.period}</p>
                  <p className="project-outcomes"><strong>Outcomes:</strong> {project.outcomes}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Collaborations */}
          <section className="collaborations-section">
            <h2>Collaborations</h2>
            <div className="collaborations-grid">
              {collaborations.map((collab) => (
                <div key={collab.id} className="collaboration-card">
                  <h3>{collab.name}</h3>
                  <p className="collab-country">🌍 {collab.country}</p>
                  <p className="collab-type">{collab.type}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Research

