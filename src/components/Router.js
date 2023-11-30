import React from 'react'
import { Routes, Route, Switch } from 'react-router-dom';
import Home from './Home';
import BookUpload from './BookUpload';
import ProductSimple from './card';
import BookView from './bookView';
import Library from './Library';
import BookContent from './BookContent';


export default function Router({books, setBooks}) {
  return (
    <Routes>
    <Route path="/" element={<Home books={books} setBooks={setBooks}/>} />
    <Route path="/upload" element={<BookUpload books={books} setBooks={setBooks}/>} />
    <Route path="/library" element={<Library books={books} setBooks={setBooks}/>} />
    <Route path="/book/:index" element={<BookContent  />} />
   
  </Routes>
  )
}
