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
    className="py-[180px] md:flex "
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

<motion.div className=" w-full md:w-1/4 text-xs "   viewport={{ once: true}}>
              <h2 className="">{d.title}</h2>
<p className="">{d.description}</p>
                </motion.div>

              </motion.li>

        ))}



      </ul>   




<motion.div className="progress-bar bg-[#f0f] w-1/4 h-4 fixed top-0 right-0" style={{ scaleX: scaleX }} />



</>
    
  )
}

