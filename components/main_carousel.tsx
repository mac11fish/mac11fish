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
      <CarouselContent className="-mt-1 h-screen bg-black">
       
{projectsData.map((d) => (
              <CarouselItem key={d.imgSrc} className="pt-1 flex space-x-6">
                <Image
                className="object-cover "
                aria-hidden
                src={d.imgSrc as string}
                alt={d.description}
                width={900}
                height={900}
              />
              <h2 className="pt-24">{d.title}</h2>

              </CarouselItem>

        ))}
      </CarouselContent>

<div className="fixed w-[300px] top-6 left-[927px] flex space-x-12">
      <CarouselPrevious />
      <CarouselNext />
</div>
    </Carousel>
  )
}

