import { afterEach, describe, expect, it, vi } from 'vitest';
import { initializeScrollReveal } from './scrollReveal';

const createPage = () => {
	const page = document;
	page.body.innerHTML = '<div data-reveal>Profile <a href="#contacto">Contact</a></div>';
	return page;
};

describe('scroll reveal', () => {
	afterEach(() => {
		vi.unstubAllGlobals();
		vi.restoreAllMocks();
		document.body.innerHTML = '';
	});

	it('keeps content available without IntersectionObserver', () => {
		vi.stubGlobal('IntersectionObserver', undefined);
		const page = createPage();
		initializeScrollReveal(page);
		expect(page.querySelector('[data-reveal]')?.classList.contains('reveal-pending')).toBe(false);
	});

	it('keeps content available under reduced motion', () => {
		const page = createPage();
		vi.spyOn(page.defaultView!, 'matchMedia').mockReturnValue({ matches: true } as MediaQueryList);
		const observer = vi.fn();
		vi.stubGlobal('IntersectionObserver', observer);
		initializeScrollReveal(page);
		expect(observer).not.toHaveBeenCalled();
	});

	it('hides only upcoming content and restores it on entry', () => {
		const page = createPage();
		const target = page.querySelector<HTMLElement>('[data-reveal]')!;
		vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({ top: 2000 } as DOMRect);
		vi.spyOn(page.defaultView!, 'matchMedia').mockReturnValue({ matches: false } as MediaQueryList);
		const unobserve = vi.fn();
		const observe = vi.fn();
		let notify!: IntersectionObserverCallback;
		vi.stubGlobal('IntersectionObserver', class {
			constructor(callback: IntersectionObserverCallback) { notify = callback; }
			observe = observe;
			unobserve = unobserve;
		});
		initializeScrollReveal(page);
		expect(target.classList.contains('reveal-pending')).toBe(true);
		expect(observe).toHaveBeenCalledWith(target);
		notify([{ target, isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver);
		expect(target.classList.contains('reveal-pending')).toBe(false);
		expect(unobserve).toHaveBeenCalledWith(target);
	});

	it('never conceals content already on screen', () => {
		const page = createPage();
		const target = page.querySelector<HTMLElement>('[data-reveal]')!;
		vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({ top: 0 } as DOMRect);
		vi.spyOn(page.defaultView!, 'matchMedia').mockReturnValue({ matches: false } as MediaQueryList);
		vi.stubGlobal('IntersectionObserver', class {
			observe = vi.fn();
		});
		initializeScrollReveal(page);
		expect(target.classList.contains('reveal-pending')).toBe(false);
	});
});
