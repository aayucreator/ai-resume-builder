import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import PersonalForm from './components/PersonalForm.jsx'
import SummaryForm from './components/SummaryForm.jsx'
import ExperienceForm from './components/ExperienceForm.jsx'
import EducationForm from './components/EducationForm.jsx'
import SkillsForm from './components/SkillsForm.jsx'
import TemplateSelector from './components/TemplateSelector.jsx'
import ResumePreview from './components/ResumePreview.jsx'
import './App.css'

const initialData = {
  personal: {
    fname: '', lname: '', jobtitle: '',
    email: '', phone: '', city: '', linkedin: ''
  },
  summary: '',
  experiences: [],
  educations: [],
  skills: '',
  languages: '',
  template: 'classic'
}

export default function App() {
  const [section, setSection] = useState('personal')
  const [data, setData] = useState(initialData)
  const [darkMode, setDarkMode] = useState(true)

  const updatePersonal = (field, value) =>
    setData(d => ({ ...d, personal: { ...d.personal, [field]: value } }))

  const updateField = (field, value) =>
    setData(d => ({ ...d, [field]: value }))

  const addExperience = () =>
    setData(d => ({
      ...d,
      experiences: [...d.experiences, {
        id: Date.now(), role: '', company: '',
        from: '', to: '', location: '', desc: ''
      }]
    }))

  const updateExperience = (id, field, value) =>
    setData(d => ({
      ...d,
      experiences: d.experiences.map(e =>
        e.id === id ? { ...e, [field]: value } : e
      )
    }))

  const removeExperience = (id) =>
    setData(d => ({ ...d, experiences: d.experiences.filter(e => e.id !== id) }))

  const addEducation = () =>
    setData(d => ({
      ...d,
      educations: [...d.educations, { id: Date.now(), degree: '', school: '', year: '' }]
    }))

  const updateEducation = (id, field, value) =>
    setData(d => ({
      ...d,
      educations: d.educations.map(e =>
        e.id === id ? { ...e, [field]: value } : e
      )
    }))

  const removeEducation = (id) =>
    setData(d => ({ ...d, educations: d.educations.filter(e => e.id !== id) }))

  const sections = [
    { key: 'personal', label: 'Personal', icon: '👤' },
    { key: 'summary', label: 'AI Summary', icon: '✨' },
    { key: 'experience', label: 'Experience', icon: '💼' },
    { key: 'education', label: 'Education', icon: '🎓' },
    { key: 'skills', label: 'Skills', icon: '🛠️' },
    { key: 'template', label: 'Template', icon: '🎨' },
  ]

  const renderSection = () => {
    switch (section) {
      case 'personal':
        return <PersonalForm data={data.personal} onChange={updatePersonal} />
      case 'summary':
        return <SummaryForm
          data={data}
          value={data.summary}
          onChange={v => updateField('summary', v)}
        />
      case 'experience':
        return <ExperienceForm
          items={data.experiences}
          onAdd={addExperience}
          onUpdate={updateExperience}
          onRemove={removeExperience}
        />
      case 'education':
        return <EducationForm
          items={data.educations}
          onAdd={addEducation}
          onUpdate={updateEducation}
          onRemove={removeEducation}
        />
      case 'skills':
        return <SkillsForm
          skills={data.skills}
          languages={data.languages}
          onSkillsChange={v => updateField('skills', v)}
          onLangsChange={v => updateField('languages', v)}
        />
      case 'template':
        return <TemplateSelector
          value={data.template}
          onChange={v => updateField('template', v)}
        />
      default:
        return null
    }
  }

  return (
    <div className="app-layout">
      <Sidebar
        sections={sections}
        active={section}
        onSelect={setSection}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(d => !d)}
      />
      <main className="form-area">
        {renderSection()}
        <div className="nav-buttons">
          {sections.findIndex(s => s.key === section) > 0 && (
            <button className="btn-outline" onClick={() => {
              const idx = sections.findIndex(s => s.key === section)
              setSection(sections[idx - 1].key)
            }}>← Back</button>
          )}
          {sections.findIndex(s => s.key === section) < sections.length - 1 && (
            <button className="btn-primary" onClick={() => {
              const idx = sections.findIndex(s => s.key === section)
              setSection(sections[idx + 1].key)
            }}>Next →</button>
          )}
        </div>
      </main>
      <ResumePreview data={data} />
    </div>
  )
}
