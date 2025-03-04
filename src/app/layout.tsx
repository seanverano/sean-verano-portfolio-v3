import type { Metadata } from "next";
import "./globals.css";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Sean Dustin Verano | Portfolio",
  description:
    "Full-stack MERN specialist building results-driven products and services that create value.",
  openGraph: {
    title: "Sean Dustin Verano | Portfolio",
    description:
      "Full-stack MERN specialist building results-driven products and services that create value.",
    url: "https://seanverano.com",
    siteName: "Sean Dustin Verano | Portfolio",
    images: [
      {
        url: "https://i.imgur.com/PuUUIGx.png",
        alt: "Sean Dustin Verano Portfolio Preview",
      },
    ],
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      { url: "/favicon/apple-touch-icon.png", rel: "apple-touch-icon" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="description"
          content="Full-stack MERN specialist building results-driven products and services that create value."
        />
        <meta
          name="keywords"
          content="Full-stack developer, MERN, React, Node.js, MongoDB, JavaScript, Portfolio"
        />
        <meta name="author" content="Sean Dustin Verano" />

        <meta property="og:title" content="Sean Dustin Verano | Portfolio" />
        <meta
          property="og:description"
          content="Full-stack MERN specialist building results-driven products and services that create value."
        />
        <meta property="og:image" content="https://i.imgur.com/PuUUIGx.png" />
        <meta property="og:url" content="https://seanverano.com" />
        <meta property="og:type" content="website" />
        {/* Google Analytics Tag so I can track user engagements*/}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-K7V62E8KW5`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-K7V62E8KW5');
      `,
          }}
        />
      </head>
      <body
        className={`antialiased bg-[#ECEFEC] text-stone-900 ${archivo.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
