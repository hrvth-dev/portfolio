import React, { useState, useEffect } from 'react';

const Terminal = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const terminalLines = [
    { text: "$ npm run start", type: "command" },
    { text: "> hrvth-dev.hu@0.1.0 start", type: "info" },
    { text: "> react-scripts start", type: "info" },
    { text: "Starting the development server...", type: "system" },
    { text: "Attempting to connect to https://hrvth-dev.hu", type: "system" },
    {
      text: `Failed to compile.

×

FEJLESZTÉS ALATT
A weboldal jelenleg nem elérhető.

`,
      type: "error",
    },
    { text: "Compiled with problems:", type: "error" },
    { text: "ERROR in ./src/App.js", type: "error" },
    { text: "webpack compiled with 1 error", type: "error" },
  ];

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) return;

    const currentLine = terminalLines[currentLineIndex];
    const text = currentLine.text;

    if (currentCharIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (!newLines[currentLineIndex]) {
            newLines[currentLineIndex] = { text: "", type: currentLine.type };
          }
          newLines[currentLineIndex].text = text.substring(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 350);
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div className="w-full max-w-full sm:max-w-3xl mx-auto mt-6 sm:mt-10 mb-5 px-4 sm:px-0">
      <div className="bg-[#1e1e1e] rounded-lg shadow-xl overflow-hidden border border-[#333]">

        <div className="bg-[#323232] px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
            <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
            <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
          </div>
        </div>

        <div className="p-4 font-mono text-sm h-[320px] sm:h-[480px] overflow-y-auto bg-[#1e1e1e] text-center">
          {displayedLines.map((line, index) => (
            <div
              key={index}
              className={`mb-1 ${
                line.type === "error"
                  ? "text-[#ff5555] font-semibold"
                  : line.type === "system"
                  ? "text-[#8be9fd]"
                  : line.type === "command"
                  ? "text-[#50fa7b]"
                  : "text-[#f8f8f2]"
              } ${line.type === "error" ? "whitespace-pre-line" : ""}`}
            >
              {line.type === "command" && (
                <span className="text-[#bd93f9]">$ </span>
              )}
              {line.text}
            </div>
          ))}
          <div className="animate-pulse text-white">_</div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;