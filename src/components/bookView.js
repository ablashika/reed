import React, { useState, useEffect } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

export default function BookView({books}) {
  const [bookContent, setBookContent] = useState('');
  const [currentSection, setCurrentSection] = useState(0);

     let bookss = books
     useEffect(() => {
      if (books.length > 0) {
        fetch(bookss[books.length - 1].content)
          .then(response => response.text())
          .then(text => setBookContent(text))
          .catch(error => console.error('Error loading book content:', error));
      }
    }, [books.length, bookss]);
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
    <Box>
    <Text fontSize="2xl" fontWeight="bold" mb="4">
      Book Title
    </Text>
    <Button colorScheme="teal" onClick={prevPage} disabled={currentSection === 0}>
      Previous Section
    </Button>
    <Button
      colorScheme="teal"
      onClick={nextPage}
      disabled={currentSection === contentSections.length - 1}
      ml="2"
    >
      Next Section
    </Button>
    <Box
      fontSize="lg"
      lineHeight="1.5"
      textAlign="justify"
      backgroundColor="lightblue"
      width="700px"
      maxHeight="800px"
      overflow="hidden"
      mt="4"
      p="4"
      borderRadius="md"
    >
      {contentSections[currentSection]}
    </Box>
  </Box>
  );
}








