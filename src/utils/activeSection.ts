export type SectionPosition = { id: string; top: number };

/** Follow the anchor line normally; phase in end sections that cannot reach it. */
export function getActiveSection(
	sections: readonly SectionPosition[],
	scrollY: number,
	headerHeight: number,
	viewportHeight: number,
	documentHeight: number,
	scrollPaddingTop = 0,
): string | null {
	if (sections.length === 0) return null;

	const anchorOffset = Math.max(headerHeight + 1, scrollPaddingTop);
	// A tall viewport alone must not activate a link while the hero is at the top.
	if (scrollY <= 0 && sections[0].top > anchorOffset) return null;
	const maxScroll = Math.max(0, documentHeight - viewportHeight);
	let current: string | null = null;
	for (const section of sections) {
		// A section starting past the document cannot become visible.
		if (section.top >= documentHeight) break;
		// Use the earlier of the anchor and midpoint transitions for every section.
		// Both thresholds increase with top, including across the reachable boundary.
		const activationScroll = Math.min(
			section.top - anchorOffset,
			(section.top - viewportHeight + maxScroll) / 2,
		);
		if (scrollY < activationScroll) break;
		current = section.id;
	}
	return current;
}
