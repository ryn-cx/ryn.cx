// TODO: Validate
import fs from "node:fs";
import path from "node:path";
import { codeToHtml } from "shiki";

const SHIKI_THEME = "one-dark-pro";

export default {
	tags: [
		"projects"
	],
	"layout": "layouts/project.njk",
	eleventyComputed: {
		codeContent: (data) => {
			if (!data.code) return null;
			const dir = path.dirname(data.page.inputPath);
			return fs.readFileSync(path.join(dir, data.code), "utf8");
		},
		codeContentHtml: async (data) => {
			if (!data.code) return null;
			const dir = path.dirname(data.page.inputPath);
			const content = fs.readFileSync(path.join(dir, data.code), "utf8");
			return await codeToHtml(content.trim(), { lang: "python", theme: SHIKI_THEME });
		},
	},
};
