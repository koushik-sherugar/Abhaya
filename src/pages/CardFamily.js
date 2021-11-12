
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    // Badge,
    // useColorModeValue,
  } from '@chakra-ui/react';
  
  const CardData = [
       {     "id":1,
            // image:require('')
           "name": 'koushik',
           "call": 66777,
       },
       {     "id":2,
            // image:require('')
           "name": 'kunal',
           "call": 66777,
       },
    
       
       
   ]
  const  CardFamily=()=> {
    return (
        <>
        {CardData.map((cardEach, index)=>{
            return(
                
                <Center py={6}>
        <Box
        maxW={'320px'}
        w={'full'}
        // bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          // src={
          //   'https://source.unsplash.com/random'
          // }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          // _after={{
          //   content: '""',
          //   w: 4,
          //   h: 4,
          //   bg: 'green.300',
          //   border: '2px solid white',
          //   rounded: 'full',
          //   pos: 'absolute',
          //   bottom: 0,
          //   right: 3,
          // }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          
        </Heading>
        <Text fontWeight={600} color={'gray.700'} mb={4}>
          {cardEach.name}
        </Text>
        <Text
          textAlign={'center'}
        //   color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          
        </Text>

        {/* <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            Family
          </Badge>
          
        </Stack> */}

        <Stack mt={8} direction={'row'} spacing={4}>
        <Button
        
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'green.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'green.400',
            }}
            _focus={{
              bg: 'green.400',
            }}>
            call now
          </Button>
            <Link href="/message">
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            message
          </Button>
          </Link>
        </Stack>
        </Box>
        </Center>
            )
        })}
        </>
    );
  }
  export default CardFamily