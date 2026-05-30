import './Sidebar.css'

export default function Sidebar({ sections, active, onSelect, darkMode, onToggleDark }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">⚡</span>
        <span className="logo-text">ResumeAI</span>
      </div>

      <nav className="sidebar-nav">
        {sections.map((s, i) => (
          <button
            key={s.key}
            className={`nav-item ${active === s.key ? 'active' : ''}`}
            onClick={() => onSelect(s.key)}
          >
            <span className="nav-icon">{s.icon}</span>
            <span className="nav-label">{s.label}</span>
            {active === s.key && <span className="nav-indicator" />}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="dark-toggle" onClick={onToggleDark} title="Toggle theme">
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </aside>
  )
}
