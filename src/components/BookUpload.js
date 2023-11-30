import React, { useState, useEffect } from 'react';
import BookView from './bookView';
import { Box, Button, Text, Center, Stack } from '@chakra-ui/react';
import {useBookContext} from "../components/BookProvider"



export default function BookUpload({books}) {
  const { setNewBooks, newBooks } = useBookContext();

  console.log(newBooks,"e")
  const saveUploadedBooksToLocalStorage = (books) => {
    localStorage.setItem('uploadedBooks', JSON.stringify(books));
    console.log(books,"w")
  };
  // saveUploadedBooksToLocalStorage()
  
  
     

     // State for multiple book objects
     const [newBook, setNewBook] = useState({ title: '', file: null });
    //  const [newBooks, setNewBooks] = useState([]); // New state for uploaded books
    
     
     const handleTitleChange = (e) => {
       setNewBook({ ...newBook, title: e.target.value });
     };
   
     const handleFileChange = (e) => {
       setNewBook({ ...newBook, file: e.target.files[0] });
     };
   
     const handleAddBook = (e) => {
       e.preventDefault();
   
       if (newBook.title && newBook.file) {
         // Read the content of the uploaded file
         const reader = new FileReader();
         reader.onload = (event) => {
           const content = event.target.result;
   
           // Create a new book object with title and content
           const newBookObject = { title: newBook.title, content };
   
           setNewBooks([...newBooks, newBookObject]);
            saveUploadedBooksToLocalStorage([...newBooks, newBookObject]);
           setNewBooks([...newBooks, newBookObject]);      
   
           // Clear the form
          //  setNewBook({ title: '', file: null });
         };

         if (newBook.file.type === 'application/pdf') {
          const blob = new Blob([newBook.file], { type: 'application/pdf' });
          reader.readAsArrayBuffer(blob)}
          else if (newBook.file.name.endsWith('.epub')) {
            reader.readAsArrayBuffer(newBook.file);
      
        } else {
          reader.readAsText(newBook.file);
        }
      }
    }
   
      
   
      
  return (
  
    <div>
      <Center>
       <Box p={4} borderWidth="1px" borderRadius="lg">
        <Text fontSize="2xl" fontWeight="bold" mb="4">
          Upload a Book
        </Text>
        <form>
          <Stack spacing={4}>
            <input
              type="text"
              placeholder="Title"
              value={newBook.title}
              onChange={handleTitleChange}
            />
            <input
              type="file"
              accept=".txt, txt "
              onChange={handleFileChange}
              required
            />
            <Button colorScheme="teal" onClick={handleAddBook}>
              Upload Book
            </Button>
          </Stack>
          
        </form>
        </Box>
        </Center>
      <Center>
      <BookView books={books} newBook={newBook}  newBooks={newBooks}/> 
      </Center>
    </div>
  )
}

