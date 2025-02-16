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
    "Full-stack MERN specialist building premium and results driven products that create value.",
  icons: {
    icon: "/favicon.ico",
  },
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
        {/* Google Analytics Tag so I can trac user engagements*/}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-YOUR_MEASUREMENT_ID`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YOUR_MEASUREMENT_ID');
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
