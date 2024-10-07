

import { Mac11fishLogo } from '@/components/Mac11fishLogo'
import { MainCarousel } from '@/components/main_carousel'


export default function Home() {
  return (
    <>
    <div className="h-3 w-60 fixed top-6 left-6 z-[100]">

<Mac11fishLogo />
</div>

  <main className="flex h-screen">
    

  <div className="max-w-[900px] px-6 m-auto space-y-12">
  
     

<MainCarousel/>

   </div>

</main> 
</>

  );
}
