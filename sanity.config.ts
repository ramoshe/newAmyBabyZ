// Different environments use different variables
const projectId =
  import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID! ||
  import.meta.env.PUBLIC_SANITY_PROJECT_ID!;
const dataset =
  import.meta.env.PUBLIC_SANITY_STUDIO_DATASET! ||
  import.meta.env.PUBLIC_SANITY_DATASET!;

// Feel free to remove this check if you don't need it
if (!projectId || !dataset) {
  throw new Error(
    `Missing environment variable(s). Check if named correctly in .env file.\n\nShould be:\nPUBLIC_SANITY_STUDIO_PROJECT_ID=${projectId}\nPUBLIC_SANITY_STUDIO_DATASET=${dataset}\n\nAvailable environment variables:\n${JSON.stringify(
      import.meta.env,
      null,
      2
    )}`
  );
}

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schema";

import { ImagesIcon } from "@sanity/icons";
import { BinaryDocumentIcon } from "@sanity/icons";
import { CommentIcon } from "@sanity/icons";

export default defineConfig({
	name: "amybabyz",
	title: "AmyBabyZ",
	projectId,
	dataset,
	plugins: [
		deskTool({
			structure: (S) =>
				S.list()
					.title("Content")
					.items([
						S.listItem()
							.title("Slideshow")
							.icon(ImagesIcon)
							.child(
								S.document()
									.schemaType("slideshow")
									.documentId("slideshow")
							),
						S.listItem()
							.title("About Page")
							.icon(BinaryDocumentIcon)
							.child(
								S.document()
									.schemaType("about")
									.documentId("about")
							),
						S.listItem()
							.title("Shoutouts")
							.icon(CommentIcon)
							.child(
								S.document()
									.schemaType("shoutouts")
									.documentId("shoutouts")
							),
						...S.documentTypeListItems().filter(
							(listItem) =>
								![
									"slideshow",
									"about",
									"shoutouts",
								].includes(listItem.getId() ?? "default")
						),
					]),
		}),
		visionTool(),
	],
	schema: {
		types: schemaTypes,
	},
});
