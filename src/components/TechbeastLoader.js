"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TechBeastLoader({ onComplete }) {
  const [showFullName, setShowFullName] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowFullName(true), 6000); // Show "TechBeast" after 3s
    setTimeout(() => onComplete(), 10000); // Remove loader after 5s
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white relative perspective-1000">
      {!showFullName ? (
        <div className="relative w-32 h-32">
       
          <div className="relative w-24 h-24 perspective-1000">
     
      <motion.div
       
      >
      

        <motion.div
         className="absolute w-1/2 h-full flex justify-center items-center text-6xl font-bold text-blue-500"
        animate={{
         rotateY: [0, 180, 360], // Full rotation
        x: [0,-50,-90,0,50,90,0], // Wobble effect 
      scale: [1,0.2,1],
      opacity: [1, 0.6, 1],
        }}
        transition={{
          duration: 3,
          delay:1, // Total duration of rotation
          repeat: Infinity, // Infinite loop
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],// Sync movement with rotation
        }}
        style={{
          transformStyle: "preserve-3d", // Enables 3D depth
        }}
        >
          B

        </motion.div>
        <motion.div
          className="absolute w-1/2 h-full flex justify-center items-center text-6xl font-bold text-red-500"
         
        animate={{
         rotateY: [0, 180, 360], // Full rotation
        x: [0,-50,-90,0,50,90,0], // Wobble effect 
      scale: [1,0.2,1],
      opacity: [1, 0.6, 1],
        }}
        transition={{
          duration: 3, // Total duration of rotation
          repeat: Infinity, // Infinite loop
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],// Sync movement with rotation
        }}
        style={{
          transformStyle: "preserve-3d", // Enables 3D depth
        }}
        >
          T
        </motion.div>

      
      </motion.div>
    </div>
{/* <motion.div
  whileHover={{ rotateY: 180 }}
  transition={{ duration: 0.6 }}
>
  Flip on Hover
</motion.div>
<motion.div
  style={{ perspective: 1000 }}
>
  <motion.div
    initial={{ rotateX: 45 }}
    animate={{ rotateX: 0 }}
    transition={{ duration: 1 }}
  >
    3D with Depth
  </motion.div>
</motion.div>
<motion.div
  initial={{ rotateY: 90 }} // Starts rotated
  animate={{ rotateY: 0 }}  // Rotates to normal
  transition={{ duration: 1 }}
>
  3D Rotation
</motion.div> */}


          {/* 3D Rotating B (90° behind T) */}
          {/* <motion.div
            initial={{ rotateX: 0, rotateY: -90 }}
            animate={{ rotateX: 1080, rotateY: 990 }} // Slight offset for natural movement
            transition={{ duration: 3, ease: "linear" }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-6xl font-bold text-blue-500"
          >
            B
          </motion.div> */}
        </div>
     ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold"
        >
          <span className="text-red-500">Tech</span>
          <span className="text-blue-500">Beast</span>
        </motion.div>
      )}
    </div> 
  );
}
