// Footer — ink panel with monogram, motto, and spaced-caps pillars.
import { Monogram } from '../../components/index.js';

function Footer({ onNavigate }) {
  return (
    <footer style={{ background: 'var(--ink-navy-600)', color: 'var(--text-on-ink)', marginTop: 'var(--space-10)' }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto',
        padding: 'var(--space-8) var(--gutter) var(--space-7)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <Monogram size={48} mono="parchment" />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 600 }}>Martin Lockett</div>
            <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--brass-400)' }}>
              Be true · act freely · understand deeply
            </div>
          </div>
        </div>
        <hr style={{ border: 0, height: 1, background: 'var(--rule-on-ink)', margin: 'var(--space-6) 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <div style={{ display: 'flex', gap: 'var(--space-5)' }}>
            {['Home', 'Writing', 'About', 'Contact'].map((l) => (
              <a key={l} onClick={() => onNavigate(l.toLowerCase())}
                 style={{ cursor: 'pointer', fontSize: 'var(--text-sm)', color: 'var(--text-on-ink-muted)' }}>{l}</a>
            ))}
          </div>
          <div style={{ fontSize: 'var(--text-xs)', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--slate-teal-400)' }}>
            Truth · Purpose · Freedom · Depth
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
