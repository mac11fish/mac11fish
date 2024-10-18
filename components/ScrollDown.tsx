"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollDown() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="p-6 flex text-xs">
        <div> scroll down</div>

        <div className="pl-1 animate-[bounce_0.75s_ease-in-out_infinite]">
          <svg
            className="w-4 h-4 text-current"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </>
  );
}
