

import { Mac11fishLogo } from '@/components/Mac11fishLogo'
import { ContentList } from '@/components/content_list'


export default function Home() {
  return (
    <>
    <div className="h-3 fixed bottom-6 right-6 z-[100]">

<Mac11fishLogo />
</div>

  <main className="w-full h-screen mx-auto">


<ContentList/>


</main> 
</>

  );
}
