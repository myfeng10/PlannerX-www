import React from 'react';
import '../styles/footer.css';
import { FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="text-center">
        <p className="mb-2">&copy; BU PlannerX 2023 All Rights Reserved</p>
        <div className="flex justify-center items-center">
          <a
            href="https://github.com/Carperis/PlannerX"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2"
          >
            <FaGithub className="text-white" />
          </a>
          <span className="mr-2">|</span>
          <span>Follow us on GitHub</span>
        </div>
      </div>
    </footer>
  );
};


export default Footer;