import '@/styles/globals.css'
import { ProgressLine } from '@/components/progress_line'
import { Mac11fishLogo } from '@/components/mac11fish_logo'
import type { Metadata } from "next";
import Link from "next/link"

export const metadata: Metadata = {
  title: "mac11fish",
  description: "..",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>

      <body>
<Link href="/">
        <Mac11fishLogo />
</Link>
        <ProgressLine />

        <div className="">{children}</div>
      </body>
    </html>
  )
}
