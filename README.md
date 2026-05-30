# ⚡ AI Resume Builder

React + Claude AI se bana ek professional resume builder.

## Features
- 📝 Multi-section form (Personal, Summary, Experience, Education, Skills)
- ✨ AI-powered summary generation using Claude API
- 👁️ Real-time live preview
- 🎨 4 templates (Classic, Dark Elite, Warm, Ultra Minimal)
- 📄 PDF download with html2pdf.js
- 🔤 Quick-add skill suggestions

## Setup (5 minutes)

### 1. Install dependencies
```bash
npm install
```

### 2. API Key add karo
`src/components/SummaryForm.jsx` file kholo aur yeh line dhundho:
```js
const ANTHROPIC_API_KEY = 'YOUR_API_KEY_HERE'
```
Apna Anthropic API key paste karo.

API key yahan milega: https://console.anthropic.com/

### 3. Run karo
```bash
npm run dev
```
Browser mein khulega: http://localhost:3000

### 4. Build (production ke liye)
```bash
npm run build
```

## Project Structure
```
src/
├── components/
│   ├── Sidebar.jsx         # Left navigation
│   ├── PersonalForm.jsx    # Personal details form
│   ├── SummaryForm.jsx     # AI summary generator
│   ├── ExperienceForm.jsx  # Work experience form
│   ├── EducationForm.jsx   # Education form
│   ├── SkillsForm.jsx      # Skills + quick-add
│   ├── TemplateSelector.jsx # Template chooser
│   └── ResumePreview.jsx   # Live preview + PDF download
├── App.jsx                 # Main app + state management
├── App.css                 # Shared styles
└── index.css               # Global CSS variables
```

## Tech Stack
- React 18 + Vite
- Claude API (claude-sonnet-4-20250514)
- html2pdf.js for PDF generation
- Pure CSS (no UI library needed)

## ⚠️ Note
Production mein API key `.env` file mein rakho:
```
VITE_ANTHROPIC_API_KEY=sk-ant-...
```
Aur `SummaryForm.jsx` mein:
```js
const ANTHROPIC_API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY
```
