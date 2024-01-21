import {defineField, defineType} from 'sanity';

export default defineType({
	name: "about",
	title: "About",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
		}),
		defineField({
			name: "age",
			title: "Age",
			type: "string",
		}),
		defineField({
			name: "location",
			title: "Location",
			type: "string",
		}),
		{
			name: "favorites",
			title: "My Favorite Things",
			type: "text",
			rows: 2,
		},
		{
			name: "hates",
			title: "Things I Hate",
			type: "text",
			rows: 2,
		},
		{
			name: "stream",
			title: "Why I Stream",
			type: "text",
			rows: 2,
		},
		{
			name: "gamertags",
			title: "Gamer Tags",
			type: "array",
			of: [
				{
					type: "object",
					title: "Gamer Tag",
					fields: [
						{
							name: "platform",
							title: "Platform",
							type: "string",
						},
						{
							name: "tag",
							title: "Tag",
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
				title: "About Page Info",
			};
		},
	},
});
