// 



import React, { useState, useEffect } from 'react';
import eloquentJavaScriptText from "../components/eloquent_javascript.txt";

export default function BookView() {
  const [bookContent, setBookContent] = useState('');
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    // Load the book content from a text file (replace with your file path).
    fetch(eloquentJavaScriptText)
      .then(response => response.text())
      .then(text => setBookContent(text))
      .catch(error => console.error('Error loading book content:', error));
  }, []);

  // Split the content into sections with a maximum of 2500 words per section
  const wordsPerSection = 2500;
  const contentSections = splitContentIntoSections(bookContent, wordsPerSection);

  const nextPage = () => {
    if (currentSection < contentSections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevPage = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  // Function to split content into sections
  function splitContentIntoSections(content, wordsPerSection) {
    const words = content.split(/\s+/);
    const sections = [];
    let currentSection = '';
    
    for (const word of words) {
      if ((currentSection + word).length <= wordsPerSection) {
        currentSection += word + ' ';
      } else {
        sections.push(currentSection.trim());
        currentSection = word + ' ';
      }
    }

    if (currentSection.trim() !== '') {
      sections.push(currentSection.trim());
    }

    return sections;
  }

  return (
    <div>
      <h1>hhhh</h1>
      <div>
        <button onClick={prevPage}>Previous Section</button>
        <button onClick={nextPage}>Next Section</button>
      </div>
      <div
        style={{
          fontSize: '16px',
          lineHeight: '1.5',
          textAlign: 'justify',
          backgroundColor: 'red',
          width: '700px',
          maxHeight: '800px', // Set a maximum height for the content container
          overflow: 'hidden', // Hide overflow content
        }}
      >
        {contentSections[currentSection]}
      </div>
    </div>
  );
}
