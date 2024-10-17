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

<div className="footer bg-base-content text-base-100 p-6">
https://github.com/mac11fish/mac11.fish
© 2024. This work is openly licensed via <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0.</a>
</div>
      </body>
    </html>
  )
}
