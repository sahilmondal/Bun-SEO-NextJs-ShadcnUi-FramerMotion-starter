const currentUrl = process.env.NEXT_PUBLIC_WEBSITE_URL as string;
export const siteConfig = {
  title: "Next-tailwind-shadcn-motion-SEO-template",
  siteName: "Site Name",
  description: "Meta description",
  url: currentUrl ? currentUrl : "http://localhost:3000",
  keywords: ["tags", "tags"],
  logoURL: "/assets/logo.png",
  ogImage: "/assets/og.png",
};
