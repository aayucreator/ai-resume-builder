import './TemplateSelector.css'

const TEMPLATES = [
  {
    id: 'classic',
    name: 'Classic',
    desc: 'Clean, minimal, ATS-friendly',
    preview: { bg: '#ffffff', accent: '#1a1a1a', bar: '#e5e5e5' }
  },
  {
    id: 'dark',
    name: 'Dark Elite',
    desc: 'Modern dark theme, stand out',
    preview: { bg: '#0f172a', accent: '#7c6af7', bar: '#1e293b' }
  },
  {
    id: 'warm',
    name: 'Warm Professional',
    desc: 'Earthy tones, creative fields',
    preview: { bg: '#faf7f2', accent: '#92400e', bar: '#e7ddd0' }
  },
  {
    id: 'minimal',
    name: 'Ultra Minimal',
    desc: 'Just typography, no clutter',
    preview: { bg: '#f8f8f8', accent: '#555', bar: '#ddd' }
  }
]

export default function TemplateSelector({ value, onChange }) {
  return (
    <div>
      <h2 className="section-heading">Choose template</h2>
      <p className="section-sub">Apne field ke hisaab se template choose karo.</p>

      <div className="template-grid">
        {TEMPLATES.map(t => (
          <button
            key={t.id}
            className={`template-card ${value === t.id ? 'selected' : ''}`}
            onClick={() => onChange(t.id)}
          >
            <div
              className="template-thumb"
              style={{ background: t.preview.bg }}
            >
              <div style={{ height: 10, width: '55%', background: t.preview.accent, borderRadius: 2, marginBottom: 5 }} />
              <div style={{ height: 4, width: '75%', background: t.preview.bar, borderRadius: 2, marginBottom: 8 }} />
              <div style={{ height: 1, width: '100%', background: t.preview.bar, marginBottom: 6 }} />
              <div style={{ height: 3, width: '85%', background: t.preview.bar, borderRadius: 2, marginBottom: 4 }} />
              <div style={{ height: 3, width: '70%', background: t.preview.bar, borderRadius: 2, marginBottom: 4 }} />
              <div style={{ height: 3, width: '90%', background: t.preview.bar, borderRadius: 2 }} />
            </div>
            <div className="template-info">
              <span className="template-name">{t.name}</span>
              <span className="template-desc">{t.desc}</span>
            </div>
            {value === t.id && <span className="template-check">✓</span>}
          </button>
        ))}
      </div>
    </div>
  )
}
