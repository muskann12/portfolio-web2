import React from 'react';
import Navbar from '../components/Navbar'; // Importing the Navbar
import Footer from '../components/Footer'; // Importing the Footer

const ProjectsPage = () => {
  return (
    <div>
      <Navbar /> {/* Displaying the Navbar */}

      <div id="projects" className="p-8">
        <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-8">My Projects</h1>

        

        {/* First Row of Projects (Figma Projects + Countdown Timer + Portfolio) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

          {/* Rotating Pizza Landing Page (UI/UX, Figma) */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
            <img
              src="/images/piza.png" // Update with the correct image for Pizza Landing Page
              alt="Rotating Pizza Landing Page"
              className="w-full h-32 object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-950">Rotating Pizza Landing Page (UI/UX, Figma)</h3>
              <p className="text-gray-600 mt-2">
                A dynamic and interactive rotating pizza landing page designed in Figma, showcasing modern UI/UX techniques.
              </p>
              <a
                href="https://www.figma.com/proto/suOQT3rnaZKyHBz5GhwEkr/Untitled?node-id=1-21&starting-point-node-id=1%3A21&t=naSZPdXTCg560DXP-1" // Replace with your Vercel link
                className="inline-block text-white bg-blue-950 hover:bg-blue-600 px-4 py-2 mt-4 rounded-md"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Shoe Landing Page (UI/UX, Figma) */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
            <img
              src="/images/shoe.png" // Update with the correct image for Shoe Landing Page
              alt="Shoe Landing Page"
              className="w-full h-32 object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-950">Shoe Landing Page (UI/UX, Figma)</h3>
              <p className="text-gray-600 mt-2">
                A shoe landing page designed with a focus on modern UI/UX principles, created in Figma.
              </p>
              <a
                href="https://www.figma.com/proto/Sy1YQYf2IdNHAucIntTPVz/Untitled?node-id=1-2&t=srVyk5C9XHZ8Ud8L-1" // Replace with your Vercel link
                className="inline-block text-white bg-blue-950 hover:bg-blue-600 px-4 py-2 mt-4 rounded-md"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Countdown Timer Project */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
            <div className="mb-4">
              <img
                src="/images/pro1.jpg" // Update with your Countdown Timer image
                alt="Countdown Timer"
                className="w-full h-32 object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-950">Countdown Timer</h3>
              <p className="text-gray-600 mt-2">
                A countdown timer built with React that counts down to a specific date. It updates in real-time, showing the remaining days, hours, minutes, and seconds.
              </p>
              <a
                href="https://countdown-timer-ejlo.vercel.app/" // Replace with your Vercel link
                className="inline-block text-white bg-blue-950 hover:bg-blue-600 px-4 py-2 mt-4 rounded-md"
              >
                View Project
              </a>
            </div>
          </div>

        </div>

        {/* Second Row of Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

          {/* Resume Builder Project (HTML/CSS/TypeScript) */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
            <img
              src="/images/resume.png" // Update with the correct image for Resume Builder
              alt="Resume Builder"
              className="w-full h-32 object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-950">Resume Builder (HTML/CSS/TypeScript)</h3>
              <p className="text-gray-600 mt-2">
                A Resume Builder tool built using HTML, CSS, and TypeScript for a clean, dynamic user experience.
              </p>
              <a
                href="https://dynamic-resume-builder-dusky.vercel.app/" // Replace with your Vercel link
                className="inline-block text-white bg-blue-950 hover:bg-blue-600 px-4 py-2 mt-4 rounded-md"
              >
                View Project
              </a>
            </div>
          </div>

          {/* ATM Machine Simulation (TypeScript) */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
            <img
              src="/images/ts.png" // Update with the correct image for ATM Machine project
              alt="ATM Machine Simulation"
              className="w-full h-32 object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-950">ATM Machine Simulation (TypeScript)</h3>
              <p className="text-gray-600 mt-2">
                A simulation of an ATM machine built using TypeScript, demonstrating basic features such as checking balance, withdrawing money, and depositing funds.
              </p>
              <a
                href="https://your-vercel-link.com" // Replace with your Vercel link
                className="inline-block text-white bg-blue-950 hover:bg-blue-600 px-4 py-2 mt-4 rounded-md"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Portfolio Web (Next.js, Tailwind CSS) */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
            <img
              src="/images/web1.png" // Update with the correct image for Portfolio
              alt="Portfolio Web"
              className="w-full h-32 object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-blue-950">Portfolio Web (Next.js, Tailwind CSS)</h3>
              <p className="text-gray-600 mt-2">
                A personal portfolio website built with Next.js and Tailwind CSS, showcasing my skills, projects, and certifications.
              </p>
              <a
                href="https://portfolio-web-nu-two.vercel.app/" // Replace with your Vercel link
                className="inline-block text-white bg-blue-950 hover:bg-blue-600 px-4 py-2 mt-4 rounded-md"
              >
                View Project
              </a>
            </div>
          </div>

        </div>

      </div>

      <Footer /> {/* Displaying the Footer */}
    </div>
  );
};

export default ProjectsPage;
