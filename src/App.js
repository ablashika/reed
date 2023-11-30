import React, { useState, useEffect } from 'react';
import './App.css';
import BookView from './components/bookView';
 import BookUpload from './components/BookUpload';
 import eloquentJavaScriptText from "../src/components/eloquent_javascript.txt";
 import Navbar from './components/Navbar';
 import { ChakraBaseProvider, extendBaseTheme,ChakraProvider } from '@chakra-ui/react'
import LibaryView from './components/Home';
import Router from './components/Router';
import { BookProvider } from './components/BookProvider';
import Library from './components/Library';



function App() {

  const [books, setBooks] = useState([
    {
      title: 'Eloquent JavaScript', 
      content: "https://www.gutenberg.org/cache/epub/2542/pg2542.txt", 
    },
    {
      title: 'Eloquent JavaScript', 
      content: eloquentJavaScriptText, 
    },
  ]);

  
  return (
    <ChakraProvider>
    <BookProvider>
    <div className="App">
      <Navbar />
      <Router books={books} setBooks={setBooks}/>
    </div>
    </BookProvider>
    </ChakraProvider>

  );
}

export default App;
