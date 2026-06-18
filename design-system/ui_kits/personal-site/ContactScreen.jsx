// ContactScreen — calm form. Submits to a quiet confirmation state.
import { Eyebrow, Input, Button, Card, Rule } from '../../components/index.js';

function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const wrap = { maxWidth: 'var(--container-text)', margin: '0 auto', padding: '0 var(--gutter)' };

  return (
    <main style={{ ...wrap, paddingTop: 'var(--space-9)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 'var(--space-8)', alignItems: 'start' }}>
        <div>
          <Eyebrow>Get in touch</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 600, color: 'var(--ink-navy-600)', margin: '8px 0 var(--space-4)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
            Say the real thing
          </h1>
          <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--graphite-700)', maxWidth: '36ch', margin: 0 }}>
            Plainly and precisely is best. I read everything and reply to what I can — no rush to fill the silence.
          </p>
          <Rule variant="brass" style={{ margin: 'var(--space-5) 0' }} />
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            hello@martinlockett.com<br />
            London · GMT
          </div>
        </div>

        <Card brassEdge padding="var(--space-7)">
          {sent ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-6) 0' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--ink-navy-600)' }}>Thank you.</div>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', marginTop: 8 }}>I&rsquo;ll read it properly and reply when I have something worth saying.</p>
              <Button variant="secondary" size="sm" style={{ marginTop: 'var(--space-4)' }} onClick={() => setSent(false)}>Send another</Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <Input label="Name" placeholder="As you'd like to be addressed" required />
              <Input label="Email" type="email" placeholder="you@example.com" required />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--ink-navy-600)' }}>Message</label>
                <textarea rows={4} placeholder="What's on your mind?" required
                  style={{ border: '1.5px solid var(--rule-strong)', borderRadius: 'var(--radius-sm)', padding: '0.6rem 0.75rem', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--graphite-700)', background: 'var(--parchment-0)', resize: 'vertical', outline: 'none', lineHeight: 1.5 }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--brass-500)'; e.target.style.boxShadow = '0 0 0 3px var(--focus-ring)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--rule-strong)'; e.target.style.boxShadow = 'none'; }}
                />
              </div>
              <Button variant="accent" type="submit" style={{ marginTop: 4 }}>Send message</Button>
            </form>
          )}
        </Card>
      </div>
    </main>
  );
}

export { ContactScreen };
