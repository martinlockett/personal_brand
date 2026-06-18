// HomeScreen — hero (intro + monogram), pillars, selected writing.
const { Wordmark, Button, Eyebrow, Badge, Card, Pullquote, Rule, Monogram } = window.MartinLockettDesignSystem_2039f1;

function PillarRow() {
  const pillars = [
    { k: 'Truth', v: 'Plain language, no gloss, no hype.' },
    { k: 'Purpose', v: 'Everything has a reason; nothing decorative-only.' },
    { k: 'Freedom', v: 'Original, unorthodox, made on my own terms.' },
    { k: 'Depth', v: 'Layered, considered, rewards attention.' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}>
      {pillars.map((p) => (
        <div key={p.k}>
          <div style={{ height: 2, width: 28, background: 'var(--brass-500)', marginBottom: 'var(--space-3)' }} />
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--ink-navy-600)' }}>{p.k}</div>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 4, lineHeight: 1.5 }}>{p.v}</div>
        </div>
      ))}
    </div>
  );
}

function HomeScreen({ onOpenEssay, onNavigate }) {
  const essays = window.SITE_ESSAYS;
  const featured = essays.find((e) => e.featured) || essays[0];
  const rest = essays.filter((e) => e.id !== featured.id).slice(0, 3);
  const wrap = { maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)' };

  return (
    <main>
      {/* Hero */}
      <section style={{ ...wrap, paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-8)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div>
            <Eyebrow>The observer who builds</Eyebrow>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)', lineHeight: 1.05,
              letterSpacing: '-0.01em', color: 'var(--ink-navy-600)',
              margin: 'var(--space-3) 0 var(--space-4)',
            }}>
              A generative, people&#8209;aware thinker with a private interior.
            </h1>
            <p style={{ fontSize: 'var(--text-lead)', lineHeight: 1.55, color: 'var(--graphite-700)', maxWidth: '46ch', margin: 0 }}>
              I read people well and connect at depth with the right few. This is a quiet record of what I&rsquo;m thinking about — clear, grounded, and unhurried.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
              <Button variant="primary" onClick={() => onNavigate('writing')}>Read the writing</Button>
              <Button variant="secondary" onClick={() => onNavigate('contact')}>Get in touch</Button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', padding: 'var(--space-6)' }}>
              <Monogram size={184} />
            </div>
          </div>
        </div>
      </section>

      <div style={wrap}><Rule variant="brass" /></div>

      {/* Pillars */}
      <section style={{ ...wrap, paddingTop: 'var(--space-7)', paddingBottom: 'var(--space-7)' }}>
        <PillarRow />
      </section>

      {/* Motto band */}
      <section style={{ background: 'var(--ink-navy-600)' }}>
        <div style={{ ...wrap, paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
          <Pullquote align="center" cite={<span style={{ color: 'var(--slate-teal-400)' }}>Vere Esse · Libere Agere · Alte Intellegere</span>}
            style={{ maxWidth: '32ch', margin: '0 auto', color: 'var(--parchment-50)' }}>
            <span style={{ color: 'var(--parchment-50)' }}>Be true · act freely · understand deeply</span>
          </Pullquote>
        </div>
      </section>

      {/* Selected writing */}
      <section style={{ ...wrap, paddingTop: 'var(--space-8)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 'var(--space-5)' }}>
          <div>
            <Eyebrow>Selected writing</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 500, color: 'var(--ink-navy-600)', margin: '6px 0 0' }}>Recent thinking</h2>
          </div>
          <a onClick={() => onNavigate('writing')} style={{ cursor: 'pointer', fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--brass-600)' }}>All writing →</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'var(--space-5)' }}>
          <Card brassEdge elevation="raised" padding="var(--space-7)" style={{ cursor: 'pointer' }} onClick={() => onOpenEssay(featured.id)}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 'var(--space-4)' }}>
              <Badge tone="brass">Featured</Badge>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)' }}>{featured.date} · {featured.read}</span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', fontWeight: 600, lineHeight: 1.15, color: 'var(--ink-navy-600)', margin: '0 0 var(--space-3)' }}>{featured.title}</h3>
            <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--graphite-700)', margin: 0, maxWidth: '46ch' }}>{featured.dek}</p>
          </Card>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {rest.map((e) => (
              <div key={e.id} onClick={() => onOpenEssay(e.id)} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <Badge tone={e.tag === 'Essay' ? 'navy' : 'teal'}>{e.tag}</Badge>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-faint)' }}>{e.read}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--ink-navy-600)', lineHeight: 1.2 }}>{e.title}</div>
                <Rule />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

window.HomeScreen = HomeScreen;
