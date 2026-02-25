import antfu from '@antfu/eslint-config';

export default antfu({
	svelte: true,
	typescript: true,
	formatters: true,
	stylistic: {
		indent: 'tab',
		semi: true,
		quotes: 'single',
	},
	ignores: [
		'build/',
		'.svelte-kit/',
		'drizzle/',
		'data/',
	],
});
