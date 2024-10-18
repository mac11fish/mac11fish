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

<div className="footer border-t-1 p-6 pb-48 text-xs">

<ul>
<li>https://github.com/mac11fish/mac11.fish</li>
<li>© 2024. This work is openly licensed via <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0.</a></li>
</ul>

</div>
      </body>
    </html>
  )
}
