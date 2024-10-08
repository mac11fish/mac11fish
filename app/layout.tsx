import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const degularVariable = localFont({
  src: "./fonts/ohno_degular/DegularVariable.woff2",
  variable: "--font-degular-sans",
  weight: "100 900",
});
const degularMono = localFont({
  src: "./fonts/ohno_degular/DegularMono-Regular.woff2",
  variable: "--font-degular-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "mac11fish",
  description: "..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
