export const metaTitle = "Roqqet Media";
export const metaDesc = "NextJS starter template";

export const ogSize = {
  width: 1600,
  height: 800,
};

export const ogImageProps = {
  ...ogSize,
  alt: "Roqqet Media",
  contentType: "image/png",
};

export const defaultOpenGraph = {
  siteName: "Roqqet Media",
  images: [
    {
      url: "/images/og.png",
      ...ogImageProps,
    },
  ],
  locale: "en_GB",
  type: "website",
};

export const defaultTwitter = {
  card: "summary_large_image",
  images: [
    {
      url: "/images/og.png",
      ...ogImageProps,
    },
  ],
};

export const currentYear = new Date().getFullYear();

export const staggerContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const fadeUpAnimationVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};
