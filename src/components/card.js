
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react'
import {
  Link,
} from 'react-router-dom';

const IMAGE =
  'https://images.unsplash.com/photo-1528459061998-56fd57ad86e3?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2770'

export default function ProductSimple({books}) {

  console.log(books, "pro")
  return (<>
     
    {books.map((book, index)=>(<>
      <Link to={`/book/${index}`} key={index}>
    <Center py={12}>
   
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        backgroundColor={'gray.100'}
        // bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
           {book.title}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            Reed
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              $57
            </Text>
           
          </Stack>
        </Stack>
       
     
      </Box>
   
    </Center>
    </Link>
       </>))}
      
    </>
  )
}