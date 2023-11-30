// import React, { useState, useEffect } from 'react';
// import { Box, Button, Text } from '@chakra-ui/react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function BookView({newBook, newBooks }) {
//   const [bookContent, setBookContent] = useState('');
//   const [currentSection, setCurrentSection] = useState(0);
  
//   let bookss = newBooks;
//   console.log(newBooks)

//   useEffect(() => {
//     if (newBooks.length > 0) {
//       fetchBookContent(bookss[newBooks.length - 1].content)
//         .then((text) => setBookContent(text))
//         .catch((error) => console.error('Error loading book content:', error));
//     }
//   }, [newBooks.length, bookss]);

//   const wordsPerSection = 3000;
//   const contentSections = splitContentIntoSections(bookContent, wordsPerSection);

//   const nextPage = () => {
//     if (currentSection < contentSections.length - 1) {
//       setCurrentSection(currentSection + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentSection > 0) {
//       setCurrentSection(currentSection - 1);
//     }
//   };
//   function splitContentIntoSections(content, wordsPerSection) {
//   if (typeof content !== 'string') {
//     // Handle cases where content is not a string (e.g., PDF content)
//     return [content];
//   }

//   const words = content.split(/\s+/);
//   const sections = [];
//   let currentSection = '';

//   for (const word of words) {
//     if ((currentSection + word).length <= wordsPerSection) {
//       currentSection += word + ' ';
//     } else {
//       sections.push(currentSection.trim());
//       currentSection = word + ' ';
//     }
//   }

//   if (currentSection.trim() !== '') {
//     sections.push(currentSection.trim());
//   }

//   return sections;
// }

//   useEffect(() => {
//     if (newBooks.length > 0) {
//       setBookContent(newBooks[newBooks.length - 1].content);
//     }
//   }, [newBooks]);


//   async function fetchBookContent(contentUrl) {
//     if (contentUrl.endsWith('.txt')) {
//       return fetchTextContent(contentUrl);
//     } else if (contentUrl.endsWith('.html')) {
//       return fetchHtmlContent(contentUrl);
//     } else if (contentUrl.endsWith('.epub')) {
//       return fetchEpubContent(contentUrl);
//     } else {
//       throw new Error('Unsupported content format: ' + contentUrl);
//     }
//   }
  

//   async function fetchTextContent(url) {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Failed to fetch text content');
//     }
//     return response.text();
//   }

//   async function fetchHtmlContent(url) {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Failed to fetch HTML content');
//     }
//     return response.text();
//   }

//   async function fetchEpubContent(url) {
//     // Implement logic to fetch EPUB content here.
//     // This may require using a specialized library or service for EPUB content.
//     // Ensure the appropriate handling for EPUB files.
//     throw new Error('EPUB format not supported yet');
//   }

//   return (
//     <>
//     {newBook.title === '' ? (
//       <Box
//       display="none"
//       >
//         <Text fontSize="2xl" fontWeight="bold" mb="4">
//           {newBook.title}
//         </Text>
//         <Button colorScheme="teal" onClick={prevPage} disabled={currentSection === 0}>
//           Previous Section
//         </Button>
//         <Button
//           colorScheme="teal"
//           onClick={nextPage}
//           // disabled={currentSection === contentSections.length - 1}
//           ml="2"
//         >
//           Next Section
//         </Button>{}
//         <AnimatePresence>
//           <motion.div
//             key={currentSection}
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 100 }}
//           >
//             <Box
//               fontSize="lg"
//               lineHeight="1.5"
//               textAlign="justify"
//               backgroundColor="lightblue"
//               width="700px"
//               maxHeight="800px"
//               overflow="hidden"
//               mt="4"
//               p="4"
//               borderRadius="md"
//               transition={{ duration: 0.5 }}
//             >
//               {newBooks.length > 0 ? newBooks[newBooks.length - 1].content : (<>
//               </>)}
//             </Box>
//           </motion.div>
//         </AnimatePresence>
//       </Box>
//     ) : (
//       <Box>
//         <Text fontSize="2xl" fontWeight="bold" mb="4">
//           {newBook.title}
//         </Text>
//         <Button colorScheme="teal" onClick={prevPage} disabled={currentSection === 0}>
//           Previous Section
//         </Button>
//         <Button
//           colorScheme="teal"
//           onClick={nextPage}
//           // disabled={currentSection === contentSections.length - 1}
//           ml="2"
//         >
//           Next Section
//         </Button>{}
//         <AnimatePresence>
//           <motion.div
//             key={currentSection}
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 100 }}
//           >
//             <Box
//               fontSize="lg"
//               lineHeight="1.5"
//               textAlign="justify"
//               backgroundColor="lightblue"
//               width="700px"
//               maxHeight="800px"
//               overflow="hidden"
//               mt="4"
//               p="4"
//               borderRadius="md"
//               transition={{ duration: 0.5 }}
//             >
              
