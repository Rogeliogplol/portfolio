export function initializeScrollReveal(root: Document = document): void {
	const view = root.defaultView;
	if (!view || typeof IntersectionObserver === 'undefined' || view.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
		return;
	}

	const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
	if (!targets.length) return;

	const observer = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			if (!entry.isIntersecting) continue;
			entry.target.classList.remove('reveal-pending');
			observer.unobserve(entry.target);
		}
	}, { rootMargin: '0px 0px -8% 0px' });

	for (const target of targets) {
		// Never conceal content already in view, including an initial anchor destination.
		if (target.getBoundingClientRect().top > view.innerHeight * 0.92) {
			target.classList.add('reveal-pending');
		}
		observer.observe(target);
	}
}
