import React from 'react';

const techs = ['React.js','Django','Next.js','Python','TailwindCSS','PostgreSQL','Flutter','TensorFlow','YOLO','Scikit-learn','n8n','TypeScript','PyTorch','Node.js','REST APIs'];
const highlighted = ['React.js','Django','Python','PostgreSQL','YOLO','TypeScript','REST APIs'];

export function TechStrip() {
  const doubled = [...techs, ...techs];
  
  return (
    <div style={{
      background: 'var(--bg2)', borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)', padding: '0.8rem 0', overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex', gap: '1.5rem', alignItems: 'center',
        animation: 'scrollLeft 28s linear infinite', whiteSpace: 'nowrap',
        width: 'max-content'
      }}>
        {doubled.map((t, i) => (
          <span key={i} style={{
            fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase',
            fontWeight: 500, padding: '0.25rem 0.8rem',
            border: '1px solid var(--border)', borderRadius: 6,
            background: 'var(--bg3)',
            color: highlighted.includes(t) ? 'var(--accent3)' : 'var(--muted2)',
            borderColor: highlighted.includes(t) ? 'rgba(167,139,250,0.25)' : 'var(--border)',
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

const aboutCards = [
  { icon: '🎓', bg: 'rgba(124,58,237,0.15)', title: 'B.S. Artificial Intelligence', sub: 'Khwaja Fareed University · GPA 3.5/4.0 · 7th Semester' },
  { icon: '💼', bg: 'rgba(45,212,191,0.12)', title: 'Currently at TechWorks, Lahore', sub: 'AI Automation Engineer & App Developer · Sep 2025–Present' },
  { icon: '🌍', bg: 'rgba(251,191,36,0.12)', title: 'Remote · EST Available', sub: '6 PM – 3 AM PKT · Immediate joiner' },
  { icon: '🤖', bg: 'rgba(124,58,237,0.15)', title: 'AI Specialization', sub: 'Computer Vision · NLP · ML Pipelines · Automation' },
];

export function About() {
  const isMobile = window.innerWidth <= 768;
  
  return (
    <section id="about" style={{ padding: '6rem 4rem', maxWidth: 1200, margin: '0 auto' }}>
      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        <div>
          <p className="section-label">About Me</p>
          <h2 className="section-title">Developer who thinks<br />like an AI researcher.</h2>
          <div style={{ color: 'var(--muted)', fontSize: isMobile ? '0.9rem' : '0.97rem', lineHeight: 1.9, fontWeight: 300 }}>
            <p style={{ marginBottom: '1.1rem' }}>
              I'm a <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Full-Stack Developer and AI Engineer</strong> based in Rahim Yar Khan, Pakistan, currently in my final year of a{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Bachelor's in Artificial Intelligence</strong> at Khwaja Fareed University (GPA 3.5/4.0).
            </p>
            <p style={{ marginBottom: '1.1rem' }}>
              My work lives at the intersection of web engineering and machine learning — I build{' '}
              <strong style={{ color: 'var(--text)', fontWeight: 500 }}>production Django &amp; React applications</strong> and train vision models and NLP pipelines. That dual perspective lets me ship intelligent products, not just static UIs.
            </p>
            <p>
              I've worked fully <strong style={{ color: 'var(--text)', fontWeight: 500 }}>remote with EST-aligned teams</strong>, built automation workflows that replaced hours of manual work, and deployed cross-platform Flutter apps with AI-driven features.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {aboutCards.map((c, i) => (
            <div key={i} className="about-card" style={{
              background: c.bg, border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12, padding: '1.2rem 1.4rem', marginBottom: '1.1rem',
              display: 'flex', alignItems: 'flex-start', gap: '0.9rem'
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                background: c.bg, display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '1rem'
              }}>{c.icon}</div>
              <div>
                <div style={{ fontSize: isMobile ? '0.8rem' : '0.88rem', fontWeight: 500, marginBottom: '0.15rem' }}>{c.title}</div>
                <div style={{ fontSize: isMobile ? '0.7rem' : '0.78rem', color: 'var(--muted)' }}>{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const skillGroups = [
  { label: 'Frontend', core: ['React.js','Next.js'], all: ['TypeScript','TailwindCSS','Bootstrap','HTML5/CSS3'] },
  { label: 'Backend', core: ['Django','Django REST'], all: ['Node.js','Express.js','Python'] },
  { label: 'AI / ML', core: ['YOLO','Scikit-learn'], all: ['TensorFlow','PyTorch','Keras','NLP · NLTK','OpenCV'] },
  { label: 'Databases', core: ['PostgreSQL'], all: ['MySQL','MongoDB','SQL'] },
  { label: 'Automation', core: ['n8n'], all: ['Make.com','Zapier','Webhooks'] },
  { label: 'Tools', core: [], all: ['Git · GitHub','Postman','Flutter','Vercel','REST APIs'] },
];

export function Skills() {
  const isMobile = window.innerWidth <= 768;
  
  return (
    <section id="skills" style={{
      padding: '4rem', background: 'var(--bg2)',
      borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p className="section-label">Core Skills</p>
        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Tech Stack</h2>
        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {skillGroups.map(g => (
            <div key={g.label} style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 12, padding: isMobile ? '0.9rem 1rem' : '1.1rem 1.4rem'
            }}>
              <div style={{ fontSize: isMobile ? '0.85rem' : '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.7rem', fontWeight: 500 }}>{g.label}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {g.core.map(t => (
                  <span key={t} style={{
                    fontSize: isMobile ? '0.8rem' : '0.90rem', padding: '0.22rem 0.55rem',
                    background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)',
                    borderRadius: 4, color: 'var(--accent3)'
                  }}>{t}</span>
                ))}
                {g.all.map(t => (
                  <span key={t} style={{
                    fontSize: isMobile ? '0.8rem' : '0.90rem', padding: '0.22rem 0.55rem',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)',
                    borderRadius: 4, color: 'var(--muted)'
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
