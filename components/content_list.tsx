"use client"

import projectsData from '@/data/projectsData'
import Image from "next/image"
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./styles.css";






export function ContentList() {


const ref = useRef(null)
const { scrollYProgressy } = useScroll({
  target: ref,
  offset: ["start end", "end end"]
})



  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const imageSection = {
  hidden: { opacity: 0.2 },
  visible: {
    opacity: 1,

    transition: {
duration: 0.5,
delay: .2,
      delayChildren: 1,
      staggerChildren: 2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


  return (

<>

<svg id="progress" className="progress z-[1000]" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ opacity: scrollYProgressy }}
            />
          </svg>

<div className="w-full max-w-7xl h-full">
      
<ul className="-mt-1 h-screen ">

  
{projectsData.map((d) => (
<motion.li
ref={ref}
    key={d.imgSrc}
    className="py-[300px] md:flex "
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

<motion.div className=" w-full md:w-1/4 text-xs " variants={item}>
              <h2 className="">{d.title}</h2>
<p className="">{d.description}</p>
                </motion.div>

<svg id="progress" className="sticky z-[1000]" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ opacity: scrollYProgressy }}
            />
          </svg>

              </motion.li>

        ))}



      </ul>   


    </div>

<motion.div className="progress-bar bg-black w-full h-8 fixed top-0 left-0" style={{ scaleX }} />
<div className="">  
  
    <motion.ul
    className="container"
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={
      { once: true}
    }
  >
    {[0, 1, 2, 3].map((index) => (
      <motion.li key={index} className="item" variants={item} />
    ))}
  </motion.ul>





</div>
</>
    
  )
}

