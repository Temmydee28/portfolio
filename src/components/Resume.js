"use client";
import { motion } from "framer-motion";

const experience = [
    {
        role: "FullStack Developer", company: "BeLocated",sYear:'2024',eYear:'2025', details: [
            'Manange an existing code base',
            'Debugged old code and made the site Up and Running',
            'Added New Features'],
    },
    {
        role: "Internship & Graduate", company: "Achievers University",sYear:'2024',eYear:'2025', details: [
            'Developed a secure, real-time Attendance Management System using MERN stack.',
            'Made Student Attend classes more',
            'Automatic calculation of attendance.(75%)',
            'Teachers create attendance records for lectures',
            'Students log in, input unique codes, and submit attendance'],
    },
    { role: "Software Developer", company: "TBTicketWave", sYear: "2024",eYear:"2024", position:90,positionY:-90,details: [
          "Developed a web-based Voting and Ticketing System for school events, featuring: ",
          "Online voting platform allowing users to vote for participants in various categories ",
          "Secure payment processing and real-time voting data storage in the database",
    ],},
    //   { role: "Web Developer", company: "DevHouse",  sYear: "2022",eYear:"2023",details: [
    //       "Created custom WordPress themes",
    //       "Improved SEO performance",
    //       "Built client dashboards with Next.js",
    //     ],},
    //   { role: "Intern", company: "StartupX", sYear: "2022",eYear:"2023", details: [
    //     "Developed reusable React components",
    //     "Integrated REST APIs for real-time data",
    //     "Worked with Redux for state management",
    //   ],},
       { role: "Lead WebApp Developer", company: "Freeman Standard School", sYear: "2021",eYear:"2022", details: [
        "Developed a comprehensive Result Portal to streamline student result management.",
        "Admin registration of new students and staff",
        "Smooth viewing of result by students and Parents",
      ],},
      { role: "Software Developer", company: "  Cybertoolsonline(CTO), Abuja, NIGERIA", sYear: "2021",eYear:"2022", details: [
        "Developed an Application that allows service ordering",
        "Integrated Coinbase for Crypto payment on services rendered",
      ],},
      { role: "Software Developer", company: "NEWSFREAK, LAGOS, NIGERIA", sYear: "2022",eYear:"2022", details: [
        "Built a Newsblog",
        "Created a easy Admin dashboard for easy updating of the sites by authors",
        "Integrated REST APIs for real-time data and news update from twitter",
        "",
      ],},
      { role: "InternShip", company: "WetindeyCode Academy", sYear: "2021",eYear:"2022", details: [
        "Learnt more on Developing web based applications",
        "Integrated Mailing and sms OTP",
        "Worked with other css framework",
      ],},
];


export default function Resume() {
  return (
    <section id="resume" className="min-h-screen flex flex-col items-center bg-gray-900 text-white overflow-auto">

      {/* Vertical Line in the Middle */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-green-400 h-full"
      />

      {/* Experience Cards */}
      <div className="relative w-full flex flex-col items-center justify-center">
        {experience.map((job, index) => {
          const isLeft = index % 2 === 0;
          const textLeft = index % 2 === 0; // Alternate left & right
          return (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
              className={`absolute flex items-center p-6 bg-gray-800 rounded-lg shadow-lg w-45 border border-gray-700 ${
                isLeft ? "left-1/2" : "right-1/2"
              } `}
              style={{
                top: `${index * 300}px`, // Stack with space
              }}
            >
              {/* Timeline Year */}
              <motion.p  initial={{ scaleY: 0, y:50 }}
      animate={{ scaleY: 1,y:0 }}
      transition={{ duration: 1, ease: "easeInOut" }} className="absolute top-[-20px] text-xs text-gray-400">{job.eYear}</motion.p>

              {/* Job Details */}
              <div>
             
                <p className="text-xs text-gray-400">{job.role}</p>
                <p className="text-sm text-green-400 font-semibold">{job.company}</p>
                <ul className="text-xs text-gray-300 space-y-1 mt-2">
                  {job.details.map((detail, i) => (
                    <li key={i} className="before:content-['•'] before:mr-2">
                      {detail}
                     
                    </li>
                    
                  ))}
                  <br></br>
                  <br></br>
                   <button style={{color:'red'}}><u>Read More</u></button>
                </ul>
              </div>

              {/* Timeline Year at the Bottom */}
              <p className="absolute bottom-[-20px] text-xs text-gray-400">{job.sYear}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

