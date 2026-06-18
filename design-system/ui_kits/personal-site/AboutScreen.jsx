// AboutScreen — essence, pillars table, principles.
import { Eyebrow, Rule, Card, Pullquote, Badge } from '../../components/index.js';

function AboutScreen({ onNavigate }) {
  const wrap = { maxWidth: 'var(--container-text)', margin: '0 auto', padding: '0 var(--gutter)' };
  const rules = [
    'Whitespace is the brand — when in doubt, remove, don’t add.',
    'Plain truth over polish — say the real thing, simply.',
    'Reward attention — depth that reveals itself beats anything that shouts.',
    'Comfortable with a considered pause — no rush to fill silence.',
  ];
  return (
    <main style={{ ...wrap, paddingTop: 'var(--space-9)' }}>
      <Eyebrow>About</Eyebrow>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.75rem', fontWeight: 600, color: 'var(--ink-navy-600)', margin: '8px 0 var(--space-4)', letterSpacing: '-0.01em' }}>
        The observer who builds
      </h1>
      <p style={{ fontSize: 'var(--text-lead)', lineHeight: 1.65, color: 'var(--graphite-700)', maxWidth: '58ch', margin: '0 0 var(--space-5)' }}>
        Ideas come prolifically; I read people well; I connect at depth with the right few. I&rsquo;d rather have thought about it properly than have said it first — clear, grounded, unhurried, and warm to those who get close.
      </p>

      <div style={{ margin: 'var(--space-7) 0' }}>
        <Pullquote cite="Three words">Considered · Genuine · Generative</Pullquote>
      </div>

      <Rule variant="brass" />

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 500, color: 'var(--ink-navy-600)', margin: 'var(--space-6) 0 var(--space-4)' }}>
        How I work
      </h2>
      <Card padding="var(--space-6)">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {rules.map((r, i) => (
            <div key={i} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--brass-600)', minWidth: 22 }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontSize: 'var(--text-base)', lineHeight: 1.55, color: 'var(--graphite-700)' }}>{r}</span>
            </div>
          ))}
        </div>
      </Card>

      <div style={{ marginTop: 'var(--space-6)', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Badge>Strategy</Badge>
        <Badge>Writing</Badge>
        <Badge>People &amp; teams</Badge>
        <Badge tone="teal">Quiet build</Badge>
      </div>
    </main>
  );
}

export { AboutScreen };
