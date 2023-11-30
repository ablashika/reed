import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';





export default function BookContent() {
   const location = useLocation();
   let book = location.state;
   const navigate = useNavigate();





  return (
    <div>
      <Text>hii</Text>
      <Text>{book.content}</Text>
      <button onClick={() => navigate('/library')}>Back to Library</button>
    </div>
  );
}
