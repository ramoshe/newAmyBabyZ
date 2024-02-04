import {defineField, defineType} from 'sanity';

export default defineType({
	name: "shoutouts",
	title: "Shoutouts",
	type: "document",
	fields: [
		{
			name: "shouts",
			title: "Shoutouts",
			type: "array",
			options: { sortable: true },
			of: [
				{
					type: "object",
					title: "Shoutout",
					fields: [
						{
							name: "image",
							type: "image",
							title: "Image",
							options: { hotspot: true },
						},
						{
							name: "name",
							title: "Name",
							type: "string",
						},
						{
							name: "blurb",
							title: "Blurb",
							type: "text",
							rows: 3,
						},
						{
							name: "link",
							title: "Link",
							type: "url",
						},
						{
							name: "linktext",
							title: "Link Text",
							type: "string",
						},
					],
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
				title: "Shoutouts",
			};
		},
	},
});
