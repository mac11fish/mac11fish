"use client"

import * as React from "react"

import projectsData from '@/data/projectsData'
import Image from "next/image"



export function ContentList() {

  return (
    <div className="w-full max-w-7xl h-full"
    >
      <ul className="-mt-1 h-screen">

            <li className="h-screen">
            </li>
{projectsData.map((d) => (
              <li key={d.imgSrc} className="pt-1 md:flex ">
                <Image
                className="object-cover w-full md:w-3/4 md:pr-4"
                aria-hidden
                src={d.imgSrc as string}
                alt={d.description}
                width={900}
                height={900}
              />

                <div className=" w-full md:w-1/4 md:pt-24 text-xs ">
              <h2 className="">{d.title}</h2>
<p className="">{d.description}</p>
                </div>
              </li>

        ))}

<li className="h-screen">
            </li>


      </ul>


    </div>
  )
}

