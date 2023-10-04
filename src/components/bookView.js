import React, { useState, useEffect } from 'react';

export default function BookView({books}) {
  const [bookContent, setBookContent] = useState('');
  const [currentSection, setCurrentSection] = useState(0);

  let bookss = books
  useEffect(() => {
    fetch(bookss[books.length-1].content)
      .then(response => response.text())
      .then(text => setBookContent(text))
      .catch(error => console.error('Error loading book content:', error));
  }, []);

  // Split the content into sections with a maximum of 500 words per section
  const wordsPerSection = 3000;
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
