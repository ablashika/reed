import React, { useState, useEffect } from 'react';
import './App.css';
import BookView from './components/bookView';
 import BookUpload from './components/BookUpload';
 import eloquentJavaScriptText from "../src/components/eloquent_javascript.txt";


function App() {

  const [books, setBooks] = useState([
    {
      title: 'Eloquent JavaScript', // Add the initial book details here
      content: eloquentJavaScriptText, // Set the content from the text file
    }
  ]);

  
  return (
    <div className="App">
      <BookUpload books={books} setBooks={setBooks}/>
     <BookView books={books}/>
    </div>
  );
}

export default App;
