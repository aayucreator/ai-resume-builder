export default function EducationForm({ items, onAdd, onUpdate, onRemove }) {
  return (
    <div>
      <h2 className="section-heading">Education</h2>
      <p className="section-sub">Apni highest qualification pehle likho.</p>

      {items.map((edu, i) => (
        <div key={edu.id} className="card-item">
          <div className="card-item-header">
            <span className="card-item-title">Education #{i + 1}</span>
            <button className="del-btn" onClick={() => onRemove(edu.id)}>✕</button>
          </div>

          <div className="form-group">
            <label>Degree / Course</label>
            <input
              value={edu.degree}
              onChange={e => onUpdate(edu.id, 'degree', e.target.value)}
              placeholder="B.Tech Computer Science"
            />
          </div>

          <div className="row2">
            <div className="form-group">
              <label>College / University</label>
              <input
                value={edu.school}
                onChange={e => onUpdate(edu.id, 'school', e.target.value)}
                placeholder="DTU, New Delhi"
              />
            </div>
            <div className="form-group">
              <label>Year / Duration</label>
              <input
                value={edu.year}
                onChange={e => onUpdate(edu.id, 'year', e.target.value)}
                placeholder="2020 – 2024"
              />
            </div>
          </div>

          <div className="form-group">
            <label>CGPA / Percentage (optional)</label>
            <input
              value={edu.grade || ''}
              onChange={e => onUpdate(edu.id, 'grade', e.target.value)}
              placeholder="8.5 CGPA / 85%"
            />
          </div>
        </div>
      ))}

      <button className="add-btn" onClick={onAdd}>
        + Add education
      </button>
    </div>
  )
}
