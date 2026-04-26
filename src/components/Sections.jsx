import React from 'react';

const RESUME_URL = '/Hiba_Shahid_Resume.pdf';

const jobs = [
  {
    date: 'Sep 2025 — Present',
    company: 'TechWorks · Lahore',
    role: 'AI Automation Engineer & App Developer',
    bullets: [
      'Designed AI-powered automation workflows using <b>Make.com, n8n, and Zapier</b>, reducing manual processing time by 60%.',
      'Integrated third-party APIs and AI models into <b>event-driven data pipelines</b>.',
      'Built and maintained cross-platform mobile apps using <b>Flutter</b> for production clients.',
    ]
  },
  {
    date: 'Dec 2024 — Aug 2025',
    company: 'AZ Logistics Pvt Ltd · Hybrid, RYK',
    role: 'Full-Stack Developer',
    bullets: [
      'Built full-stack features with <b>React.js and Django</b>, reducing API latency by ~35%.',
      'Optimized <b>Django ORM queries</b> and endpoints, cutting average response time by 30%.',
      'Maintained 95%+ uptime for logistics tracking module via structured error handling.',
      'Collaborated via <b>GitHub feature-branch workflow</b> with a team of 4 developers.',
    ]
  },
  {
    date: 'Feb 2023 — Oct 2024',
    company: 'Agentive · Remote',
    role: 'Web Developer',
    bullets: [
      'Designed and developed responsive <b>React.js and Django</b> web applications end-to-end.',
      'Maintained AI-integrated web apps and built data scraping scripts, <b>improving team efficiency by 40%</b>.',
      'Delivered automation-driven product updates on schedule across 3 product lines.',
    ]
  },
];

