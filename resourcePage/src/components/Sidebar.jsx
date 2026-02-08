// src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import { FaJs, FaPython, FaJava, FaGolang } from 'react-icons/fa6'; 
import { SiCplusplus } from 'react-icons/si'; 

const Sidebar = ({ selectedLang, onSelectLang }) => {
  
  const languages = [
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'Go', icon: <FaGolang /> },
  ];

  return (
    <div className="sidebar">
      {/* No Toggle Button here anymore */}

      <div className="menu">
        {languages.map((langItem) => (
          <div 
            key={langItem.name} 
            className={`nav-item ${selectedLang === langItem.name ? 'active' : ''}`}
            onClick={() => onSelectLang(langItem.name)}
            title={langItem.name} /* Shows text on hover */
          >
            <span className="icon-display">{langItem.icon}</span> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;