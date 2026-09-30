import { describe, expect, it } from 'vitest';
import { getActiveSection, type SectionPosition } from './activeSection';

const sections: SectionPosition[] = [
	{ id: 'perfil', top: 600 },
	{ id: 'experiencia', top: 1800 },
	{ id: 'formacion', top: 3200 },
	{ id: 'contacto', top: 4000 },
];
const activeAt = (scrollY: number, viewportHeight = 800, documentHeight = 4800) =>
	getActiveSection(sections, scrollY, 72, viewportHeight, documentHeight);

describe('active navigation section', () => {
	it('has no active text link in the hero or exactly before the first section', () => {
		expect(activeAt(0)).toBeNull();
		expect(activeAt(526)).toBeNull();
	});

	it('activates a linked section when its top crosses the header', () => {
		expect(activeAt(527)).toBe('perfil');
		expect(activeAt(1727)).toBe('experiencia');
		expect(activeAt(3127)).toBe('formacion');
	});

	it('activates an anchor at the computed scroll-padding offset, not immediately before it', () => {
		// 5.5rem at a 16px root font size places the section 88px below the viewport top.
		expect(getActiveSection(sections, 1712, 72, 800, 4800, 88)).toBe('experiencia');
		expect(getActiveSection(sections, 1711, 72, 800, 4800, 88)).toBe('perfil');
		// A responsive root font size can make the same rem offset larger.
		expect(getActiveSection(sections, 1690, 72, 800, 4800, 110)).toBe('experiencia');
		expect(getActiveSection(sections, 1689, 72, 800, 4800, 110)).toBe('perfil');
	});

	it('keeps the previous linked section active through an unlinked section', () => {
		expect(activeAt(1200)).toBe('perfil');
		expect(activeAt(3126)).toBe('experiencia');
	});

	it('tracks both short final sections as they enter the reading area before their tops can reach the header', () => {
		// Maximum scroll is 3100; neither top can reach the 88px anchor/header line.
		const shortSections = [
			{ id: 'perfil', top: 600 },
			{ id: 'experiencia', top: 1800 },
			{ id: 'formacion', top: 3200 },
			{ id: 'contacto', top: 3470 },
		];
		const at = (y: number) => getActiveSection(shortSections, y, 72, 800, 3900, 88);
		expect(at(2749)).toBe('experiencia');
		expect(at(2750)).toBe('formacion');
		expect(at(2884)).toBe('formacion');
		expect(at(2885)).toBe('contacto');
		expect(at(3100)).toBe('contacto');

		// Even a section beyond the old viewport midpoint gets its own
		// visible interval before the bottom.
		const veryShortContact = shortSections.map((section) =>
			section.id === 'contacto' ? { ...section, top: 3750 } : section,
		);
		expect(getActiveSection(veryShortContact, 3024, 72, 800, 3900, 88)).toBe('formacion');
		expect(getActiveSection(veryShortContact, 3025, 72, 800, 3900, 88)).toBe('contacto');
	});

	it('gives each visible unreachable final section a scroll interval in a tall viewport', () => {
		const tallViewportSections = [
			{ id: 'perfil', top: 600 },
			{ id: 'experiencia', top: 1800 },
			{ id: 'formacion', top: 4450 },
			{ id: 'contacto', top: 4680 },
		];
		const at = (y: number) => getActiveSection(tallViewportSections, y, 72, 1400, 5000, 88);
		// Max scroll is 3600; both final tops remain below the anchor line.
		expect(at(3324)).toBe('experiencia');
		expect(at(3325)).toBe('formacion');
		expect(at(3439)).toBe('formacion');
		expect(at(3440)).toBe('contacto');
		expect(at(3600)).toBe('contacto');
	});

	it('preserves a visible interval across the reachable-anchor boundary', () => {
		const boundarySections = [
			{ id: 'perfil', top: 600 },
			{ id: 'experiencia', top: 1800 },
			{ id: 'formacion', top: 3688 },
			{ id: 'contacto', top: 3800 },
		];
		const at = (y: number) => getActiveSection(boundarySections, y, 72, 1400, 5000, 88);
		// Max scroll is 3600: Formación reaches the anchor; Contacto cannot.
		expect(at(2943)).toBe('experiencia');
		expect(at(2944)).toBe('formacion');
		expect(at(2999)).toBe('formacion');
		expect(at(3000)).toBe('contacto');
		expect(at(3600)).toBe('contacto');
	});

	it('only selects a final section at the bottom when it is actually visible', () => {
		expect(activeAt(3800, 800, 4600)).toBe('contacto');
		expect(activeAt(3499, 800, 4600)).toBe('formacion');
		expect(activeAt(3500, 800, 4600)).toBe('contacto');
		const offscreen = [
			{ id: 'perfil', top: 600 },
			{ id: 'contacto', top: 4700 },
		];
		expect(getActiveSection(offscreen, 3800, 72, 800, 4600)).toBe('perfil');
		expect(getActiveSection([{ id: 'contacto', top: 4600 }], 3800, 72, 800, 4600)).toBeNull();
	});

	it('uses the anchor threshold when a short viewport makes final anchors reachable', () => {
		const narrowViewport = [{ id: 'formacion', top: 4450 }, { id: 'contacto', top: 4680 }];
		expect(getActiveSection(narrowViewport, 4361, 72, 100, 5000, 88)).toBeNull();
		expect(getActiveSection(narrowViewport, 4362, 72, 100, 5000, 88)).toBe('formacion');
		expect(getActiveSection(narrowViewport, 4592, 72, 100, 5000, 88)).toBe('contacto');
	});

	it('does not force the last link at initial load on a short page', () => {
		expect(activeAt(0, 5000, 4800)).toBeNull();
		expect(getActiveSection([], 500, 72, 800, 1000)).toBeNull();
	});
});