export function Experience() {
  const isMobile = window.innerWidth <= 768;
  
  return (
    <section id="experience" style={{
      padding: isMobile ? '4rem 1.5rem' : '6rem 4rem',
      background: 'var(--bg2)', borderTop: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p className="section-label">Career</p>
        <h2 className="section-title">Experience</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {jobs.map((j, i) => (
            <div key={j.role} style={{
              display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '180px 1fr',
              gap: isMobile ? '1rem' : '2rem', position: 'relative',
              paddingBottom: i < jobs.length - 1 ? (isMobile ? '1.5rem' : '2.5rem') : 0,
              paddingLeft: isMobile ? 0 : 0
            }}>
              {/* Line */}
              {i < jobs.length - 1 && !isMobile && (
                <div style={{
                  position: 'absolute', left: 180, top: 8, bottom: 0, width: 1,
                  background: 'linear-gradient(to bottom, var(--accent2), transparent)',
                  transform: 'translateX(calc(-50% + 24px))'
                }} />
              )}
              {/* Dot */}
              {!isMobile && (
                <div style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: 'var(--accent2)', border: '2px solid var(--accent)',
                  position: 'absolute', left: 180, top: 6,
                  transform: 'translateX(calc(-50% + 24px))',
                  boxShadow: '0 0 12px rgba(124,58,237,0.5)'
                }} />
              )}

              {!isMobile && <div style={{ fontSize: '0.76rem', color: 'var(--muted2)', textAlign: 'right', paddingTop: '0.2rem' }}>{j.date}</div>}

              <div style={{ paddingLeft: isMobile ? 0 : '2.5rem' }}>
                {isMobile && <div style={{ fontSize: '0.7rem', color: 'var(--muted2)', marginBottom: '0.4rem' }}>{j.date}</div>}
                <div style={{ fontSize: isMobile ? '0.7rem' : '0.73rem', color: 'var(--accent)', letterSpacing: '0.05em', marginBottom: '0.25rem', fontWeight: 500 }}>{j.company}</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: isMobile ? '0.95rem' : '1.02rem', fontWeight: 700, marginBottom: '0.6rem' }}>{j.role}</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {j.bullets.map((b, bi) => (
                    <li key={bi} style={{ fontSize: isMobile ? '0.78rem' : '0.84rem', color: 'var(--muted)', paddingLeft: '1rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent2)', fontSize: '0.7rem' }}>→</span>
                      <span dangerouslySetInnerHTML={{ __html: b.replace(/<b>/g, '<strong style="color:var(--text);font-weight:500">').replace(/<\/b>/g, '</strong>') }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const githubStats = [
  { label: 'Public Repositories', val: '15+' },
  { label: 'Live Deployments', val: '5+' },
  { label: 'Tech Domains', val: 'Web · AI · Mobile' },
  { label: 'Primary Languages', val: 'Python · JS · Dart' },
];

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export function Github() {
  const isMobile = window.innerWidth <= 768;
  
  return (
    <section id="github" style={{ padding: isMobile ? '4rem 1.5rem' : '6rem 4rem', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 20, padding: isMobile ? '1.5rem' : '3rem',
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '3rem', alignItems: 'center'
      }}>
        <div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: isMobile ? '1.3rem' : '1.6rem', fontWeight: 700, marginBottom: '0.8rem' }}>Open Source &amp; GitHub</h3>
          <p style={{ color: 'var(--muted)', fontSize: isMobile ? '0.88rem' : '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            All my projects are version-controlled and publicly available. From ML experiments to full production apps — the code tells the full story.
          </p>
          <a href="https://github.com/Hiba-Shahid" target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            color: 'var(--accent3)', textDecoration: 'none', fontSize: isMobile ? '0.82rem' : '0.9rem',
            background: 'rgba(167,139,250,0.08)', padding: isMobile ? '0.5rem 1rem' : '0.6rem 1.2rem',
            borderRadius: 8, border: '1px solid rgba(167,139,250,0.2)',
            transition: 'background 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(167,139,250,0.15)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(167,139,250,0.08)'}
          >
            <GithubIcon /> github.com/Hiba-Shahid
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {githubStats.map(s => (
            <div key={s.label} style={{
              background: 'var(--bg3)', border: '1px solid var(--border)',
              borderRadius: 10, padding: isMobile ? '0.7rem 0.9rem' : '0.9rem 1.1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between'
            }}>
              <span style={{ fontSize: isMobile ? '0.75rem' : '0.8rem', color: 'var(--muted)' }}>{s.label}</span>
              <span style={{ fontFamily: 'Syne, sans-serif', fontSize: isMobile ? '0.9rem' : '1rem', fontWeight: 700, color: 'var(--accent3)' }}>{s.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const contactLinks = [
  {
    label: 'hibashahid678@gmail.com', href: 'mailto:hibashahid678@gmail.com',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="15" height="15"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  },
  {
    label: 'LinkedIn', href: 'https://www.linkedin.com/in/hiba-shahid-627366312/',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
  },
  {
    label: 'GitHub', href: 'https://github.com/Hiba-Shahid',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
  },
  {
    label: '+92 323 2690320', href: 'tel:+923232690320',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="15" height="15"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  },
];

export function Contact() {
  const isMobile = window.innerWidth <= 768;
  
  return (
    <section id="contact" style={{
      padding: isMobile ? '4rem 1.5rem' : '6rem 4rem',
      background: 'var(--bg2)', borderTop: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Let's work together.</h2>
        <p style={{ color: 'var(--muted)', fontSize: isMobile ? '0.9rem' : '1rem', marginBottom: '2.8rem', marginTop: '-1.5rem' }}>
          I'm open to full-stack and AI roles — remote, EST-aligned, immediate joiner.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? '0.6rem' : '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {contactLinks.map(c => (
            <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.55rem',
                padding: isMobile ? '0.6rem 0.9rem' : '0.75rem 1.4rem', borderRadius: 10, textDecoration: 'none',
                fontSize: isMobile ? '0.78rem' : '0.88rem', border: '1px solid var(--border)',
                background: 'var(--card)', color: 'var(--text)', transition: 'all 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.transform = 'none'; }}
            >
              {c.icon}{isMobile ? '' : c.label}
            </a>
          ))}
        </div>
        {/* Resume download in contact too */}
        <a href={RESUME_URL} target="_blank" rel="noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            padding: isMobile ? '0.7rem 1.2rem' : '0.8rem 2rem', borderRadius: 10, textDecoration: 'none',
            fontSize: isMobile ? '0.82rem' : '0.92rem', border: '1px solid rgba(167,139,250,0.3)',
            background: 'rgba(124,58,237,0.12)', color: 'var(--accent3)',
            transition: 'all 0.2s', marginTop: '0.5rem'
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(124,58,237,0.22)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(124,58,237,0.12)'}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download Resume {isMobile ? '' : '(PDF)'}
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  const isMobile = window.innerWidth <= 768;
  
  return (
    <footer style={{
      padding: isMobile ? '1.2rem 1.5rem' : '1.8rem 4rem', textAlign: 'center',
      fontSize: isMobile ? '0.7rem' : '0.78rem', color: 'var(--muted2)',
      borderTop: '1px solid var(--border)'
    }}>
      Built by Hiba Shahid · 2025 · Full-Stack &amp; AI Developer
    </footer>
  );
}
