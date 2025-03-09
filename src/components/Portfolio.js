 "use client";
 import { motion } from "framer-motion";
 import { useState, useEffect } from "react";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import TechStackSlider from "./TechCat";
import Headers from "./Header";
import Header from "./Header";
import Contact from "./Contact";
 export default function Portfolio(){


  return(
    <div>
   <Header />
     <About />
    <Skills />
   <Resume />
   <Contact />
    </div>
  )
 }