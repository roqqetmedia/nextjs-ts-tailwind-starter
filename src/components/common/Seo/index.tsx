import Head from "next/head";
import { siteMetadata } from "@/consts";

interface SeoProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

export function Seo({
  title,
  description = "NextJS starter template",
  canonicalUrl,
}: SeoProps) {
  return (
    <Head>
      <title>
        {title ? `${title} - ${siteMetadata.siteName}` : siteMetadata.siteName}
      </title>

      <link rel="icon" href="/favicon.ico" />
      <link
        rel="canonical"
        href={
          canonicalUrl
            ? `${siteMetadata.siteUrl}${canonicalUrl}`
            : siteMetadata.siteUrl
        }
      />

      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta
        property="og:logo"
        content={`${siteMetadata.siteUrl}/logo.svg`}
      ></meta>
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteMetadata.siteName} />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
}
