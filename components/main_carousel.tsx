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
  const plugin = React.useRef(
    Fade()
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-2xl"
    >
      <CarouselContent>
       
{projectsData.map((d) => (
              <CarouselItem key={d.imgSrc}>
                <Image
                className="object-cover "
                aria-hidden
                src={d.imgSrc as string}
                alt={d.description}
                width={900}
                height={900}
              />
              <h2>{d.title}</h2>

              </CarouselItem>

        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

