import React, { useState, useEffect } from 'react';

const RESUME_URL = '/Hiba_Shahid_Resume.pdf';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = ['About', 'Projects', 'Experience', 'GitHub', 'Contact'];

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: isMobile ? '1rem 1.2rem' : '1.1rem 4rem',
    background: scrolled ? 'rgba(10,10,15,0.92)' : 'rgba(10,10,15,0.6)',
    backdropFilter: 'blur(20px)',
    borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
    transition: 'all 0.3s',
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={navStyle}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: isMobile ? '0.95rem' : '1.05rem', color: 'var(--accent3)', letterSpacing: '0.02em' }}>
          HS<span style={{ color: 'var(--muted2)' }}>.</span>
        </div>

        {isMobile ? (
          // Mobile Menu Button
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer', display: 'flex',
              flexDirection: 'column', gap: '5px', padding: '0.5rem',
              color: 'var(--text)'
            }}
          >
            <span style={{ width: '20px', height: '2px', background: 'var(--text)', display: 'block', transition: 'all 0.3s' }} />
            <span style={{ width: '20px', height: '2px', background: 'var(--text)', display: 'block', transition: 'all 0.3s' }} />
            <span style={{ width: '20px', height: '2px', background: 'var(--text)', display: 'block', transition: 'all 0.3s' }} />
          </button>
        ) : (
          // Desktop Menu
          <>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
              {links.map(l => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    style={{ color: 'var(--muted)', fontSize: '0.88rem', textDecoration: 'none', letterSpacing: '0.03em', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent3)'}
                    onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                  >{l}</a>
                </li>
              ))}
            </ul>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'var(--accent2)', color: '#fff', border: 'none',
                padding: '0.48rem 1.1rem', borderRadius: '6px', fontSize: '0.84rem',
                fontFamily: 'DM Sans, sans-serif', cursor: 'pointer', textDecoration: 'none',
                transition: 'background 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.4rem'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--accent2)'}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>
          </>
        )}
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: '56px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(10,10,15,0.95)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)', padding: '1rem 1.2rem',
          display: 'flex', flexDirection: 'column', gap: '0.8rem',
        }}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={handleLinkClick}
              style={{
                color: 'var(--muted)', fontSize: '0.9rem', textDecoration: 'none',
                letterSpacing: '0.03em', padding: '0.5rem 0', transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent3)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{l}</a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            onClick={handleLinkClick}
            style={{
              background: 'var(--accent2)', color: '#fff', border: 'none',
              padding: '0.6rem 1rem', borderRadius: '6px', fontSize: '0.85rem',
              fontFamily: 'DM Sans, sans-serif', cursor: 'pointer', textDecoration: 'none',
              transition: 'background 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              marginTop: '0.5rem'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--accent2)'}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Resume
          </a>
        </div>
      )}
    </>
  );
}
