import React, { createContext, useContext, useState } from 'react';

const BookContext = createContext();

export function useBookContext() {
  return useContext(BookContext);
}

export function BookProvider({ children }) {
  const [newBooks, setNewBooks] = useState([]); // Initialize with an empty array

  return (
    <BookContext.Provider value={{ newBooks, setNewBooks }}>
      {children}
    </BookContext.Provider>
  );
}

