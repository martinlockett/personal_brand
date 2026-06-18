// Nav — quiet top bar: wordmark left, section links right, one brass action.
import { Wordmark, Button } from '../../components/index.js';

function Nav({ active, onNavigate }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'writing', label: 'Writing' },
    { id: 'about', label: 'About' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: 'rgba(243,238,228,0.82)',
      backdropFilter: 'saturate(140%) blur(10px)',
      borderBottom: '1px solid var(--rule)',
    }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto',
        padding: '14px var(--gutter)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a onClick={() => onNavigate('home')} style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <Wordmark size="sm" />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}>
          {links.map((l) => (
            <a
              key={l.id}
              onClick={() => onNavigate(l.id)}
              style={{
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                fontWeight: 500,
                color: active === l.id ? 'var(--ink-navy-600)' : 'var(--slate-teal-500)',
                paddingBottom: 2,
                borderBottom: active === l.id ? '1.5px solid var(--brass-500)' : '1.5px solid transparent',
                transition: 'color 140ms ease',
              }}
            >
              {l.label}
            </a>
          ))}
          <Button variant="accent" size="sm" onClick={() => onNavigate('contact')}>Get in touch</Button>
        </nav>
      </div>
    </header>
  );
}

export { Nav };
