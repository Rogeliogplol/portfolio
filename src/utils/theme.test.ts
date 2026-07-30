import { describe, expect, it, vi } from "vitest";
import {
	applyTheme,
	getPreferredTheme,
	getStoredTheme,
	getSystemTheme,
	setStoredTheme,
	toggleTheme,
	type Theme,
} from "./theme";

const createStorage = (initialTheme?: Theme) => {
	const store = new Map<string, string>();

	if (initialTheme) {
		store.set("theme", initialTheme);
	}

	return {
		getItem: vi.fn((key: string) => store.get(key) ?? null),
		setItem: vi.fn((key: string, value: string) => {
			store.set(key, value);
		}),
	} as Pick<Storage, "getItem" | "setItem">;
};

describe("theme helpers", () => {
	it("returns only valid stored themes", () => {
		expect(getStoredTheme(createStorage("dark"))).toBe("dark");
		expect(getStoredTheme(createStorage("light"))).toBe("light");
		expect(
			getStoredTheme({ getItem: () => "blue" } as Pick<Storage, "getItem">),
		).toBeNull();
	});

	it("falls back to system preference when there is no stored theme", () => {
		const storage = createStorage();
		const matchMedia = vi.fn(() => ({ matches: true }) as MediaQueryList);

		expect(getPreferredTheme({ storage, matchMedia })).toBe("dark");
		expect(matchMedia).toHaveBeenCalledWith("(prefers-color-scheme: dark)");
	});

	it("prefers stored theme over system preference", () => {
		const storage = createStorage("light");
		const matchMedia = vi.fn(() => ({ matches: true }) as MediaQueryList);

		expect(getPreferredTheme({ storage, matchMedia })).toBe("light");
	});

	it("persists and applies themes safely", () => {
		const storage = createStorage();
		const root = document.createElement("html");

		setStoredTheme("dark", storage);
		applyTheme("dark", root);

		expect(storage.setItem).toHaveBeenCalledWith("theme", "dark");
		expect(root.dataset.theme).toBe("dark");
		expect(root.style.colorScheme).toBe("dark");
	});

	it("toggles between light and dark themes", () => {
		expect(toggleTheme("light")).toBe("dark");
		expect(toggleTheme("dark")).toBe("light");
	});

	it("uses light as the safe system fallback when matchMedia is unavailable", () => {
		expect(getSystemTheme()).toBe("light");
	});

	it("ignores storage read and write errors", () => {
		const throwingStorage = {
			getItem: vi.fn(() => {
				throw new Error("blocked storage");
			}),
			setItem: vi.fn(() => {
				throw new Error("blocked storage");
			}),
		} as Pick<Storage, "getItem" | "setItem">;

		expect(getStoredTheme(throwingStorage)).toBeNull();
		expect(() => setStoredTheme("dark", throwingStorage)).not.toThrow();
	});

	it("uses light as the safe system fallback when matchMedia throws", () => {
		const matchMedia = vi.fn(() => {
			throw new Error("blocked media query");
		}) as typeof window.matchMedia;

		expect(getSystemTheme(matchMedia)).toBe("light");
	});
});
