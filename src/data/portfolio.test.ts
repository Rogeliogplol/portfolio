import { describe, expect, it } from 'vitest';
import { experience } from './portfolio';

describe('experience technology summaries', () => {
	it('keeps technologies unique within each career stage', () => {
		for (const stage of experience) {
			expect(stage.technologies.length).toBeGreaterThan(0);
			expect(new Set(stage.technologies).size).toBe(stage.technologies.length);
		}
	});

	it('maps the two iEditorial periods to distinct technology summaries', () => {
		const later = experience.find((stage) => stage.period === 'Febrero 2017 — Junio 2019');
		const earlier = experience.find((stage) => stage.period === 'Agosto 2016 — Febrero 2017');

		expect(later?.company).toBe('iEditorial');
		expect(earlier?.company).toBe('iEditorial');
		expect(later?.technologies).toContain('Vue');
		expect(earlier?.technologies).toContain('Symfony');
		expect(later?.technologies).not.toContain('Symfony');
		expect(earlier?.technologies).not.toContain('Vue');
	});
});
