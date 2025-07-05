import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [isrolled, setIsrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (sectionId) => {
    setActive(sectionId);
    setOpen(false);
    const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }

  };

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'work', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isrolled
          ? 'bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Ekta</span>
          <span className="text-white">Teli</span>
          <span className="text-[#8245ec]"> &gt; </span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                active === item.id ? 'text-[#8245ec]' : ''
              }`}
            >
              <button onClick={() => handleItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop social icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/ektateli?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ektateli1911/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* ✅ Mobile menu toggle icon (must be outside md:flex) */}
        <div className="md:hidden">
          {open ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#1f1e22] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  active === item.id ? 'text-[#8245ec]' : ''
                }`}
              >
                <button onClick={() => handleItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/ektateli?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ektateli1911/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
