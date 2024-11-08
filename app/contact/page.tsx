'use client';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing the icons
import Navbar from '../components/Navbar'; // Importing Navbar
import Footer from '../components/Footer'; // Importing Footer

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<string>('');

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission (simulating email send)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate sending email (you need to integrate this with a backend)
    console.log('Sending email...');
    setStatus('Message sent successfully!');

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <Navbar /> {/* Display Navbar */}

      <main className="container mx-auto p-8 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-blue-950 mb-8">Contact Me</h1>

        {/* Contact Information */}
        <div className="space-y-6 text-center mb-8">
          <p className="text-lg text-blue-900">Feel free to reach out to me through the form below or connect on social media!</p>

          <div className="flex justify-center space-x-8 text-blue-950">
            <a href="https://github.com/muskann12" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl hover:text-blue-500" />
            </a>
            <a href="https://www.linkedin.com/in/muskan-nisar-3135a42b3" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl hover:text-blue-500" />
            </a>
            <a href="mailto:nisarmuskan14@gmail.com">
              <FaEnvelope className="text-3xl hover:text-blue-500" />
            </a>
          </div>
        </div>

        {/* Contact Form (Centered with Bootstrap styles) */}
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="form-control w-full p-3 border-2 border-blue-950 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="form-control w-full p-3 border-2 border-blue-950 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="form-control w-full p-3 border-2 border-blue-950 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full py-3 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              Send Message
            </button>
            {status && (
              <p className={`mt-4 text-center ${status.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </main>

      <Footer /> {/* Display Footer */}
    </div>
  );
};

export default ContactPage;
