import {defineField, defineType} from 'sanity'

export default defineType({
	name: "slideshow",
	title: "Slideshow",
	type: "document",
	fields: [
		{
			name: "images",
			title: "Slideshow Images",
			type: "array",
			options: { layout: "grid" },
			of: [
				{
					type: "image",
					options: { hotspot: false },
				},
			],
		},
	],
	preview: {
		select: {
			title: "title",
		},
		prepare() {
			return {
				title: "Home Page Slideshow Images",
			};
		},
	},
});
