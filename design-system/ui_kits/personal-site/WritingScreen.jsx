// WritingScreen — index of all essays in a calm list.
const { Eyebrow, Badge, Rule } = window.MartinLockettDesignSystem_2039f1;

function WritingScreen({ onOpenEssay }) {
  const essays = window.SITE_ESSAYS;
  const wrap = { maxWidth: 'var(--container-text)', margin: '0 auto', padding: '0 var(--gutter)' };
  return (
    <main style={{ ...wrap, paddingTop: 'var(--space-9)' }}>
      <Eyebrow>Writing</Eyebrow>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.75rem', fontWeight: 600, color: 'var(--ink-navy-600)', margin: '8px 0 var(--space-3)', letterSpacing: '-0.01em' }}>
        Essays &amp; notes
      </h1>
      <p style={{ fontSize: 'var(--text-lead)', color: 'var(--text-muted)', maxWidth: '48ch', lineHeight: 1.55, margin: '0 0 var(--space-7)' }}>
        Considered pieces, published when they&rsquo;re ready rather than often. Depth that reveals itself.
      </p>
      <Rule variant="brass" />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {essays.map((e) => (
          <div key={e.id}>
            <article onClick={() => onOpenEssay(e.id)} style={{ cursor: 'pointer', padding: 'var(--space-5) 0', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Badge tone={e.tag === 'Essay' ? 'navy' : 'teal'}>{e.tag}</Badge>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)' }}>{e.date} · {e.read}</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 600, color: 'var(--ink-navy-600)', margin: 0, lineHeight: 1.2 }}>{e.title}</h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--graphite-700)', lineHeight: 1.55, margin: 0, maxWidth: '54ch' }}>{e.dek}</p>
            </article>
            <Rule />
          </div>
        ))}
      </div>
    </main>
  );
}

window.WritingScreen = WritingScreen;
