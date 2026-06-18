**Input** — a calm text field on paper. Hairline border that warms to Brass on focus.

```jsx
<Input label="Email" type="email" placeholder="you@example.com" />
<Input label="Name" hint="As you'd like to be addressed" />
<Input label="Email" error="That doesn't look right" />
```

Props: `label`, `hint`, `error` (replaces hint, turns the field critical), `leading` (icon/prefix). Passes through all native input attributes. Focus shows a brass ring — calm, no bounce.
