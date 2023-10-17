import React, { useState, useEffect } from 'react';
import './App.css';
import BookView from './components/bookView';
 import BookUpload from './components/BookUpload';
 import eloquentJavaScriptText from "../src/components/eloquent_javascript.txt";
 import Navbar from './components/Navbar';
 import { ChakraBaseProvider, extendBaseTheme,ChakraProvider } from '@chakra-ui/react'
import LibaryView from './components/LibaryView';
import Router from './components/Router';


function App() {

  const [books, setBooks] = useState([
    {
      title: 'Eloquent JavaScript', // Add the initial book details here
      content: eloquentJavaScriptText, // Set the content from the text file
    },
    {
      title: 'Eloquent JavaScript', // Add the initial book details here
      content: eloquentJavaScriptText, // Set the content from the text file
    },
    {
      title: 'Eloquent JavaScript', // Add the initial book details here
      content: eloquentJavaScriptText, // Set the content from the text file
    },
    {
      title: 'Eloquent JavaScript', // Add the initial book details here
      content: eloquentJavaScriptText, // Set the content from the text file
    }
  ]);

  
  return (
    <ChakraProvider>
    <div className="App">
      <Navbar />
      <Router books={books} setBooks={setBooks}/>
    </div>
    </ChakraProvider>
  );
}

export default App;
