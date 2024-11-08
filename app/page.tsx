'use client';
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/navigation';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component

const HomePage = () => {
  const router = useRouter();

  const handleHireMeClick = () => {
    router.push('/contact'); // Navigate to the contact page
  };

  return (
    <div>
      <Navbar /> {/* Use your Navbar component here */}
      
      <main className="container mx-auto p-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Your Picture */}
        <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
          <Image
            src="/images/profilee.jpg" // Update with your image path
            alt="Muskan Nisar"
            className="rounded-full border-4 border-blue- shadow-lg object-cover" // Ensure image fits the circle
            width={300} // Adjust size as needed
            height={300} // Adjust size as needed
          />
        </div>

        {/* Right Section: Description and Services */}
        <div className="flex-1 md:ml-12 space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600">
            Hi! I'm Muskan Nisar
          </h1>

          {/* Typewriter Effect */}
          <h2 className="text-3xl font-semibold text-blue-950">
            <Typewriter
              options={{
                strings: [
                  'A Passionate Front End Developer',
                  'Certified IT Support Specialist',
                  'Certified UI/UX Designer',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          {/* About Me Paragraph */}
          <p className="text-lg text-blue-900 font-light">
            I’m driven by a passion for creating visually stunning and highly functional websites that provide seamless user experiences. With a strong focus on front-end development, I love transforming ideas into interactive, responsive designs. As a Certified IT Support Specialist and a Certified UI/UX Designer, I bring expertise in both technical troubleshooting and user-centered design, ensuring that each project is as functional as it is beautiful.
          </p>

          {/* Services List */}
          <h3 className="text-2xl text-blue-950 font-semibold">Services:</h3>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Create Responsive Websites</li>
            <li>Design User-Friendly Interfaces</li>
            <li>Build Front-end Web Solutions</li>
            <li>Automate IT Support</li>
            <li>Craft Engaging UI/UX Designs</li>
          </ul>

          {/* Hire Me Button */}
          <div className="mt-8 flex space-x-6">
            {/* Hire Me Button */}
            <button
              onClick={handleHireMeClick}
              className="border-2 border-blue-950 text-blue-950 py-2 px-6 rounded-lg hover:bg-blue-950 hover:text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 ease-in-out"
            >
              Hire Me
            </button>

            {/* View Resume Button */}
            <button
              onClick={() => window.location.href = '/resume.pdf'} // Trigger download of PDF
              className="border-2 border-blue-950 text-blue-950 py-2 px-6 rounded-lg hover:bg-blue-950 hover:text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 ease-in-out"
            >
              View Resume
            </button>
          </div>
        </div>
      </main>

      <Footer /> {/* Displaying the Footer */}
    </div>
  );
};

export default HomePage;
