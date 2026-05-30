const SKILL_SUGGESTIONS = [
  'JavaScript', 'React', 'Node.js', 'Python', 'Java', 'SQL',
  'TypeScript', 'Git', 'Docker', 'AWS', 'MongoDB', 'REST APIs',
  'HTML/CSS', 'Figma', 'Excel', 'Machine Learning', 'Linux'
]

export default function SkillsForm({ skills, languages, onSkillsChange, onLangsChange }) {
  const addSuggestion = (skill) => {
    const current = skills ? skills.split(',').map(s => s.trim()).filter(Boolean) : []
    if (!current.includes(skill)) {
      onSkillsChange([...current, skill].join(', '))
    }
  }

  return (
    <div>
      <h2 className="section-heading">Skills & Languages</h2>
      <p className="section-sub">Comma se alag karke likho. ATS keywords include karo.</p>

      <div className="form-group">
        <label>Technical & Soft Skills</label>
        <textarea
          value={skills}
          onChange={e => onSkillsChange(e.target.value)}
          placeholder="JavaScript, React, Node.js, Python, SQL, Git, Docker, Problem Solving, Team Leadership..."
          rows={4}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ fontSize: 12, color: 'var(--text3)', marginBottom: 8 }}>Quick add suggestions:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {SKILL_SUGGESTIONS.map(skill => (
            <button
              key={skill}
              onClick={() => addSuggestion(skill)}
              style={{
                padding: '5px 12px',
                fontSize: 12,
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                color: 'var(--text2)',
                cursor: 'pointer',
                transition: 'all 0.15s'
              }}
              onMouseEnter={e => {
                e.target.style.borderColor = 'var(--accent)'
                e.target.style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.target.style.borderColor = 'var(--border)'
                e.target.style.color = 'var(--text2)'
              }}
            >
              + {skill}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Languages known</label>
        <input
          value={languages}
          onChange={e => onLangsChange(e.target.value)}
          placeholder="Hindi (Native), English (Fluent), French (Basic)"
        />
      </div>
    </div>
  )
}
