'use client'
import { useState } from 'react'

const posts = [
  { id: 1, title: 'Behind the beat: How I made "Lagos Nights"', type: 'Audio', locked: false, date: 'Mar 12' },
  { id: 2, title: 'Full studio session recording — 3 hours uncut', type: 'Video', locked: true, date: 'Mar 18' },
  { id: 3, title: 'My complete Ableton template — free for holders', type: 'File', locked: true, date: 'Mar 22' },
  { id: 4, title: 'Early access: "Afrotech EP" full album', type: 'Audio', locked: true, date: 'Apr 1' },
]

export default function Home() {
  const [holding, setHolding] = useState(false)

  return (
    <div style={{ minHeight: '100vh', background: '#faf8f5' }}>
      {/* Nav */}
      <nav style={{ padding: '18px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e8e2d9' }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 900 }}>Star<span style={{ color: '#dc2626' }}>Gate</span></div>
        <button onClick={() => setHolding(!holding)} style={{ background: holding ? '#dc2626' : '#1a1a1a', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 20px', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s' }}>
          {holding ? '✓ Wallet Connected' : 'Connect Wallet'}
        </button>
      </nav>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '60px 24px' }}>
        {/* Creator Profile */}
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', marginBottom: 48 }}>
          <div style={{ width: 96, height: 96, borderRadius: '50%', background: 'linear-gradient(135deg, #dc2626, #7c3aed)', flexShrink: 0 }} />
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 900, marginBottom: 6 }}>Fela Jr.</h1>
            <p style={{ color: '#666', marginBottom: 12 }}>Afrotech producer · Lagos, Nigeria · 2.4k token holders</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ background: '#fef3c7', color: '#92400e', fontSize: 12, fontWeight: 600, padding: '4px 12px', borderRadius: 20 }}>FELA Token</div>
              <div style={{ background: '#f0fdf4', color: '#166534', fontSize: 12, fontWeight: 600, padding: '4px 12px', borderRadius: 20 }}>Stellar Asset</div>
            </div>
          </div>
        </div>

        {/* Token Gate Banner */}
        {!holding && (
          <div style={{ background: '#1a1a1a', borderRadius: 16, padding: '24px 28px', marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ color: '#fbbf24', fontSize: 13, fontWeight: 600, marginBottom: 6 }}>🔒 EXCLUSIVE CONTENT</div>
              <div style={{ color: '#f5f5f5', fontSize: 16, fontWeight: 600 }}>Hold 10+ FELA tokens to unlock all posts</div>
              <div style={{ color: '#888', fontSize: 13, marginTop: 4 }}>Currently ~$4.20 · traded on Stellar DEX</div>
            </div>
            <button onClick={() => setHolding(true)} style={{ background: '#dc2626', border: 'none', borderRadius: 10, padding: '12px 24px', color: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>Get FELA →</button>
          </div>
        )}
        {holding && (
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 16, padding: '18px 24px', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 24 }}>✅</span>
            <div>
              <div style={{ fontWeight: 700, color: '#166534' }}>Access granted · You hold 25 FELA tokens</div>
              <div style={{ fontSize: 13, color: '#4ade80' }}>All exclusive content is now unlocked</div>
            </div>
          </div>
        )}

        {/* Posts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {posts.map(post => {
            const isLocked = post.locked && !holding
            return (
              <div key={post.id} style={{ background: '#fff', border: '1px solid #e8e2d9', borderRadius: 14, padding: '22px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: isLocked ? 0.6 : 1 }}>
                <div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, background: '#f3f4f6', padding: '3px 8px', borderRadius: 6, color: '#666' }}>{post.type}</span>
                    <span style={{ fontSize: 12, color: '#999' }}>{post.date}</span>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 16 }}>{isLocked ? '🔒 ' : ''}{post.title}</div>
                </div>
                <button disabled={isLocked} style={{ background: isLocked ? '#e5e7eb' : '#dc2626', color: isLocked ? '#9ca3af' : '#fff', border: 'none', borderRadius: 8, padding: '10px 18px', fontSize: 13, fontWeight: 600, cursor: isLocked ? 'not-allowed' : 'pointer', fontFamily: 'inherit' }}>
                  {isLocked ? 'Locked' : 'Access →'}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
