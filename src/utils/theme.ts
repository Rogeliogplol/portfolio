export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";
const DARK_THEME_QUERY = "(prefers-color-scheme: dark)";

const isTheme = (theme: string | null): theme is Theme =>
	theme === "light" || theme === "dark";

const getClientStorage = () => {
	try {
		return typeof window === "undefined" ? undefined : window.localStorage;
	} catch {
		return undefined;
	}
};

const getClientMatchMedia = () => {
	try {
		return typeof window === "undefined"
			? undefined
			: window.matchMedia?.bind(window);
	} catch {
		return undefined;
	}
};

export const getStoredTheme = (
	storage: Pick<Storage, "getItem"> | undefined = getClientStorage(),
) => {
	try {
		const storedTheme = storage?.getItem(THEME_STORAGE_KEY) ?? null;
		return isTheme(storedTheme) ? storedTheme : null;
	} catch {
		return null;
	}
};

export const setStoredTheme = (
	theme: Theme,
	storage: Pick<Storage, "setItem"> | undefined = getClientStorage(),
) => {
	try {
		storage?.setItem(THEME_STORAGE_KEY, theme);
	} catch {
		// Ignore storage errors in restricted browsing contexts.
	}
};

export const getSystemTheme = (
	matchMedia: typeof window.matchMedia | undefined = getClientMatchMedia(),
): Theme => {
	try {
		return matchMedia?.(DARK_THEME_QUERY).matches ? "dark" : "light";
	} catch {
		return "light";
	}
};

export const getPreferredTheme = ({
	storage = getClientStorage(),
	matchMedia = getClientMatchMedia(),
}: {
	storage?: Pick<Storage, "getItem">;
	matchMedia?: typeof window.matchMedia;
} = {}): Theme => getStoredTheme(storage) ?? getSystemTheme(matchMedia);

export const applyTheme = (
	theme: Theme,
	root: HTMLElement | undefined = document.documentElement,
) => {
	if (!root) {
		return;
	}

	root.dataset.theme = theme;
	root.style.colorScheme = theme;
};

export const toggleTheme = (theme: Theme): Theme =>
	theme === "dark" ? "light" : "dark";
