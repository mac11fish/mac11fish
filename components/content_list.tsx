"use client"

import projectsData from '@/data/projectsDatax'
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
<li className="h-screen"></li>

{projectsData.map((d) => (

<motion.li

    key={d.imgSrc}
    className="mb-48 md:flex "
    variants={imageSection}
    initial="hidden"
    whileInView="visible"

  >


<div  className="w-full md:w-2/3 md:pr-4 space-y-48">

                <Image
                className="object-cover w-full"
                aria-hidden
                src={d.imgSrc as string}
                alt={d.description}
                width={900}
                height={900}
              />

{d.imgArray.map((e:string) => (


<motion.div

key={e}
    variants={imageSection}
    initial="hidden"
    whileInView="visible"

  >
                <Image

                className="object-cover w-full"
                aria-hidden
                src={e as string}
                alt={e}
                width={900}
                height={900}
              />
</motion.div>

        ))}

</div>

<motion.div className=" w-full px-4 pt-4 md:w-1/3 md:max-w-[380px] md:pr-6 md:pl-4 md:fixed md:left-2/3  text-xs "   viewport={{ once: true}}>
              <h2 className="">{d.title}</h2>
<p className="">{d.description}</p>

                </motion.div>

              </motion.li>

        ))}

      </ul>   




<svg height="8" width="216" className="stroke-[#f0f] stroke-[6px] mx-auto max-w-7xl fixed bottom-[72px] right-6">
  <motion.line x1="216" y1="0" x2="0" y2="0" style={{ pathLength: scaleX }}/>
<line x1="216" y1="0" x2="0" y2="0" className="opacity-25"/>
</svg>



</>
    
  )
}

