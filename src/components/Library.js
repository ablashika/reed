
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, List, ListItem, Button } from '@chakra-ui/react';
import { useBookContext } from './BookProvider';

export default function Library() {
  const { newBooks } = useBookContext();

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Library
      </Heading>
      <List spacing={2}>
        {newBooks.map((book, index) => {
          console.log(book,"iii")
          return (
            <ListItem key={index} >
            <Heading as="h3" size="md" mb={2}>
              {book.title}
            </Heading>
              <Link to={`/book/${index}`} state={book}>
              <Button onClick={() => console.log(book, "fiii")}>
                View Book
              </Button>
              </Link>
          </ListItem>
          )
        }
        )}
      </List>
    </Box>
  );
}

