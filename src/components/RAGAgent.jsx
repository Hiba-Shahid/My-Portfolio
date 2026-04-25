import React, { useState, useRef, useEffect } from 'react';

const KNOWLEDGE_BASE = `
# Hiba Shahid — Complete Profile

## Personal Info
- Full Name: Hiba Shahid
- Email: hibashahid678@gmail.com
- Phone: +923232690320
- GitHub: https://github.com/Hiba-Shahid
- LinkedIn: https://www.linkedin.com/in/hiba-shahid-627366312/
- Location: Rahim Yar Khan, Pakistan
- Availability: Remote, available EST hours (6 PM – 3 AM PKT), immediate joiner

## Summary
Full-Stack Developer and AI Engineer with 3+ years of hands-on experience building production-grade applications using React.js and Django. Experienced in REST API design, database optimization, and AI-enhanced automation. Currently pursuing a Bachelor's in Artificial Intelligence at Khwaja Fareed University (GPA 3.5/4.0, 7th semester). Passionate about building intelligent, scalable solutions at the intersection of web engineering and machine learning.

## Work Experience

### AI Automation Engineer & App Developer — TechWorks, Lahore (Sep 2025 – Present)
- Designed and deployed AI-powered automation workflows using Make.com, n8n, and Zapier, reducing manual processing time by 60%
- Integrated third-party APIs and AI models into event-driven data pipelines
- Built and maintained cross-platform mobile applications using Flutter for production clients

### Full-Stack Developer — AZ Logistics Pvt Ltd, Hybrid RYK (Dec 2024 – Aug 2025)
- Built and shipped full-stack features using React.js and Django, reducing API latency by ~35%
- Optimized Django ORM queries and endpoints, cutting average response time by 30%
- Maintained 95%+ uptime for logistics tracking module
- Collaborated via GitHub feature-branch workflow with a team of 4 developers

### Web Developer — Agentive, Remote (Feb 2023 – Oct 2024)
- Designed and developed responsive full-stack web applications using React.js and Django, end-to-end
- Maintained and enhanced existing web apps with integrated AI automation
- Built data scraping and processing scripts, improving team efficiency by 40%
- Delivered automation-driven product updates across 3 product lines

## Education
- Bachelor of Science in Artificial Intelligence — Khwaja Fareed University of Engineering & Technology, Rahim Yar Khan (Jan 2023 – Present), GPA: 3.5/4.0, 7th Semester
- Relevant coursework: Machine Learning, Data Structures, Software Engineering
- Higher Secondary Certificate — Sheikh Zayed College, Rahim Yar Khan (2019–2021), 89%

## Skills

### Frontend
React.js (core), Next.js (core), TypeScript, TailwindCSS, Bootstrap, HTML5/CSS3, Axios

### Backend
Django (core), Django REST Framework (core), Node.js, Express.js, Python

### AI / Machine Learning
YOLO (core), Scikit-learn (core), TensorFlow, PyTorch, Keras, NLP, NLTK, OpenCV, Pandas

### Databases
PostgreSQL (core), MySQL, MongoDB, SQL

### Automation Tools
n8n (core), Make.com, Zapier, Webhooks, AI Agents

### Mobile
Flutter (cross-platform iOS/Android)

### DevOps & Tools
Git, GitHub, Postman, REST APIs, GitHub Actions, Vercel

## Projects

### Web & Full-Stack Projects
1. **Paradise Competition** — Full-stack competition e-commerce platform with React frontend and Django backend. User auth, product listings, order management. GitHub: https://github.com/Hiba-Shahid/paradise-django-backend, Live: https://webpage-one-indol.vercel.app/
2. **Leaf & Bloom E-Commerce Store** — React + TailwindCSS store with product filtering, cart management, RAG agent integration via n8n. Live: https://leafandbloom.vercel.app/
3. **Gaming Site** — TypeScript-based gaming UI with live API data using Next.js. Live: https://gamingsite-sand.vercel.app/
4. **Password Manager** — Secure React app with seed-based login, encrypted credential storage. Live: https://passwordmanager-tawny.vercel.app/login
5. **SchoolArc Academic Management System** — React admin panel for managing students, grades, classes
6. **Wasooli Payment Tracking Tool** — React dashboard for real-time payment tracking
7. **NeuroMail** — React tool for smart AI-based email writing suggestions

### AI / ML Projects
1. **AI Movie Recommendation System** — Python + Scikit-learn collaborative & content-based filtering. GitHub: https://github.com/Hiba-Shahid/Recommendation-System
2. **Object Detection (YOLO)** — Real-time object detection with Python, YOLO, OpenCV. GitHub: https://github.com/Hiba-Shahid/BIM-APP
3. **Spam Email Classifier** — NLP-based classifier (spam vs ham) with 95%+ accuracy using Python, Scikit-learn, NLTK
4. **AI-Powered Health & Nutrition App (Flutter)** — Cross-platform app with BMI-based diet planning, food image recognition for macro estimation, weekly analytics

### Automation Projects
1. **Lead Scraper** — NLP-based lead extraction from Google Maps & Yellow Pages using Node.js. GitHub: https://github.com/Hiba-Shahid/Leads-Scrapper
2. **SEO Optimization Workflow** — n8n + Google Analytics automated SEO reporting pipeline
3. **Automated Ad Generation** — n8n + Canva API + Google Ads API for auto ad creation
4. **YouTube Short Riddle Generator** — n8n + GPT-3 + Canva API + YouTube API automated pipeline
5. **Sentiment Analyzer** — n8n + GPT-3 for customer feedback classification

## Recruiter FAQ
- **Availability**: Immediately available, can join right away
- **Work mode**: Fully remote preferred, can work hybrid
- **Time zone**: Available EST hours (6 PM – 3 AM PKT) — ideal for US-based companies
- **Experience**: 3+ years of professional full-stack development
- **Salary**: Open to negotiation based on role and company
- **Visa/Location**: Based in Pakistan, working remotely — no relocation required
- **Core strengths for jobs**: React.js + Django full-stack, REST API design, database optimization, AI/ML integration
- **Notice period**: Immediate joiner — can start right away
- **Languages**: English (professional), Urdu (native)
`;

