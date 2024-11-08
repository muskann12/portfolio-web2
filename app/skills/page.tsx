import React from 'react';
import { FaHtml5, FaCss3Alt, FaFigma, FaPython } from 'react-icons/fa'; // React Icons from 'fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'; // Next.js, Tailwind CSS, TypeScript from 'si'
import { FaUsers } from 'react-icons/fa'; // Leadership icon from 'fa'
import { FaSearch } from 'react-icons/fa'; // User Research icon from 'fa'

import Navbar from '../components/Navbar'; // Importing the Navbar
import Footer from '../components/Footer'; // Importing the Footer

const SkillsPage = () => {
  return (
    <div>
      <Navbar /> {/* Displaying the Navbar */}

      <div id="skills" className="p-8">
        <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-8">My Skills</h1>

        {/* Skills Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* HTML Skill Card */}
          <div className="skill-card bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <FaHtml5 className="text-5xl text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-blue-950 text-center">HTML</h3>
          </div>

          {/* CSS Skill Card */}
          <div className="skill-card bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <FaCss3Alt className="text-5xl text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-blue-950 text-center">CSS</h3>
          </div>

          {/* TypeScript Skill Card */}
          <div className="skill-card bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <SiTypescript className="text-5xl text-blue-950" />
            </div>
            <h3 className="text-xl font-semibold text-blue-950 text-center">TypeScript</h3>
          </div>

          {/* Next.js Skill Card */}
          <div className="skill-card bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <SiNextdotjs className="text-5xl text-black" />
            </div>
            <h3 className="text-xl font-semibold text-blue-950 text-center">Next.js</h3>
          </div>

          {/* Figma Skill Card */}
          <div className="skill-card bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <FaFigma className="text-5xl text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-blue-950 text-center">Figma</h3>
          </div>

          {/* Python Skill Card */}
          <div className="skill-card bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <FaPython className="text-5xl text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-blue-950 text-center">Python</h3>
          </div>

          {/* User Research Skill Card */}
          <div className="skill-card bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <FaSearch className="text-5xl text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-blue-950 text-center">User Research</h3>
          </div>

          {/* Leadership Skill Card */}
          <div className="skill-card bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <FaUsers className="text-5xl text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-blue-950 text-center">Leadership</h3>
          </div>

          {/* Tailwind CSS Skill Card */}
          <div className="skill-card bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="flex justify-center mb-4">
              <SiTailwindcss className="text-5xl text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-blue-950 text-center">Tailwind CSS</h3>
          </div>

        </div>

      </div>

      <Footer /> {/* Displaying the Footer */}
    </div>
  );
};

export default SkillsPage;
