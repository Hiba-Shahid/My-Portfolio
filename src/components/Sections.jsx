import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

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
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const isMobile = window.innerWidth <= 768;

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    
    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject || `Message from ${form.name}`,
        message: form.message,
        to_email: 'hibashahid678@gmail.com'
      };

      console.log('Sending email with params:', templateParams);

      // Send email to you only (testing)
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Email result:', result);

      if (result.status === 200) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS detailed error:', error);
      console.error('Error details:', {
        status: error.status,
        text: error.text,
        name: error.name,
        message: error.message
      });
      setStatus('error');
      // Fallback to mailto if EmailJS fails
      const subject = encodeURIComponent(form.subject || `Message from ${form.name}`);
      const body = encodeURIComponent(`Hi Hiba,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
      window.location.href = `mailto:hibashahid678@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10,
    padding: '0.8rem 1rem', color: 'var(--text)',
    fontSize: '0.88rem', fontFamily: 'DM Sans, sans-serif',
    outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block', fontSize: '0.75rem', fontWeight: 600,
    color: 'var(--accent3)', marginBottom: '0.45rem',
    letterSpacing: '0.06em', textTransform: 'uppercase',
  };

  const infoItems = [
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
      label: 'Email', value: 'hibashahid678@gmail.com', href: 'mailto:hibashahid678@gmail.com'
    },
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
      label: 'Phone', value: '+92 323 2690320', href: 'tel:+923232690320'
    },
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
      label: 'LinkedIn', value: 'hiba-shahid-627366312', href: 'https://www.linkedin.com/in/hiba-shahid-627366312/'
    },
    {
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>,
      label: 'GitHub', value: 'github.com/Hiba-Shahid', href: 'https://github.com/Hiba-Shahid'
    },
  ];

  return (
    <section id="contact" style={{
      padding: isMobile ? '4rem 1.5rem' : '6rem 4rem',
      background: 'var(--bg2)', borderTop: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Let's work together.</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr',
          gap: isMobile ? '2.5rem' : '3.5rem',
          alignItems: 'start'
        }}>

          {/* ── LEFT: Info panel ── */}
          <div>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: '2rem' }}>
              I'm open to full-stack, AI, and automation roles — remote, immediate joiner. Have a project in mind or want to collaborate? Drop a message and I'll get back to you within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {infoItems.map(item => (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '0.85rem 1.1rem',
                    background: 'var(--card)', border: '1px solid var(--border)',
                    borderRadius: 12, textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(167,139,250,0.35)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
                >
                  <div style={{
                    width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                    background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(167,139,250,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent3)'
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--muted2)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.1rem' }}>{item.label}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>{item.value}</div>
                  </div>
                  <svg style={{ marginLeft: 'auto', color: 'var(--muted2)' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                </a>
              ))}
            </div>

            {/* Resume download */}
            <a href={RESUME_URL} target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.75rem 1.4rem', borderRadius: 10, textDecoration: 'none',
              fontSize: '0.88rem', border: '1px solid rgba(167,139,250,0.3)',
              background: 'rgba(124,58,237,0.1)', color: 'var(--accent3)',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(124,58,237,0.2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(124,58,237,0.1)'}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume (PDF)
            </a>
          </div>

          {/* ── RIGHT: Contact form ── */}
          <div style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 20, padding: isMobile ? '1.5rem' : '2.2rem',
          }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>Send a Message</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>I'll respond within 24 hours.</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={labelStyle}>Your Name *</label>
                <input
                  name="name" value={form.name} onChange={handleChange}
                  placeholder="John Doe"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(167,139,250,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div>
                <label style={labelStyle}>Your Email *</label>
                <input
                  name="email" value={form.email} onChange={handleChange}
                  placeholder="john@example.com" type="email"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'rgba(167,139,250,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={labelStyle}>Subject</label>
              <input
                name="subject" value={form.subject} onChange={handleChange}
                placeholder="Project inquiry / Job opportunity / Collaboration..."
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(167,139,250,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={labelStyle}>Message *</label>
              <textarea
                name="message" value={form.message} onChange={handleChange}
                placeholder="Tell me about your project, role, or how I can help..."
                rows={5}
                style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                onFocus={e => e.target.style.borderColor = 'rgba(167,139,250,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === 'sending' || !form.name || !form.email || !form.message}
              style={{
                width: '100%', padding: '0.9rem',
                background: status === 'sent'
                  ? 'rgba(52,211,153,0.15)'
                  : status === 'error'
                    ? 'rgba(239,68,68,0.15)'
                    : (!form.name || !form.email || !form.message)
                      ? 'rgba(124,58,237,0.3)'
                      : 'var(--accent2)',
                border: status === 'sent' ? '1px solid rgba(52,211,153,0.3)' : 
                        status === 'error' ? '1px solid rgba(239,68,68,0.3)' : 'none',
                borderRadius: 10,
                color: status === 'sent' ? '#34d399' : 
                       status === 'error' ? '#ef4444' : '#fff',
                fontSize: '0.9rem', fontWeight: 600,
                fontFamily: 'DM Sans, sans-serif',
                cursor: (!form.name || !form.email || !form.message) ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { if (form.name && form.email && form.message && status !== 'sent' && status !== 'error') e.currentTarget.style.background = 'var(--accent)'; }}
              onMouseLeave={e => { if (form.name && form.email && form.message && status !== 'sent' && status !== 'error') e.currentTarget.style.background = 'var(--accent2)'; }}
            >
              {status === 'sending' ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                  Sending...
                </>
              ) : status === 'sent' ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Message Sent!
                </>
              ) : status === 'error' ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  Try Again
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Message
                </>
              )}
            </button>

            {status === 'sent' && (
              <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.8rem' }}>
                Message sent successfully! I'll get back to you within 24 hours.
              </p>
            )}
            {status === 'error' && (
              <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#ef4444', marginTop: '0.8rem' }}>
                Failed to send. Your mail client should open as backup, or email directly at hibashahid678@gmail.com
              </p>
            )}
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
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
