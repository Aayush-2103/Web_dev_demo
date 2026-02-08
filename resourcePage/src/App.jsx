import { useState } from 'react';
import Sidebar from './components/Sidebar';
import LevelCard from './components/LevelCard'; 
import './App.css';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');

  // MOCK DATA: Adding 'topics' to each level
  const levels = [
    { 
      id: 1, 
      title: 'Level 1', 
      range: '(800 - 1000)', 
      status: 'active',
      topics: [
        { id: 101, title: 'Arrays & Strings', isCompleted: true },
        { id: 102, title: 'Basic Loops', isCompleted: true },
        { id: 103, title: 'Functions', isCompleted: false },
        { id: 104, title: 'Object Literals', isCompleted: false }
      ]
    },
    { 
      id: 2, 
      title: 'Level 2', 
      range: '(1000 - 1200)', 
      status: 'locked',
      topics: [
        { id: 201, title: 'DOM Manipulation', isCompleted: false },
        { id: 202, title: 'Events', isCompleted: false }
      ]
    },
    { 
      id: 3, 
      title: 'Level 3', 
      range: '(1200 - 1400)', 
      status: 'locked', 
      topics: [] 
    },
  ];

  return (
    <div className="app-container">
      <Sidebar 
        selectedLang={selectedLanguage}
        onSelectLang={setSelectedLanguage} 
      />

      <div className="main-content">
        <h1 className="header-title">{selectedLanguage} Path</h1>
        
        {levels.map((level) => (
          <LevelCard 
            key={level.id}
            levelData={level} // Passing the whole object now
          />
        ))}
      </div>
    </div>
  );
}

export default App;