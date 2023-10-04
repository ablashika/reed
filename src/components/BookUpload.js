import React, { useState, useEffect } from 'react';

export default function BookUpload({books, setBooks}) {
     // State for multiple book objects
    const [newBook, setNewBook] = useState({ title: '', file: null });

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
    
            // Combine the new book with existing books
            setBooks([...books, newBookObject]);
    
            // Clear the form
            setNewBook({ title: '', file: null });
          };
    
          reader.readAsText(newBook.file);
        }
      };

      console.log(books)
  return (
    <div>
        <form>
        <input
        type="text"
        placeholder="Title"
        value={newBook.title}
        onChange={handleTitleChange}
      />
      <input
        type="file"
        accept=".txt"
        onChange={handleFileChange}
      />
      <button onClick={handleAddBook}>Upload Book</button>
        </form>
    </div>
  )
}
