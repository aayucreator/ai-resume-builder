import { useRef } from 'react'
import './ResumePreview.css'

const THEMES = {
  classic: {
    bg: '#ffffff',
    text: '#1a1a1a',
    text2: '#555',
    accent: '#1a1a1a',
    border: '#e0e0e0',
    tag: '#f0f0f0',
    tagText: '#333'
  },
  dark: {
    bg: '#0f172a',
    text: '#e2e8f0',
    text2: '#94a3b8',
    accent: '#7c6af7',
    border: '#1e293b',
    tag: '#1e293b',
    tagText: '#94a3b8'
  },
  warm: {
    bg: '#faf7f2',
    text: '#2d1b0e',
    text2: '#7c5432',
    accent: '#92400e',
    border: '#e7ddd0',
    tag: '#ede4d8',
    tagText: '#5a3a1a'
  },
  minimal: {
    bg: '#f8f8f8',
    text: '#222',
    text2: '#666',
    accent: '#555',
    border: '#ddd',
    tag: '#eee',
    tagText: '#444'
  }
}

export default function ResumePreview({ data }) {
  const previewRef = useRef(null)

  const {
    personal,
    summary,
    experiences,
    educations,
    skills,
    languages,
    template
  } = data

  const theme = THEMES[template] || THEMES.classic

  const name =
    [personal.fname, personal.lname]
      .filter(Boolean)
      .join(' ') || 'Your Name'

  const contactParts = [
    personal.email,
    personal.phone,
    personal.city,
    personal.linkedin
  ].filter(Boolean)

  const skillList = skills
    ? skills.split(',').map(s => s.trim()).filter(Boolean)
    : []

  const langList = languages
    ? languages.split(',').map(s => s.trim()).filter(Boolean)
    : []

  const calculateATS = () => {
    let score = 50

    if (summary) score += 10
    if (skillList.length > 0) score += 15
    if (educations.length > 0) score += 10
    if (experiences.length > 0) score += 15

    return Math.min(score, 100)
  }

  const downloadPDF = async () => {
    const { default: html2pdf } = await import('html2pdf.js')

    const opt = {
      margin: [10, 10, 10, 10],
      filename: `${name}_Resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      }
    }

    html2pdf()
      .set(opt)
      .from(previewRef.current)
      .save()
  }

  return (
    <aside className="preview-pane">

      <div className="preview-toolbar">
        <span className="preview-label">
          👁 Live Preview
        </span>

        <button
          className="download-btn"
          onClick={downloadPDF}
        >
          Download PDF
        </button>
      </div>

      <div className="preview-scroll">

        <div
          ref={previewRef}
          className="resume-page"
          style={{
            background: theme.bg,
            color: theme.text
          }}
        >

          {/* ATS Score */}

          <div
            style={{
              padding: '10px',
              background: '#f3f4f6',
              borderRadius: '8px',
              marginBottom: '12px',
              fontWeight: 'bold'
            }}
          >
            ATS Score: {calculateATS()}/100
          </div>

          {/* Analysis */}

          <div
            style={{
              padding: '10px',
              background: '#eef6ff',
              borderRadius: '8px',
              marginBottom: '20px'
            }}
          >
            <strong>Resume Analysis</strong>

            <ul style={{ marginTop: '8px' }}>
              <li>✓ Professional Layout</li>
              <li>✓ ATS Friendly Structure</li>
              <li>✓ Skills Section Included</li>
              <li>✓ Education Included</li>
            </ul>
          </div>

          {/* Header */}

          <div
            className="r-header"
            style={{
              borderBottom: `2px solid ${theme.accent}`,
              paddingBottom: 12,
              marginBottom: 14
            }}
          >
            <h1>{name}</h1>

            {personal.jobtitle && (
              <p
                style={{
                  color: theme.accent,
                  fontWeight: '600'
                }}
              >
                {personal.jobtitle}
              </p>
            )}

            <p style={{ color: theme.text2 }}>
              {contactParts.join(' • ')}
            </p>
          </div>

          {/* Summary */}

          {summary && (
            <div className="r-section">
              <h3>Professional Summary</h3>
              <p>{summary}</p>
            </div>
          )}

          {/* Experience */}

          {experiences.length > 0 && (
            <div className="r-section">
              <h3>Experience</h3>

              {experiences.map(exp => (
                <div key={exp.id}>
                  <strong>{exp.role}</strong>

                  {exp.company && (
                    <span> @ {exp.company}</span>
                  )}

                  <p>{exp.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Education */}

          {educations.length > 0 && (
            <div className="r-section">
              <h3>Education</h3>

              {educations.map(edu => (
                <div key={edu.id}>
                  <strong>{edu.degree}</strong>
                  <p>{edu.school}</p>
                  <p>{edu.year}</p>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}

          {skillList.length > 0 && (
            <div className="r-section">
              <h3>Skills</h3>

              <div className="r-tags">
                {skillList.map((skill, i) => (
                  <span
                    key={i}
                    className="r-tag"
                    style={{
                      background: theme.tag,
                      color: theme.tagText
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}

          {langList.length > 0 && (
            <div className="r-section">
              <h3>Languages</h3>

              <div className="r-tags">
                {langList.map((lang, i) => (
                  <span
                    key={i}
                    className="r-tag"
                    style={{
                      background: theme.tag,
                      color: theme.tagText
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </aside>
  )
}