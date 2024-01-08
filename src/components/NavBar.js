import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import profileImage from '../static/img/undraw_profile.svg';
import {useAuth} from '../AuthContext';
import { FaCaretDown } from 'react-icons/fa';

const DropdownMenu = ({ user, img, menuItems}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownContainerRef = useRef(null);
  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownContainerRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center text-xl font-medium text-white rounded-full hover:text-text-secondary dark:hover:text-text-secondary focus:outline-none"
      >
        <span className="sr-only">Open user menu</span>
        {user}
        <img className="w-8 h-8 me-2 rounded-full ml-2" src={img} alt={user} />
        <FaCaretDown className="ml-2" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          {menuItems.map((item, index) => (
           <a
            key={index}
            href={item.href}
            onClick={item.onClick} 
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};


const NavBar = () => {
  const {isLoggedIn,user,login,logout} = useAuth();

  const menuItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Setting', href: '/setting' },
    { label: 'Sign out', onClick:logout},
  ];

  return (
    <nav className="flex flex-row bg-bg-primary justify-between text-white pt-5 px-5 py-4 relative">
      <div className="text-3xl font-extrabold">
        <a href="/">BU x PlannerX</a>
      </div>
      <div className="relative">
        {isLoggedIn ? (
          <DropdownMenu user={user.username} menuItems={menuItems} img={profileImage}  />
        ) : (
          <NavLink onClick={login} className="flex flex-row items-center">
            <div>Login</div>
            <img src={profileImage} alt="Profile" className="w-8 h-8 rounded-full ml-2" />
          </NavLink>
        )}
      </div>
    </nav>
  );
  
};

export default NavBar;
