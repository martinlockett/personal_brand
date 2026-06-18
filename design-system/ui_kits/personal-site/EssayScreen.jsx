// EssayScreen — a single reading view. Short measure, generous leading.
const { Eyebrow, Badge, Rule, Button, Pullquote } = window.MartinLockettDesignSystem_2039f1;

function EssayScreen({ essayId, onBack, onOpenEssay }) {
  const essays = window.SITE_ESSAYS;
  const essay = essays.find((e) => e.id === essayId) || essays[0];
  const next = essays[(essays.indexOf(essay) + 1) % essays.length];
  const wrap = { maxWidth: 'var(--container-text)', margin: '0 auto', padding: '0 var(--gutter)' };

  return (
    <main style={{ ...wrap, paddingTop: 'var(--space-8)' }}>
      <a onClick={onBack} style={{ cursor: 'pointer', fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--brass-600)' }}>← All writing</a>
      <div style={{ marginTop: 'var(--space-5)', display: 'flex', alignItems: 'center', gap: 12 }}>
        <Badge tone={essay.tag === 'Essay' ? 'navy' : 'teal'}>{essay.tag}</Badge>
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)' }}>{essay.date} · {essay.read}</span>
      </div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem, 4vw, 3rem)', fontWeight: 600, color: 'var(--ink-navy-600)', lineHeight: 1.1, letterSpacing: '-0.01em', margin: 'var(--space-3) 0 var(--space-4)' }}>
        {essay.title}
      </h1>
      <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '1.35rem', color: 'var(--slate-teal-600)', lineHeight: 1.4, margin: '0 0 var(--space-6)', maxWidth: '40ch' }}>
        {essay.dek}
      </p>
      <Rule variant="brass" />
      <div style={{ paddingTop: 'var(--space-6)' }}>
        {essay.body.map((para, i) => (
          <React.Fragment key={i}>
            <p style={{ fontSize: 'var(--text-lead)', lineHeight: 1.7, color: 'var(--graphite-700)', margin: '0 0 var(--space-5)', maxWidth: '60ch' }}>{para}</p>
            {i === 0 && essay.body.length > 2 && (
              <div style={{ margin: 'var(--space-6) 0' }}>
                <Pullquote>{essay.dek}</Pullquote>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-5)', borderTop: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <Eyebrow>Read next</Eyebrow>
          <div onClick={() => onOpenEssay(next.id)} style={{ cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--ink-navy-600)', marginTop: 4 }}>{next.title} →</div>
        </div>
        <Button variant="secondary" size="sm" onClick={onBack}>Back to index</Button>
      </div>
    </main>
  );
}

window.EssayScreen = EssayScreen;
