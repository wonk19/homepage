import './People.css'

function People() {
  const professor = {
    name: 'Dr. Principal Investigator',
    title: 'Professor',
    department: 'School of Civil and Environmental Engineering',
    university: 'Pusan National University',
    email: 'pi@example.edu',
    interests: ['Remote Sensing', 'Water Quality', 'Environmental Monitoring'],
    bio: 'Leading expert in quantitative remote sensing with over 15 years of research experience in Earth observation and environmental applications.'
  }

  const postdocs = [
    {
      id: 1,
      name: 'Dr. Postdoc Name',
      email: 'postdoc@example.edu',
      research: 'Satellite data processing and algorithm development'
    }
  ]

  const phdStudents = [
    {
      id: 1,
      name: 'PhD Student 1',
      year: '3rd year',
      research: 'Ocean color remote sensing'
    },
    {
      id: 2,
      name: 'PhD Student 2',
      year: '2nd year',
      research: 'Water quality monitoring using satellite imagery'
    },
    {
      id: 3,
      name: 'PhD Student 3',
      year: '1st year',
      research: 'Machine learning for environmental data analysis'
    }
  ]

  const masterStudents = [
    {
      id: 1,
      name: 'Master Student 1',
      year: '2nd year',
      research: 'Coastal water monitoring'
    },
    {
      id: 2,
      name: 'Master Student 2',
      year: '1st year',
      research: 'Satellite image processing'
    },
    {
      id: 3,
      name: 'Master Student 3',
      year: '1st year',
      research: 'Remote sensing data validation'
    }
  ]

  const alumni = [
    {
      id: 1,
      name: 'Alumni 1',
      degree: 'Ph.D. 2024',
      current: 'Assistant Professor, University A'
    },
    {
      id: 2,
      name: 'Alumni 2',
      degree: 'Ph.D. 2023',
      current: 'Research Scientist, Research Institute B'
    },
    {
      id: 3,
      name: 'Alumni 3',
      degree: 'M.S. 2024',
      current: 'Ph.D. Student, University C'
    },
    {
      id: 4,
      name: 'Alumni 4',
      degree: 'M.S. 2023',
      current: 'Engineer, Company D'
    }
  ]

  return (
    <div className="people-page">
      <div className="page-header">
        <div className="container">
          <h1>People</h1>
          <p>Meet our talented team of researchers and students</p>
        </div>
      </div>

      <div className="page-section">
        <div className="container">
          {/* Professor Section */}
          <section className="professor-section">
            <h2>Principal Investigator</h2>
            <div className="professor-card">
              <div className="professor-avatar">
                <div className="avatar-placeholder">👤</div>
              </div>
              <div className="professor-info">
                <h3>{professor.name}</h3>
                <p className="professor-title">{professor.title}</p>
                <p className="professor-affiliation">{professor.department}</p>
                <p className="professor-affiliation">{professor.university}</p>
                <p className="professor-email">📧 {professor.email}</p>
                <div className="professor-bio">
                  <p>{professor.bio}</p>
                </div>
                <div className="professor-interests">
                  <strong>Research Interests:</strong>
                  <div className="interest-tags">
                    {professor.interests.map((interest, index) => (
                      <span key={index} className="tag">{interest}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Postdocs Section */}
          {postdocs.length > 0 && (
            <section className="members-section">
              <h2>Postdoctoral Researchers</h2>
              <div className="members-grid">
                {postdocs.map((member) => (
                  <div key={member.id} className="member-card">
                    <div className="member-avatar">👤</div>
                    <h3>{member.name}</h3>
                    <p className="member-email">{member.email}</p>
                    <p className="member-research">{member.research}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PhD Students Section */}
          <section className="members-section">
            <h2>Ph.D. Students</h2>
            <div className="members-grid">
              {phdStudents.map((student) => (
                <div key={student.id} className="member-card">
                  <div className="member-avatar">🎓</div>
                  <h3>{student.name}</h3>
                  <p className="member-year">{student.year}</p>
                  <p className="member-research">{student.research}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Master Students Section */}
          <section className="members-section">
            <h2>Master's Students</h2>
            <div className="members-grid">
              {masterStudents.map((student) => (
                <div key={student.id} className="member-card">
                  <div className="member-avatar">📚</div>
                  <h3>{student.name}</h3>
                  <p className="member-year">{student.year}</p>
                  <p className="member-research">{student.research}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Alumni Section */}
          <section className="members-section">
            <h2>Alumni</h2>
            <div className="alumni-list">
              {alumni.map((alum) => (
                <div key={alum.id} className="alumni-card">
                  <div className="alumni-name">{alum.name}</div>
                  <div className="alumni-degree">{alum.degree}</div>
                  <div className="alumni-current">{alum.current}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default People

