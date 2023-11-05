// src/components/Topbar.js
import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import profileImage from '../static/img/undraw_profile.svg';
import '../styles/topbar.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Topbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility
  useEffect(() => {
    // Check if the user has visited before by checking local storage
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');

    if (hasVisitedBefore) {
      // User has visited before, so they are not the first time visitor
      setIsFirstVisit(false);

      // Check if the user is logged in by checking local storage
      const storedEmail = localStorage.getItem('userEmail');
      if (storedEmail) {
        setEmail(storedEmail);
        setIsLoggedIn(true);
      }
    }
  }, []);

  const handleLogin = () => {
    const enteredEmail = prompt('Please enter your email:');
    if (enteredEmail) {
      setEmail(enteredEmail);
      setIsLoggedIn(true);

      // Store the email in local storage
      localStorage.setItem('userEmail', enteredEmail);
    }
  };

  const handleLogout = () => {
    setEmail('');
    setIsLoggedIn(false);

    // Remove the email from local storage
    localStorage.removeItem('userEmail');
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Mark the user as visited
  if (isFirstVisit) {
    localStorage.setItem('hasVisitedBefore', true);
  }

  return (
    <div className="topbar">
        <div className="topbar-left">
            <a href="/" className="website-name">
            BU PlannerX
            </a>
            </div>
    <div className="topbar-right">
        <a
            href="https://github.com/Carperis/PlannerX"
            target="_blank"
            rel="noopener noreferrer"
            >
                <FaGithub className="github-icon" />
            </a>|
            <div className="topbar-user">
          {isLoggedIn ? (
            <>
              <span className="profile=link">Welcome, {email}!</span>
              <span className="profile-image-container" onClick={toggleDropdown}>
                <img src={profileImage} alt="Profile" className="profile-image" />
                {showDropdown && (
                  <div className="dropdown-menu">
                    <span onClick={handleLogout}>Logout</span>
                  </div>
                )}
              </span>
            </>
          ) : (
            <span className="profile-link" onClick={handleLogin}>
              Login
              <img src={profileImage} alt="Profile" className="profile-image" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default Topbar;
