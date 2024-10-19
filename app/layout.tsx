import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import "@/styles/globals.css";
import { ProgressLine } from "@/components/progress_line";
import { Mac11fishLogo } from "@/components/mac11fish_logo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "mac11fish",
  description: "..",
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
<head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#0000ff"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#0000ff" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#00f" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className="text-xs">
        <Link href="/">
          <Mac11fishLogo />
        </Link>
        <ProgressLine />

        {children}

        <div className="p-6 pb-48">
          <ul>
            <li>
              <Link href="https://github.com/mac11fish" target="_blank">
                https://github.com/mac11fish
              </Link>
            </li>
            <li>
              © 2024. This work is openly licensed via{" "}
              <a href="https://creativecommons.org/licenses/by/4.0">
                CC BY 4.0.
              </a>
            </li>
          </ul>
        </div>
      </body>
    </html>
  );
}