const SYSTEM_PROMPT = `You are Hiba's AI portfolio assistant. You answer questions about Hiba Shahid — a Full-Stack Developer and AI Engineer — based strictly on the knowledge base provided. 

Be conversational, helpful, and concise. Keep answers under 120 words unless the question genuinely needs more detail.
- Use **bold** for key skills, tech names, or important information
- Use *italics* for emphasis
- For project questions, include relevant [GitHub/demo links](url) when available
- For recruiter questions about salary, be helpful and say it's open to negotiation
- If asked something not in the knowledge base, say you don't have that info but suggest contacting Hiba directly at hibashahid678@gmail.com
- Never make up information
- Speak in third person about Hiba (e.g., "Hiba has..." not "I have...")

Knowledge base:
${KNOWLEDGE_BASE}`;

const SUGGESTED = [
  "What's Hiba's experience with React and Django?",
  "Show me her AI/ML projects",
  "Is she available for remote work?",
  "What automation tools does she know?",
];

const SendIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const BotIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="5" r="1" fill="currentColor"/>
  </svg>
);

// Parse markdown-like formatting in text
const parseMarkdown = (text) => {
  if (!text || typeof text !== 'string') return text;
  
  const parts = [];
  let lastIndex = 0;
  
  // Match **bold**, *italic*, [link](url), and code blocks
  const regex = /\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\)|`(.+?)`/g;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      const segment = text.substring(lastIndex, match.index);
      // Handle line breaks in segments
      segment.split('\n').forEach((line, idx, arr) => {
        if (line) parts.push(line);
        if (idx < arr.length - 1) parts.push(<br key={`br-${parts.length}`} />);
      });
    }
    
    if (match[1]) {
      // **bold**
      parts.push(
        <strong key={`bold-${parts.length}`} style={{ color: '#f0eeff', fontWeight: 600 }}>
          {match[1]}
        </strong>
      );
    } else if (match[2]) {
      // *italic*
      parts.push(
        <em key={`italic-${parts.length}`} style={{ color: '#ddd8f5' }}>
          {match[2]}
        </em>
      );
    } else if (match[3]) {
      // [link](url)
      parts.push(
        <a 
          key={`link-${parts.length}`}
          href={match[4]} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#a78bfa', textDecoration: 'underline', fontWeight: 500, cursor: 'pointer' }}
        >
          {match[3]}
        </a>
      );
    } else if (match[5]) {
      // `code`
      parts.push(
        <code 
          key={`code-${parts.length}`}
          style={{ 
            background: 'rgba(0,0,0,0.3)', 
            padding: '2px 6px', 
            borderRadius: 4, 
            fontFamily: 'monospace',
            color: '#c4b5fd',
            fontSize: '0.85em'
          }}
        >
          {match[5]}
        </code>
      );
    }
    
    lastIndex = regex.lastIndex;
  }
  
  // Add remaining text with line breaks
  if (lastIndex < text.length) {
    const remaining = text.substring(lastIndex);
    remaining.split('\n').forEach((line, idx, arr) => {
      if (line) parts.push(line);
      if (idx < arr.length - 1) parts.push(<br key={`br-${parts.length}`} />);
    });
  }
  
  return parts.length > 0 ? parts : text;
};

