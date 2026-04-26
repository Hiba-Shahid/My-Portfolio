# Hiba Shahid Portfolio (React + Vite)

Personal portfolio website built with React and Vite, featuring a section-based single-page layout and an AI chat assistant powered by Mistral.

## Overview

This project is a frontend-only portfolio application. It renders all portfolio content from local component data and includes:

- Sticky responsive navigation
- Hero, About, Skills, Projects, Experience, GitHub, and Contact sections
- Project category filtering
- Floating AI assistant with suggested prompts
- Resume download/view links

## Tech Stack

- React 18
- Vite 5
- Plain CSS (`src/index.css`) and inline component styles
- Mistral Chat Completions API (client-side request in `RAGAgent.jsx`)

## Project Structure

```text
src/
  components/
    Navbar.jsx        # Header + nav links + resume CTA
    Hero.jsx          # Intro section and hero image
    AboutSkills.jsx   # Tech strip, About, Skills
    Projects.jsx      # Filterable project cards
    Sections.jsx      # Experience, GitHub, Contact, Footer
    RAGAgent.jsx      # Floating AI assistant
  App.jsx             # Section composition
  index.jsx           # React entrypoint
  index.css           # Global styles and utility classes
public/
  index.html
```

## Getting Started

```bash
npm install
npm run dev
```

Vite will print the local development URL (typically `http://localhost:5173`).

### Build and Preview

```bash
npm run build
npm run preview
```

## Environment Variables

Create a `.env` file in the project root if you want the chat assistant enabled:

```env
VITE_MISTRAL_API_KEY=your_mistral_api_key_here
```

If this key is missing, the assistant shows a configuration message instead of calling the API.

## Content Customization

- Main page composition: `src/App.jsx`
- About/skills content: `src/components/AboutSkills.jsx`
- Projects data: `src/components/Projects.jsx`
- Experience/contact/github section content: `src/components/Sections.jsx`
- AI knowledge base and system prompt: `src/components/RAGAgent.jsx`
- Theme variables and shared styles: `src/index.css`

## Required Static Assets

The current components reference these files:

- `/hero.png` (used in `Hero.jsx`)
- `/Hiba_Shahid_Resume.pdf` (used in multiple CTAs)

Add these files to `public/` to avoid runtime fallbacks/broken links.

## Notes

- The AI assistant currently calls Mistral directly from the browser using `VITE_MISTRAL_API_KEY`.
- For production hardening, consider moving AI requests to a backend endpoint to avoid exposing API keys in client bundles.
