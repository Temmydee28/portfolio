"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function About(){

 const [position, setPosition] = useState({x:0,y:0});

 useEffect(()=> {
   const moveImage = () => {
     const randomX = Math.random() * (window.innerWidth - 300);
     const randomY = Math.random() * (window.innerHeight - 800);
    //  console.log(randomY)
    //  console.log(randomX)
    //  console.log(window.innerHeight)
     setPosition({x:randomX, y: randomY});
   };

   const timeOut = setTimeout(()=>{
     moveImage();

     const interval =setInterval(moveImage, 5000);
     return ()=> clearInterval(interval)
   },5000);
   return ()=> clearTimeout(timeOut)
   },[]);
     return(
       <div id="about" className="flex items-center justify-center min-h-[70vh] bg-gray-900">
       <motion.img
       className="w-50 h-50 rounded-lg shadow-lg object-cover"
       src="/profile.jpg"
       alt="Portfolio"
         initial={{ opacity: 1, y:50 }}
         
         animate={{ 
           x:position.x,
           y:position.y
         }}
         transition={{ duration: 1.5, ease: "easeInOut" }}
      style={{borderRadius:'20px'}}
         
      />

      <motion.div
      className="items-center justify-center"
      initial={{ opacity: 0 , y:-50}}
      animate={{opacity:1, y:-50}}
      transition={{
      duration:2,
         ease: "easeOut",

       }}
      >
     

<h5 style={{color:'red', fontFamily:'roboto', fontSize:'25px'}}>ABOUT ME</h5>
<p style={{fontFamily:'p', fontSize:'15px'}}>I&apos;m Temidayo Animasaun, a Seasoned FullStack Software Developer, with 5 years hands-on experience in building, maintaining debugging and managing innovative web application that solves problems and drive business growth. </p>
      </motion.div>
        
     
     </div>
   )
}


