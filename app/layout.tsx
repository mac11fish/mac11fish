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

      <body className="text-xs">
<Link href="/">
        <Mac11fishLogo />
</Link>
        <ProgressLine />

        <div className="">{children}</div>

<div className="p-6 pb-48">

<ul>
<li>
<Link href="https://github.com/mac11fish" target="_blank">
        https://github.com/mac11fish
</Link>
</li>
<li>© 2024. This work is openly licensed via <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0.</a></li>
</ul>

</div>
      </body>
    </html>
  )
}
