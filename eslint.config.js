import eslintPluginAstro from "eslint-plugin-astro";

export default [
	{
		ignores: ["dist/**", ".astro/**", "coverage/**"],
	},
	...eslintPluginAstro.configs.recommended,
];
