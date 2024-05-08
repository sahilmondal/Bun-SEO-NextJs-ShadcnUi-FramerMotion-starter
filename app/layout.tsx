import type { Metadata } from "next";
import { Cabin, Montserrat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

// fonts configuration with tailwindCSS
export const fontPrimary = Montserrat({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700", "900", "800"],
  variable: "--font-primary",
});
export const fontSecondary = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-secondary",
});

// metadata for SEO purpose
export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: siteConfig.logoURL,
    shortcut: siteConfig.logoURL,
    apple: siteConfig.logoURL,
    other: {
      rel: "apple-touch-icon-precomposed",
      url: siteConfig.logoURL,
    },
  },

  keywords: siteConfig.keywords,
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    images: [
      {
        url: siteConfig.ogImage, // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: siteConfig.ogImage, // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "og-image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(siteConfig.url),
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    site: `@_${siteConfig.siteName}`,
    description: siteConfig.description,
    images: siteConfig.ogImage, // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontPrimary.variable,
          fontSecondary.variable,
          "font-primary"
        )}
      >
        {children}
      </body>
    </html>
  );
}
