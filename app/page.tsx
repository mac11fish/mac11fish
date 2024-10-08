

import { Mac11fishLogo } from '@/components/Mac11fishLogo'
import { ContentList } from '@/components/content_list'


export default function Home() {
  return (
    <>
    <div className="h-3 w-60 fixed top-6 left-6 z-[100]">

<Mac11fishLogo />
</div>

  <main className="flex h-screen">
         

<ContentList/>


</main> 
</>

  );
}
