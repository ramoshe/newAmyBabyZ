import { useSanityClient } from "@sanity/astro";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset } from "@sanity/types";
import groq from "groq";

// SLIDESHOW
export async function getImages(): Promise<slideshow> {
  return await useSanityClient().fetch(
    groq`*[_id == "slideshow"]`
  );
}

export interface slideshow {
  images: ImageAsset[];
}

// ABOUT PAGE
export async function getAbout(): Promise<about> {
  return await useSanityClient().fetch(
    groq`*[_id == "about"]`
  );
}

export interface about {
  name: string;
  age: string;
  location: string;
  favorites: PortableTextBlock[];
  hates: PortableTextBlock[];
  stream: PortableTextBlock[];
  gamertags: object[];
}

// SHOUTOUTS
export async function getShoutouts(): Promise<shoutouts> {
  return await useSanityClient().fetch(
    groq`*[_id == "shoutouts"]`
  );
}

export interface shoutouts {
  shoutouts: object[];
}
