import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourleila.com"),
  title: "@your_leila_",
  description:
    "Chat with Leila 24/7 on Fanvue. Exclusive content and direct messages.",
  openGraph: {
    title: "@your_leila_",
    description:
      "Chat with Leila 24/7 on Fanvue. Exclusive content and direct messages.",
    type: "website",
    images: [{ url: "/leila-bg.jpg", width: 1200, height: 630, alt: "@your_leila_" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "@your_leila_",
    description:
      "Chat with Leila 24/7 on Fanvue. Exclusive content and direct messages.",
    images: ["/leila-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
