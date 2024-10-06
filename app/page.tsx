

import { Mac11fishLogo } from '@/components/Mac11fishLogo'
import { MainCarousel } from '@/components/main_carousel'


export default function Home() {
  return (
    <>
    <div className="w-30 absolute top-12 left-8 z-[100]">

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
