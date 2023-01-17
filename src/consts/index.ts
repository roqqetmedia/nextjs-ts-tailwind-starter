import { SITE_URL } from "@/config";

export const siteMetadata = {
  siteName: "Roqqet Media NextJS Starter",
  siteUrl: SITE_URL,
};

export const year = new Date().getFullYear();

export const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};
