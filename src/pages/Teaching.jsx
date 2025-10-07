import './Teaching.css'

function Teaching() {
  const undergraduateCourses = [
    {
      id: 1,
      code: 'CE301',
      title: 'Introduction to Remote Sensing',
      semester: 'Spring',
      description: 'Fundamentals of remote sensing principles, sensors, and applications in environmental engineering.'
    },
    {
      id: 2,
      code: 'CE405',
      title: 'Geographic Information Systems',
      semester: 'Fall',
      description: 'GIS principles, spatial data analysis, and integration with remote sensing data.'
    }
  ]

  const graduateCourses = [
    {
      id: 1,
      code: 'CE601',
      title: 'Advanced Remote Sensing',
      semester: 'Spring',
      description: 'Advanced topics in remote sensing including radiative transfer, atmospheric correction, and algorithm development.'
    },
    {
      id: 2,
      code: 'CE602',
      title: 'Environmental Data Science',
      semester: 'Fall',
      description: 'Data science techniques for environmental applications, including machine learning and big data analysis.'
    },
    {
      id: 3,
      code: 'CE701',
      title: 'Water Quality Remote Sensing',
      semester: 'Spring (odd years)',
      description: 'Specialized course on remote sensing applications for water quality monitoring and assessment.'
    }
  ]

  const materials = [
    {
      id: 1,
      title: 'Remote Sensing Lecture Notes',
      type: 'PDF',
      description: 'Comprehensive lecture notes covering basic to advanced remote sensing concepts'
    },
    {
      id: 2,
      title: 'Python Programming for Remote Sensing',
      type: 'Jupyter Notebooks',
      description: 'Code examples and tutorials for satellite data processing using Python'
    },
    {
      id: 3,
      title: 'Research Methods in Environmental Science',
      type: 'Video Lectures',
      description: 'Video series on research methodology and scientific writing'
    }
  ]

  return (
    <div className="teaching-page">
      <div className="page-header">
        <div className="container">
          <h1>Teaching</h1>
          <p>Educating future scientists and engineers</p>
        </div>
      </div>

      <div className="page-section">
        <div className="container">
          {/* Teaching Philosophy */}
          <section className="philosophy-section">
            <h2>Teaching Philosophy</h2>
            <div className="philosophy-card">
              <p>
                Our teaching approach emphasizes hands-on learning, critical thinking, and real-world applications. 
                We strive to create an engaging learning environment where students can develop both theoretical 
                knowledge and practical skills in remote sensing and environmental science.
              </p>
              <p>
                We integrate cutting-edge research findings into our curriculum and encourage students to 
                participate in ongoing research projects, fostering a seamless connection between education and research.
              </p>
            </div>
          </section>

          {/* Undergraduate Courses */}
          <section className="courses-section">
            <h2>🎓 Undergraduate Courses</h2>
            <div className="courses-grid">
              {undergraduateCourses.map((course) => (
                <div key={course.id} className="course-card">
                  <div className="course-header">
                    <span className="course-code">{course.code}</span>
                    <span className="course-semester">{course.semester}</span>
                  </div>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Graduate Courses */}
          <section className="courses-section">
            <h2>🎓 Graduate Courses</h2>
            <div className="courses-grid">
              {graduateCourses.map((course) => (
                <div key={course.id} className="course-card">
                  <div className="course-header">
                    <span className="course-code">{course.code}</span>
                    <span className="course-semester">{course.semester}</span>
                  </div>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Lecture Materials */}
          <section className="materials-section">
            <h2>📚 Lecture Materials</h2>
            <div className="materials-list">
              {materials.map((material) => (
                <div key={material.id} className="material-card">
                  <div className="material-icon">
                    {material.type === 'PDF' && '📄'}
                    {material.type === 'Jupyter Notebooks' && '💻'}
                    {material.type === 'Video Lectures' && '🎥'}
                  </div>
                  <div className="material-content">
                    <h3>{material.title}</h3>
                    <span className="material-type">{material.type}</span>
                    <p>{material.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* For Prospective Students */}
          <section className="prospective-section">
            <h2>For Prospective Students</h2>
            <div className="prospective-card">
              <h3>🔍 We are always looking for motivated students!</h3>
              <p>
                If you are interested in remote sensing, environmental monitoring, or data science, 
                and would like to pursue graduate studies, please feel free to contact us.
              </p>
              <div className="requirements">
                <h4>What we look for:</h4>
                <ul>
                  <li>Strong background in engineering, physics, or related fields</li>
                  <li>Programming skills (Python, MATLAB, or similar)</li>
                  <li>Passion for environmental science and technology</li>
                  <li>Good communication skills in English</li>
                </ul>
              </div>
              <a href="/contact" className="btn btn-primary">Contact Us</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Teaching

