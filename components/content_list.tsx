"use client"

import projectsData from '@/data/projectsData'
import Image from "next/image"

import { motion, useScroll, useSpring } from "framer-motion";






export function ContentList() {

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


const imageSection = {
  hidden: { opacity: 0.2 },
  visible: {
    opacity: 1,

    transition: {
duration: 0.2,
delay: .2,
      delayChildren: 0,
      staggerChildren: 0
    }
  }
};


  return (

<>


      
<ul className="">

{projectsData.map((d) => (
<motion.li

    key={d.imgSrc}
    className="my-24 md:my-4 md:flex "
    variants={imageSection}
    initial="hidden"
    whileInView="visible"

  >



                <Image
                className="object-cover w-full md:w-3/4 md:pr-4"
                aria-hidden
                src={d.imgSrc as string}
                alt={d.description}
                width={900}
                height={900}
              />

<motion.div className=" w-full px-4 pt-4 md:w-1/4 md:px-0 text-xs "   viewport={{ once: true}}>
              <h2 className="">{d.title}</h2>
<p className="">{d.description}</p>

                </motion.div>

              </motion.li>

        ))}



      </ul>   



<div class="max-w-7xl">
<svg height="12" width="300" className="stroke-[#f0f] stroke-[6px] mx-auto max-w-7xl fixed bottom-24 right-6">
  <motion.line x1="300" y1="0" x2="0" y2="0" style={{ pathLength: scaleX }}/>
<line x1="300" y1="0" x2="0" y2="0" className="opacity-25"/>
</svg>
</div>


 <svg height="200" width="300" className="stroke-[#f0f] w-1/4 fixed top-24 right-0">
  <line x1="0" y1="0" x2="300" y2="200" />
</svg> 



</>
    
  )
}