//               {bookContent && newBook.file.type === 'application/pdf' ? (
//                   // Render PDF content if it's a PDF
//                   <embed src={URL.createObjectURL(new Blob([bookContent], { type: 'application/pdf' }))} type="application/pdf" width="100%" height="600px" />
//                 ) : (
//                   // Render text content for other types
//                   contentSections[currentSection]
//                 )}
//             </Box>
//           </motion.div>
//         </AnimatePresence>
//       </Box>
//     )}
//   </>

   
    
//   );
// }


import React, { useState, useEffect } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookView({ newBook, newBooks }) {
  const [bookContent, setBookContent] = useState('');
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    if (newBooks.length > 0) {
      fetchBookContent(newBooks[newBooks.length - 1].content)
        .then((text) => setBookContent(text))
        .catch((error) => console.error('Error loading book content:', error));
    }
  }, [newBooks.length]);

  useEffect(() => {
    if (newBooks.length > 0) {
      setBookContent(newBooks[newBooks.length - 1].content);
    }
  }, [newBooks]);

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

  function splitContentIntoSections(content, wordsPerSection) {
    if (typeof content !== 'string') {
      return [content];
    }

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

  function arrayBufferToBase64(arrayBuffer) {
  const uint8Array = new Uint8Array(arrayBuffer);
  let binary = '';
  for (let i = 0; i < uint8Array.length; i++) {
    binary += String.fromCharCode(uint8Array[i]);
  }
  return btoa(binary);
}
let base64Data; 
      

  async function fetchBookContent(contentUrl) {
    if (typeof contentUrl === 'string') {
      // Handle string URLs
      if (contentUrl.endsWith('.txt')) {
        return fetchTextContent(contentUrl);
      } else if (contentUrl.endsWith('.html')) {
        return fetchHtmlContent(contentUrl);
      } else if (contentUrl.endsWith('.epub')) {
        return fetchEpubContent(contentUrl);
      } else {
        throw new Error('Unsupported content format: ' + contentUrl);
      }
    } else if (contentUrl instanceof ArrayBuffer) {
      // Convert ArrayBuffer to base64 string
      base64Data = arrayBufferToBase64(contentUrl);
      // Now you can work with the base64 data as needed
      return base64Data;
    } else {
      throw new Error('Invalid content URL: ' + contentUrl);
    }
  }
  
  async function fetchTextContent(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch text content');
    }
    return response.text();
  }

  async function fetchHtmlContent(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new  Error('Failed to fetch HTML content');
    }
    return response.text();
  }

  async function fetchEpubContent(url) {
    throw new Error('EPUB format not supported yet');
  }

  return (
    <>
     {newBook.title === '' || !newBook.file ? (
        <Box display="none">
          <Text fontSize="2xl" fontWeight="bold" mb="4">
            {newBook.title}
          </Text>
          <Button colorScheme="teal" onClick={prevPage} disabled={currentSection === 0}>
            Previous Section
          </Button>
          <Button colorScheme="teal" onClick={nextPage} ml="2">
            Next Section
          </Button>
          <AnimatePresence>
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
            >
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
                transition={{ duration: 0.5 }}
              >
                {newBooks.length > 0 ? newBooks[newBooks.length - 1].content : <></>}
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>
      ) : (
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb="4">
            {newBook.title}
          </Text>
          <Button colorScheme="teal" onClick={prevPage} disabled={currentSection === 0}>
            Previous Section
          </Button>
          <Button colorScheme="teal" onClick={nextPage} ml="2">
            Next Section
          </Button>
          <AnimatePresence>
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
            >
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
                transition={{ duration: 0.5 }}
              >
                {bookContent && newBook.file.type === 'application/pdf' ? (
                <embed src={`data:application/pdf;base64,${bookContent}`} type="application/pdf" width="100%" height="600px" />
                ) : (
                  contentSections[currentSection]
                )}
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>
      )}
      {/* {newBook.title === '' ? (
        <Box display="none">
          <Text fontSize="2xl" fontWeight="bold" mb="4">
            {newBook.title}
          </Text>
          <Button colorScheme="teal" onClick={prevPage} disabled={currentSection === 0}>
            Previous Section
          </Button>
          <Button colorScheme="teal" onClick={nextPage} ml="2">
            Next Section
          </Button>
          <AnimatePresence>
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
            >
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
                transition={{ duration: 0.5 }}
              >
                {newBooks.length > 0 ? newBooks[newBooks.length - 1].content : <></>}
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>
      ) : (
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb="4">
            {newBook.title}
          </Text>
          <Button colorScheme="teal" onClick={prevPage} disabled={currentSection === 0}>
            Previous Section
          </Button>
          <Button colorScheme="teal" onClick={nextPage} ml="2">
            Next Section
          </Button>
          <AnimatePresence>
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
            >
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
                transition={{ duration: 0.5 }}
              >
                {bookContent && newBook.file.type === 'application/pdf' ? (
                <embed src={`data:application/pdf;base64,${bookContent}`} type="application/pdf" width="100%" height="600px" />

                
                ) : (
                  contentSections[currentSection]
                )}
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>
      )} */}
    </>
  );
}
