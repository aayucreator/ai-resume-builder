import { useState } from 'react'
import './SummaryForm.css'

export default function SummaryForm({ data, value, onChange }) {
  const [aiText, setAiText] = useState('')
  const [objective, setObjective] = useState('')
  const [error, setError] = useState('')

  const generateSummary = () => {
    const { fname, lname, jobtitle, city } = data.personal
    const skills = data.skills

    if (!fname && !jobtitle) {
      setError('Please enter Name and Job Title first.')
      return
    }

    setError('')

    const summary = `${fname || 'Candidate'} ${lname || ''} is a highly motivated ${
      jobtitle || 'professional'
    } with expertise in ${
      skills || 'technical skills'
    }. Based in ${
      city || 'India'
    }, they possess strong problem-solving abilities and a passion for developing innovative solutions. With a commitment to continuous learning and professional growth, they are eager to contribute effectively to challenging projects while delivering high-quality results and creating meaningful impact through technology.`

    setAiText(summary)
  }

  const generateObjective = () => {
    const { jobtitle } = data.personal

    const objectiveText = `Seeking a challenging ${
      jobtitle || 'professional'
    } position where I can utilize my technical skills, contribute to innovative projects, continuously learn emerging technologies, and grow professionally while adding value to the organization.`

    setObjective(objectiveText)
  }

  return (
    <div>
      <h2 className="section-heading">
        AI Summary Generator
      </h2>

      <p className="section-sub">
        Generate a professional summary automatically based on your profile.
      </p>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '15px'
        }}
      >
        <button
          className="ai-generate-btn"
          onClick={generateSummary}
        >
          ✨ Generate AI Summary
        </button>

        <button
          className="ai-generate-btn"
          onClick={generateObjective}
        >
          🎯 Generate Objective
        </button>
      </div>

      {error && (
        <div className="ai-error">
          {error}
        </div>
      )}

      {aiText && (
        <div className="ai-result-box">

          <p className="ai-result-label">
            Generated Summary
          </p>

          <p className="ai-result-text">
            {aiText}
          </p>

          <button
            className="use-btn"
            onClick={() => {
              onChange(aiText)
              setAiText('')
            }}
          >
            ✓ Use In Resume
          </button>

        </div>
      )}

      {objective && (
        <div className="ai-result-box">

          <p className="ai-result-label">
            Generated Career Objective
          </p>

          <p className="ai-result-text">
            {objective}
          </p>

          <button
            className="use-btn"
            onClick={() => {
              onChange(value + '\n\nCareer Objective:\n' + objective)
              setObjective('')
            }}
          >
            ✓ Add To Resume
          </button>

        </div>
      )}

      <div
        className="form-group"
        style={{ marginTop: '1.5rem' }}
      >

        <label>
          Summary / Objective
        </label>

        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Write or generate your professional summary..."
          rows={8}
        />

        <p
          style={{
            fontSize: 12,
            color: 'var(--text3)',
            marginTop: 6
          }}
        >
          {value.length} characters
        </p>

      </div>
    </div>
  )
}