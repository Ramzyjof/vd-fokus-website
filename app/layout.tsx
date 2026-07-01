import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vdfokus.co.id"),

  title: {
    default: "VD Fokus | Executive Search & HR Solutions",
    template: "%s | VD Fokus",
  },

  description:
    "VD Fokus is an Executive Search, Psychological Assessment, Outsourcing, and HR Consulting company helping organizations hire the right talent since 2003.",

  keywords: [
    "VD Fokus",
    "Executive Search Indonesia",
    "Headhunter Indonesia",
    "Psychological Assessment",
    "Recruitment Consultant",
    "HR Consultant",
    "Outsourcing",
    "Talent Acquisition",
    "Executive Recruitment",
    "Career Acceleration",
  ],

  applicationName: "VD Fokus",

  authors: [
    {
      name: "VD Fokus",
      url: "https://www.vdfokus.co.id",
    },
  ],

  creator: "VD Fokus",
  publisher: "VD Fokus",

  alternates: {
    canonical: "https://www.vdfokus.co.id",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.vdfokus.co.id",
    siteName: "VD Fokus",
    title: "VD Fokus | Executive Search & HR Solutions",
    description:
      "Executive Search, Psychological Assessment, Outsourcing, and HR Consulting company established in 2003.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VD Fokus",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VD Fokus | Executive Search & HR Solutions",
    description:
      "Executive Search, Psychological Assessment, Outsourcing, and HR Consulting company established in 2003.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VD Fokus",
    url: "https://www.vdfokus.co.id",
    logo: "https://www.vdfokus.co.id/logo.png",
    description:
      "Executive Search, Psychological Assessment, Outsourcing, and HR Consulting company established in 2003.",
    sameAs: [
      "https://www.linkedin.com/",
      "https://www.instagram.com/",
      "https://www.facebook.com/",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>

      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}