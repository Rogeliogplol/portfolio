import {
	applyTheme,
	getPreferredTheme,
	setStoredTheme,
	toggleTheme,
	type Theme,
} from './theme';

type ThemeToggleDependencies = {
	storage?: Pick<Storage, 'getItem' | 'setItem'>;
	matchMedia?: typeof window.matchMedia;
	root?: HTMLElement;
};

export const initializeThemeToggle = (
	button: HTMLButtonElement,
	{
		storage,
		matchMedia,
		root = document.documentElement,
	}: ThemeToggleDependencies = {},
) => {
	const thumb = button.querySelector<HTMLElement>('[data-theme-toggle-thumb]');
	let theme = getPreferredTheme({ storage, matchMedia });

	const renderTheme = (nextTheme: Theme) => {
		const isDark = nextTheme === 'dark';

		button.setAttribute('aria-checked', String(isDark));
		button.dataset.themeState = nextTheme;
		if (thumb) {
			thumb.dataset.themeState = nextTheme;
		}
		applyTheme(nextTheme, root);
	};

	renderTheme(theme);

	const handleToggle = () => {
		theme = toggleTheme(theme);
		setStoredTheme(theme, storage);
		renderTheme(theme);
	};

	button.addEventListener('click', handleToggle);

	return () => button.removeEventListener('click', handleToggle);
};
