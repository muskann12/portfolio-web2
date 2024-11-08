// Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Muskan Nisar. All rights reserved.
        </p>
        <div className="mt-4 space-x-6">
          <a
            href="https://www.linkedin.com/in/muskan-nisar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/muskan-nisar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300"
          >
            GitHub
          </a>
          <a
            href="mailto:muskan.nisar@example.com"
            className="hover:text-pink-500 transition duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
