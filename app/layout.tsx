import "../global.css";
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  //metadataBase: new URL('process.env.VERCEL_URL'),
  title: {
    default: "neset.com",
    template: "%s | nesetk.com",
  },
  description: "Team Captain of The Hive and High School Student",
  openGraph: {
    title: "nesetk.com",
    description:
      "Team Captain of The Hive and High School Student",
    url: "nesetk.com",
    siteName: "nesetk.com",
    images: [
      {
        url: "https://nesetk.com/neset.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Neset",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
