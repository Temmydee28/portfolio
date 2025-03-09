"use client"
import { FaEnvelope,FaInstagram,FaLinkedinIn, FaGithub } from "react-icons/fa"
import { FaXTwitter  } from "react-icons/fa6"
import { useState } from "react";

export default function Contact(){
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, description } = formData;
    const email = "techbeast220@gmail.com"; // Your email

    // Format the email content
    const mailtoLink = `mailto:${email}?subject=Hiring Request from ${name}&body=${description}`;
    
    // Open mail client
    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white p-6">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-red-500 mb-6">Hire Me</h2>

      {/* Contact Form */}
      <form
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit}
      >
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Briefly describe your project"
            required
          />
        </div>

        {/* Contact Button */}
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-full transition duration-300"
          type="submit"
        >
          Contact Me
        </button>
      </form>
      
        {/* Footer Section */}
        <footer className="mt-20 flex items-center justify-center bg-black w-full py-6">
          <a href="mailto:techbeast220@gmail.com" className="p-4 relative group"><FaEnvelope className="text-red-500 text-4xl cursor-pointer" />
          <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Email
      </span></a>

          <a href="https://x.com/OTemmydee" className="p-4"><FaXTwitter className="text-red-500 text-4xl relative group" /> <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
       x
      </span></a>
          <a href="https://github.com/temmydee28" className="p-4"><FaGithub className="text-red-500 text-4xl" /></a>
          <a href="https://www.linkedin.com/in/temidayo-animasaun-4a987320a" className="p-4"><FaLinkedinIn className="text-red-500 text-4xl" /></a>
          <a href="https://www.instagram.com/ophicial_temmydee" className="p-4"><FaInstagram className="text-red-500 text-4xl" /></a>
          
        </footer>
      </div>
      

    )
}