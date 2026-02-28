import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { FiSettings } from 'react-icons/fi';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import './Compiler.css';

// --- New: Dictionary holding the default text for each language ---
const defaultCodeSnippets = {
  python: '# Type your code here\n',
  javascript: '// Type your code here\n',
  cpp: '// Type your code here\n#include <iostream>\nusing namespace std;\n\nint main() {\n    \n    return 0;\n}'
};

const Compiler = () => {
  const [language, setLanguage] = useState('python'); 
  // Initialize the code state with Python's default text
  const [code, setCode] = useState(defaultCodeSnippets['python']);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  // Settings States
  const [showSettings, setShowSettings] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const [tabSize, setTabSize] = useState(4);

  // --- New: Function to handle language changes ---
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    setCode(defaultCodeSnippets[selectedLanguage]); // Automatically updates the text!
  };

  return (
    <div className="compiler-wrapper">
      <header className="compiler-header">
        <div className="logo-section">
          <h2>Online Compiler</h2>
        </div>
      </header>

      <PanelGroup direction="horizontal" className="compiler-workspace">
        
        {/* Left Pane: Code Editor */}
        <Panel defaultSize={50} minSize={20} className="pane left-pane">
          <div className="pane-toolbar">
            <select 
              className="language-select"
              value={language}
              onChange={handleLanguageChange} // <--- Updated to use our new function
            >
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="cpp">C++</option>
            </select>
            
            {/* Settings Icon & Dropdown Menu */}
            <div className="settings-container">
              <FiSettings 
                className="settings-icon" 
                onClick={() => setShowSettings(!showSettings)} 
              />
              
              {showSettings && (
                <div className="settings-dropdown">
                  <div className="settings-item">
                    <label>Font Size</label>
                    <select 
                      value={fontSize} 
                      onChange={(e) => setFontSize(Number(e.target.value))}
                    >
                      <option value="12">12</option>
                      <option value="14">14</option>
                      <option value="16">16</option>
                      <option value="18">18</option>
                      <option value="20">20</option>
                      <option value="24">24</option>
                    </select>
                  </div>
                  <div className="settings-item">
                    <label>Tab Size</label>
                    <select 
                      value={tabSize} 
                      onChange={(e) => setTabSize(Number(e.target.value))}
                    >
                      <option value="2">2 Spaces</option>
                      <option value="4">4 Spaces</option>
                      <option value="8">8 Spaces</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="editor-container">
            <Editor
              height="100%"
              theme="vs-dark"
              language={language}
              value={code}
              onChange={(value) => setCode(value)}
              options={{
                minimap: { enabled: false },
                wordWrap: "on",
                scrollBeyondLastLine: false,
                fontSize: fontSize,
                tabSize: tabSize,
              }}
            />
          </div>
        </Panel>

        <PanelResizeHandle className="divider">
          <div className="divider-dots"></div>
        </PanelResizeHandle>

        {/* Right Pane: Input / Output */}
        <Panel defaultSize={50} minSize={20} className="pane right-pane">
          <div className="pane-toolbar">
            <button className="run-btn">Run</button>
          </div>
          
          <div className="io-container">
            <textarea 
              className="io-box input-box" 
              placeholder="Enter Input here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></textarea>
            
            <div className="info-bar">
              If your code takes input, add it in the above box before running.
            </div>
            
            <div className="output-header">Output</div>
            <textarea 
              className="io-box output-box" 
              readOnly
              value={output}
            ></textarea>
          </div>
        </Panel>

      </PanelGroup>
    </div>
  );
};

export default Compiler;