export default function RAGAgent() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Hiba's AI assistant. Ask me anything about her experience, projects, skills, or availability." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasNew, setHasNew] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
      setTimeout(() => inputRef.current?.focus(), 100);
      setHasNew(false);
    }
  }, [open, messages]);

  const send = async (text) => {
    const q = text || input.trim();
    if (!q || loading) return;
    setInput('');

    const userMsg = { role: 'user', content: q };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setLoading(true);

    // Check if API key is available
    const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;
    if (!apiKey) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "AI assistant is not configured. Please set the VITE_MISTRAL_API_KEY environment variable." 
      }]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'mistral-large-latest',
          max_tokens: 1000,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...updated.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content }))
          ]
        })
      });
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't get a response. Please try again.";
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      if (!open) setHasNew(true);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "Connection error. Please try again shortly." }]);
    }
    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Open AI assistant"
        style={{
          position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000,
          width: 54, height: 54, borderRadius: '50%',
          background: open ? '#4c1d95' : 'linear-gradient(135deg, #7c3aed, #6d28d9)',
          border: '1px solid rgba(167,139,250,0.4)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(124,58,237,0.45)',
          transition: 'all 0.25s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
        {hasNew && !open && (
          <span style={{
            position: 'absolute', top: 2, right: 2,
            width: 12, height: 12, background: '#34d399',
            borderRadius: '50%', border: '2px solid #0a0a0f'
          }} />
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div style={{
          position: 'fixed', bottom: '6rem', right: '2rem', zIndex: 999,
          width: 360, maxHeight: 520,
          background: '#13131c', border: '1px solid rgba(167,139,250,0.2)',
          borderRadius: 16, display: 'flex', flexDirection: 'column',
          boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
          overflow: 'hidden',
          animation: 'chatIn 0.2s ease',
        }}>
          <style>{`
            @keyframes chatIn { from { opacity:0; transform:translateY(12px) scale(0.97); } to { opacity:1; transform:none; } }
            .chat-msg-bot { 
              background: #1e1e2e; 
              border: 1px solid rgba(255,255,255,0.07); 
              border-radius: 12px 12px 12px 3px; 
              padding: 11px 13px; 
              font-size: 0.84rem; 
              line-height: 1.68; 
              color: #ddd8f5; 
              max-width: 88%; 
              word-break: break-word;
              word-wrap: break-word;
              overflow-wrap: break-word;
            }
            .chat-msg-bot strong { font-weight: 600; color: #f0eeff; }
            .chat-msg-bot em { font-style: italic; }
            .chat-msg-bot a { color: #a78bfa; text-decoration: underline; font-weight: 500; }
            .chat-msg-user { 
              background: #5b21b6; 
              border-radius: 12px 12px 3px 12px; 
              padding: 11px 13px; 
              font-size: 0.84rem; 
              line-height: 1.68; 
              color: #ede9fe; 
              max-width: 88%; 
              word-break: break-word;
              word-wrap: break-word;
              overflow-wrap: break-word;
              margin-left: auto; 
            }
            .chat-input:focus { outline: none; border-color: rgba(167,139,250,0.5) !important; }
            .chat-input::placeholder { color: #5a5970; }
            .suggest-btn:hover { background: rgba(167,139,250,0.12) !important; border-color: rgba(167,139,250,0.3) !important; }
            .typing-dot { width:6px; height:6px; background:#a78bfa; border-radius:50%; animation: typingBounce 1.2s infinite; }
            .typing-dot:nth-child(2) { animation-delay: 0.2s; }
            .typing-dot:nth-child(3) { animation-delay: 0.4s; }
            @keyframes typingBounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-5px)} }
          `}</style>

          {/* Header */}
          <div style={{
            padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)',
            display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0,
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: 'linear-gradient(135deg, #7c3aed, #4c1d95)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid rgba(167,139,250,0.3)'
            }}>
              <BotIcon />
            </div>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f0eeff', fontFamily: 'Syne, sans-serif' }}>Ask about Hiba</div>
              <div style={{ fontSize: '0.7rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: 5, height: 5, background: '#34d399', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                AI-powered · Always online
              </div>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: 'auto', padding: '14px 14px 8px',
            display: 'flex', flexDirection: 'column', gap: '10px',
            scrollbarWidth: 'thin', scrollbarColor: '#2a2a3a transparent'
          }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div className={m.role === 'user' ? 'chat-msg-user' : 'chat-msg-bot'}>
                  {m.role === 'assistant' ? parseMarkdown(m.content) : m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex' }}>
                <div className="chat-msg-bot" style={{ display: 'flex', gap: '4px', alignItems: 'center', padding: '10px 14px' }}>
                  <span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions (only show on first message) */}
          {messages.length === 1 && (
            <div style={{ padding: '0 12px 10px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {SUGGESTED.map(s => (
                <button key={s} onClick={() => send(s)} className="suggest-btn" style={{
                  fontSize: '0.71rem', padding: '5px 10px',
                  background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(167,139,250,0.18)',
                  borderRadius: 20, color: '#c4b5fd', cursor: 'pointer',
                  fontFamily: 'DM Sans, sans-serif', transition: 'all 0.18s',
                  textAlign: 'left', lineHeight: 1.4
                }}>{s}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: '10px 12px 12px', borderTop: '1px solid rgba(255,255,255,0.07)',
            display: 'flex', gap: '8px', alignItems: 'flex-end', flexShrink: 0,
          }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about skills, projects, availability..."
              rows={1}
              className="chat-input"
              style={{
                flex: 1, background: '#1e1e2e', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10, padding: '9px 12px', color: '#f0eeff',
                fontSize: '0.84rem', fontFamily: 'DM Sans, sans-serif',
                resize: 'none', lineHeight: 1.5, maxHeight: 90, overflowY: 'auto',
                transition: 'border-color 0.2s',
              }}
              onInput={e => {
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 90) + 'px';
              }}
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || loading}
              style={{
                width: 36, height: 36, borderRadius: 9, flexShrink: 0,
                background: input.trim() && !loading ? '#7c3aed' : '#2a2a3a',
                border: 'none', cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: input.trim() && !loading ? 'white' : '#5a5970',
                transition: 'all 0.18s',
              }}
            >
              <SendIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
