"use client"

import * as React from "react"
 import Fade from "embla-carousel-fade"
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

 
    // fade plugin    
    const plugin = React.useRef(
    Fade()
  )

  return (
    <Carousel
opts={{
        align: "start",
      }}
      orientation="vertical"
      plugins={[plugin.current]}
      className="w-full max-w-7xl h-full"
    >
      <CarouselContent className="-mt-1 h-screen">
       <CarouselItem></CarouselItem>
{projectsData.map((d) => (
              <CarouselItem key={d.imgSrc} className="pt-1 md:flex ">
                <Image
                className="object-cover w-full md:w-3/4 md:pr-4"
                aria-hidden
                src={d.imgSrc as string}
                alt={d.description}
                width={900}
                height={900}
              />

                <div className="md:absolute w-full md:w-1/4 md:left-3/4 md:pt-24 text-xs ">
              <h2 className="">{d.title}</h2>
<p className="">{d.description}</p>
                </div>
              </CarouselItem>

        ))}

    <CarouselItem></CarouselItem>
      </CarouselContent>

<div className="absolute w-1/4   top-6 left-3/4 flex space-x-12">
      <CarouselPrevious className="border-0 bg-[#ff00ff] text-[#ffffff] active:bg-[#000000] hover:bg-[#ff00ff] hover:text-[#FFFFFF] rounded-none" />
      <CarouselNext className="border-0 bg-[#ff00ff] text-[#ffffff] active:bg-[#000000] hover:bg-[#ff00ff] hover:text-[#FFFFFF] rounded-none" />
</div>
    </Carousel>
  )
}

