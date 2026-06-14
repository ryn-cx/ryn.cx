// TODO: Validate
import { DateTime } from "luxon";

export default function(eleventyConfig) {
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
	});

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat('yyyy-LL-dd');
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	// Return the smallest number argument
	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	// Sort a collection by `priority` front matter (lowest tier number first, i.e.
	// Tier 1 before Tier 2), then by date (newest first) to break ties.
	eleventyConfig.addFilter("sortByPriority", (collection) => {
		return [...collection].sort((a, b) =>
			((a.data.priority ?? 0) - (b.data.priority ?? 0)) || (b.date - a.date)
		);
	});

	// Group a collection into tiers by `priority` front matter. Returns an array
	// of groups (lowest tier number first, i.e. Tier 1 before Tier 2), each group
	// being the list of projects sharing that priority, sorted newest first within
	// the tier.
	eleventyConfig.addFilter("groupByPriority", (collection) => {
		const sorted = [...collection].sort((a, b) =>
			((a.data.priority ?? 0) - (b.data.priority ?? 0)) || (b.date - a.date)
		);
		const groups = [];
		let current = null;
		for (const project of sorted) {
			const priority = project.data.priority ?? 0;
			if (!current || current.priority !== priority) {
				current = { priority, projects: [] };
				groups.push(current);
			}
			current.projects.push(project);
		}
		return groups;
	});

	// Return the keys used in an object
	eleventyConfig.addFilter("getKeys", target => {
		return Object.keys(target);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "posts"].indexOf(tag) === -1);
	});

	eleventyConfig.addFilter("sortAlphabetically", strings =>
		(strings || []).sort((b, a) => b.localeCompare(a))
	);
};
