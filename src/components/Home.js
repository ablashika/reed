import React from 'react'
import {Grid,GridItem, Divider,Flex} from '@chakra-ui/react'
import ProductSimple from './card'


export default function Home ({books, setBooks}) {
  return (
    <div className='libaryView'>
        <Divider />
        <Flex align="center">
        <ProductSimple books={books} setBooks={setBooks}/>
        </Flex>
    </div>
  )
}
