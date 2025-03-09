"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaGitAlt, FaGithub, FaDigitalOcean } from "react-icons/fa";
import { SiJquery, SiTypescript, SiMui, SiMongodb, SiMongoose, SiPhp, SiNestjs, SiVercel } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";

const techCategories = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-red-500" />, level: 90 },
      { name: "CSS", icon: <FaCss3 className="text-[#2965f1]" />, level: 90 },
      { name: "JAVASCRIPT", icon: <FaJs className="text-yellow-400" />, level: 90 },
      { name: "React", icon: <FaReact className="text-blue-400" />, level: 85 },
      { name: "NEXTJS", icon: <RiNextjsFill className="text-black" />, level: 85 },
      { name: "JQUERY", icon: <SiJquery className="text-[#0769AD]" />, level: 90 },
      { name: "TYPESCRIPT", icon: <SiTypescript className="text-[#3178C6]" />, level: 90 },
      { name: "BOOTSTRAP", icon: <FaBootstrap className="text-[#7952B3]" />, level: 90 },
      { name: "MATERIAL UI", icon: <SiMui className="text-[#007FFF]" />, level: 90 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 95 },
      { name: "EXPRESSJS", icon: <SiExpress className="text-purple-500" />, level: 85 },
      { name: "PHP", icon: <SiPhp className="text-purple-500" />, level: 85 },
      { name: "NESTJS", icon: <SiNestjs className="text-red-500" />, level: 85 },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: 95 },
      { name: "MONGOOSE", icon: <SiMongoose className="text-blue-300" />, level: 85 },
      { name: "MYSQL", icon: <GrMysql className="text-blue-300" />, level: 85 },
    ],
  },
  {
    title: "Version Control",
    items: [
      { name: "GIT", icon: <FaGitAlt className="text-blue-300" />, level: 85 },
      { name: "GITHUB", icon: <FaGithub className="" />, level: 100 },
      { name: "VERCEL", icon: <SiVercel className="" />, level: 85 },
      { name: "DROPLET", icon: <FaDigitalOcean className="" />, level: 85 },
    ],
  },
];

export default function TechStack() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showIcons, setShowIcons] = useState(false);
  const [showDetails, setShowDetails] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("techie");
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) {
          setTimeout(() => setShowIcons(true), 200); // 1s delay before falling
          setTimeout(() => setShowDetails(true), 300); // 2s delay before showing details
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % techCategories.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tech-section" className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-900 text-white p-10 pt-3">
      <h2 className="text-4xl static text-red-500 font-bold mb-10">Tech Stack</h2>
<section id="techie">
      <div className="relative w-full flex flex-col items-center space-y-8">
        <h5 className="text-xl font-bold mb-6">{techCategories[currentIndex].title}</h5>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          {techCategories[currentIndex].items.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-8 w-80"
            >
            
               <motion.span
              initial={{
                y: -200 - Math.random() * 200, // Random fall from top
                opacity: 0,
                x: Math.random() * 300 - 150, // Random horizontal start
              }}
              animate={showIcons ? { y: 0, x: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: 1 + index * 0.2, // Starts after 1s, then staggered
                ease: "easeOut",
              }}
              className="text-4xl"
            >
              {tech.icon}
            </motion.span>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 2 + index * 0.2, // Appears after icons land
                }}
                className="flex items-center space-x-4 p-5 rounded-md w-full"
              >
                <span className="text-lg font-semibold">{tech.name}</span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${tech.level}%` }}
                  transition={{ duration: 1, delay: 2.5 + index * 0.2 }}
                  className="h-2 bg-green-400 rounded-full"
                  style={{ maxWidth: "100px", justifyContent:"right", float:'right', textAlign:'right' }}
                ></motion.div>
              </motion.div>
            )}
              {/* <span className="text-lg font-semibold">{tech.name}</span> */}
              {/* <div className="w-full h-2 bg-gray-700 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${tech.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-2 bg-green-400 rounded-full"
                ></motion.div>
              </div> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
      </section>
    </section>
  );
}
``
