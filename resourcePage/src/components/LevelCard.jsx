import React, { useState } from 'react';
import './LevelCard.css';
import { FaRegCheckCircle, FaRegArrowAltCircleDown, FaCheck } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa"; // Icon for the topic list

const LevelCard = ({ levelData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTopic, setActiveTopic] = useState(levelData.topics[0]); // Default to first topic

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`level-card ${isExpanded ? 'expanded' : ''}`}>
      
      {/* --- HEADER SECTION (Always Visible) --- */}
      <div className="card-header" onClick={toggleExpand}>
        <div className="card-details">
          <h3>{levelData.title}</h3>
          <span className="range-text">{levelData.range}</span>
        </div>
        <div className="card-icon">
          {/* Arrow rotates if expanded */}
          <FaRegArrowAltCircleDown 
            className={`arrow-icon ${isExpanded ? 'rotated' : ''}`} 
          />
        </div>
      </div>

      {/* --- EXPANDED SECTION (Hidden by default) --- */}
      {isExpanded && (
        <div className="card-body">
          
          {/* LEFT SIDE: Video & Notes */}
          <div className="left-panel">
            
            {/* 1. YouTube Placeholder */}
            <div className="video-placeholder">
              <div className="video-overlay">
                <p>🎥 Playing Video ID: {activeTopic ? activeTopic.id : "N/A"}</p>
                <h3>{activeTopic ? activeTopic.title : "Select a Topic"}</h3>
                <small>(Youtube API Placeholder)</small>
              </div>
            </div>

            {/* 2. AI Notes Placeholder */}
            <div className="notes-placeholder">
              <h4>✨ AI Generated Notes</h4>
              <p>These notes will be automatically generated based on the video transcript above...</p>
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
            </div>
          </div>

          {/* RIGHT SIDE: Topic List */}
          <div className="right-panel">
            <h4 className="contents-title">Contents</h4>
            <ul className="topic-list">
              {levelData.topics.map((topic, index) => (
                <li 
                  key={topic.id} 
                  className={`topic-item ${activeTopic?.id === topic.id ? 'active' : ''}`}
                  onClick={() => setActiveTopic(topic)}
                >
                  <span className="topic-index">{index + 1}.</span>
                  <span className="topic-name">{topic.title}</span>
                  
                  {/* Show Green Check if completed, else Play Icon */}
                  {topic.isCompleted ? (
                    <FaCheck className="status-icon completed" />
                  ) : (
                    <FaPlayCircle className="status-icon pending" />
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
      )}
    </div>
  );
};

export default LevelCard;