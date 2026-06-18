import { build, context } from 'esbuild';

const reactShim = `var require = (m) => ({ react: window.React, 'react-dom': window.ReactDOM })[m];`;

const dsBundle = {
  entryPoints: ['design-system/components/index.js'],
  bundle: true,
  outfile: 'design-system/_ds_bundle.js',
  format: 'iife',
  globalName: 'MartinLockettDesignSystem_2039f1',
  platform: 'browser',
  external: ['react', 'react-dom'],
  banner: { js: reactShim },
};

const siteBundle = {
  entryPoints: ['design-system/ui_kits/personal-site/site-bundle-entry.js'],
  bundle: true,
  outfile: 'design-system/_site_bundle.js',
  format: 'iife',
  platform: 'browser',
  external: ['react', 'react-dom'],
  banner: { js: reactShim },
};

const watch = process.argv.includes('--watch');

if (watch) {
  const [ctx1, ctx2] = await Promise.all([context(dsBundle), context(siteBundle)]);
  await Promise.all([ctx1.watch(), ctx2.watch()]);
  console.log('watching...');
} else {
  await Promise.all([build(dsBundle), build(siteBundle)]);
}
