"use client"

import * as React from "react"
// import Fade from "embla-carousel-fade"
import projectsData from '@/data/projectsData'
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export function MainCarousel() {

 /* 
    // fade plugin    
    const plugin = React.useRef(
    Fade()
  )
*/
  return (
    <Carousel
opts={{
        align: "start",
      }}
      orientation="vertical"
     // plugins={[plugin.current]}
      className="w-full max-w-7xl h-full"
    >
      <CarouselContent className="-mt-1 h-screen">
       
{projectsData.map((d) => (
              <CarouselItem key={d.imgSrc} className="pt-1 flex ">
                <Image
                className="object-cover w-3/4 pr-4"
                aria-hidden
                src={d.imgSrc as string}
                alt={d.description}
                width={900}
                height={900}
              />

                <div className="absolute w-1/4 top-30 left-3/4 inset-x-8 pt-24 w-1/4 text-xs ">
              <h2 className="">{d.title}</h2>
                </div>
              </CarouselItem>

        ))}
      </CarouselContent>

<div className="absolute w-1/4   top-6 left-3/4 flex space-x-12">
      <CarouselPrevious className="border-0 bg-[#ff00ff] text-[#ffffff] active:bg-[#000000] hover:text-[#FFFFFF] rounded-none" />
      <CarouselNext className="border-0 bg-[#ff00ff] text-[#ffffff] active:bg-[#000000] hover:text-[#FFFFFF] rounded-none" />
</div>
    </Carousel>
  )
}

