export default function ExperienceForm({ items, onAdd, onUpdate, onRemove }) {
  return (
    <div>
      <h2 className="section-heading">Work experience</h2>
      <p className="section-sub">Sabse recent job pehle likho.</p>

      {items.map((exp, i) => (
        <div key={exp.id} className="card-item">
          <div className="card-item-header">
            <span className="card-item-title">Experience #{i + 1}</span>
            <button className="del-btn" onClick={() => onRemove(exp.id)}>✕</button>
          </div>

          <div className="row2">
            <div className="form-group">
              <label>Job title</label>
              <input
                value={exp.role}
                onChange={e => onUpdate(exp.id, 'role', e.target.value)}
                placeholder="Software Engineer"
              />
            </div>
            <div className="form-group">
              <label>Company</label>
              <input
                value={exp.company}
                onChange={e => onUpdate(exp.id, 'company', e.target.value)}
                placeholder="Google India"
              />
            </div>
          </div>

          <div className="row2">
            <div className="form-group">
              <label>Start date</label>
              <input
                value={exp.from}
                onChange={e => onUpdate(exp.id, 'from', e.target.value)}
                placeholder="Jan 2022"
              />
            </div>
            <div className="form-group">
              <label>End date</label>
              <input
                value={exp.to}
                onChange={e => onUpdate(exp.id, 'to', e.target.value)}
                placeholder="Present"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              value={exp.location}
              onChange={e => onUpdate(exp.id, 'location', e.target.value)}
              placeholder="Bengaluru, India"
            />
          </div>

          <div className="form-group">
            <label>Description (bullet points mein likho)</label>
            <textarea
              value={exp.desc}
              onChange={e => onUpdate(exp.id, 'desc', e.target.value)}
              placeholder="• Led development of payment microservice handling 10k+ transactions/day&#10;• Reduced API response time by 40% using Redis caching&#10;• Mentored 3 junior developers"
              rows={5}
            />
          </div>
        </div>
      ))}

      <button className="add-btn" onClick={onAdd}>
        + Add experience
      </button>
    </div>
  )
}
