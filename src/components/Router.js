import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LibaryView from './LibaryView';
import BookUpload from './BookUpload';

export default function Router({books, setBooks}) {
  return (
    <Routes>
    {/* <Route path="/" element={<Home />} /> */}
    <Route path="/" element={<LibaryView books={books} setBooks={setBooks}/>} />
    <Route path="/upload" element={<BookUpload books={books} setBooks={setBooks}/>} />
    
  </Routes>
  )
}
