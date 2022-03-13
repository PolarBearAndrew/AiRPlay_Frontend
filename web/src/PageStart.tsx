import React from 'react';
import logo from './comm/Logo.svg';
import './PageStart.css';
import { SimpleGrid, Box, Flex, Spacer, Center, Image } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'


function PageStart() {
  return (
    <SimpleGrid minChildWidth="390px" spacing={1}>
      {/* navigation bar */}
      <Box p='2' h='16'>
        <Flex>
          <Center w='20' h='12'>
            <Image h='4' src ={logo} />
          </Center>
          <Spacer />
            <Center w='12' h='12'>
          <HamburgerIcon w='6' h='6' />
          </Center>
        </Flex>
      </Box>
      {/* progress bar */}
      <Box bg='tomato' h={20}>

      </Box>
      {/* game selection */}
      <Box bg='tomato' h={600}>

      </Box>
    </SimpleGrid>
  );
}

// export {PageStart};

// basic 
// export let AllComponents = {
//   PageStart: PageStart
// }

// 簡化 1
export { PageStart }

