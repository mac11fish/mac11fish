
"use client"

import { motion, useScroll, useSpring } from "framer-motion";


export function ProgressLine() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  return (
<>
<label className="swap fixed bottom-[150px] right-6 z-[100] text-[12px]">
  <input type="checkbox" className="theme-controller" value="lightx" />
  <div className="swap-on text-right">Light</div>
  <div className="swap-off text-right">Dark</div>
</label>

<svg height="8" width="216" className="stroke-current fixed bottom-[120px] right-6 z-[100]">
  <motion.line x1="216" y1="0" x2="0" y2="0" className="stroke-[6px]" style={{ pathLength: scaleX }}/>
<line x1="216" y1="0" x2="0" y2="0" className="opacity-100 stroke-[1px]"/>
</svg>
  </>  
  )
}

