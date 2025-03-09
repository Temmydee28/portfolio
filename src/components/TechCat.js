import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase,FaJs,FaGitAlt,FaGithub,FaHtml5,FaCss3,FaBootstrap,FaDigitalOcean} from "react-icons/fa";
import { SiTailwindcss, SiMongodb , SiPhp,SiNestjs,SiVercel,SiJquery,SiMui,SiTypescript,SiExpress,SiMongoose} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiNextjsFill } from "react-icons/ri";

const techCategories = [
  { name: "Frontend", icon: <FaReact size={50} className="text-blue-400" />, techs: ["React", "Next.js", "Tailwind CSS", "Material-UI"] },
  { name: "Backend", icon: <FaNodeJs size={50} className="text-green-400" />, techs: ["Node.js", "Express.js", "NestJS"] },
  { name: "Database", icon: <FaDatabase size={50} className="text-yellow-400" />, techs: ["MongoDB", "PostgreSQL", "MySQL"] },
  { name: "Version Control", icon: <FaGitAlt size={50} className="text-red-400" />, techs: ["Git", "GitHub", "GitLab"] },
];
const FEs = [
    { name: "HTML5", icon: <FaHtml5 className="text-red-500" />, level: 90 },
    { name: "CSS", icon: <FaCss3 className="text-[#2965f1]" />, level: 90 },
    { name: "JAVASCRIPT", icon: <FaJs className="text-yellow-400" />, level: 90 },
    { name: "React", icon: <FaReact className="text-blue-400" />, level: 85 },
    { name: "NEXTJS", icon: <RiNextjsFill className="text-black" />, level: 85 },
    { name: "JQUERY", icon: <SiJquery className="text-[#0769AD]" />, level: 90 },
    { name: "TYPESCRIPT", icon: <SiTypescript className="text-[#3178C6]" />, level: 90 },
    { name: "BOOTSTRAP", icon: <FaBootstrap className="text-[#7952B3]" />, level: 90 },
    { name: "MATERIAL UI", icon: <SiMui className="text-[#007FFF]" />, level: 90 },
]
const BEs =[
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 95 },
    { name: "EXPRESSJS", icon: <SiExpress className="text-purple-500" />, level: 85 },
    { name: "PHP", icon: <SiPhp className="text-purple-500" />, level: 85 },
    { name: "NESTJS", icon: <SiNestjs className="text-red-500" />, level: 85 },
]
const DBs =[
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: 95 },
    { name: "MONGOOSE", icon: <SiMongoose className="text-blue-300" />, level: 85 },
    { name: "MYSQL", icon: <GrMysql className="text-blue-300" />, level: 85 },
]
const VCs = [
  { name: "GIT", icon: <FaGitAlt className="text-blue-300" />, level: 85 },
  { name: "GITHUB", icon: <FaGithub className="" />, level: 100 },
  { name: "VERCEL", icon: <SiVercel className="" />, level: 85 },
  { name: "DROPLET", icon: <FaDigitalOcean className="" />, level: 85 },
];


export default function TechStackSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % techCategories.length);
      }, 3000); // Auto-slide every 3 seconds
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
      <div className="relative w-[300px] h-[250px] overflow-hidden flex items-center justify-center">
        {techCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: index === currentIndex ? 1 : 0, x: index === currentIndex ? 0 : -100 }}
            transition={{ duration: 0.5 }}
            className={`absolute w-full text-center p-4 rounded-lg shadow-lg ${index === currentIndex ? "block" : "hidden"}`}
          >
            {category.icon}
            <h3 className="text-xl font-semibold mt-2">{category.name}</h3>
            <ul className="mt-2 text-sm">
              {category.techs.map((tech, i) => (
                <li key={i} className="text-gray-300">{tech}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      {/* <div className="mt-4 flex gap-4">
        <button onClick={prevSlide} className="bg-gray-700 px-4 py-2 rounded-md">⬅ Prev</button>
        <button onClick={nextSlide} className="bg-gray-700 px-4 py-2 rounded-md">Next ➡</button>
      </div> */}
    </div>
  );
}