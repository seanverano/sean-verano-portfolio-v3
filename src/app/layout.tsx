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
  title: "Sean Dustin Verano | Developer Portfolio",
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
      </head>
      <body
        className={`antialiased bg-[#ECEFEC] text-stone-900 ${archivo.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
