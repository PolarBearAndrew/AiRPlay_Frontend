import { useRef } from 'react';
import logo from '../comm/Logo.svg';
import '../index.css';
import { Spacer, Flex, Center, Image, useDisclosure, IconButton, Box, Text } from '@chakra-ui/react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom'
import { MdNavigateNext } from 'react-icons/md';

function NavBar(){
  return(
    <Flex position='fixed' w='full' p='2' h='16' bg='white'>
      <Center w='20' h='12'>
        <Link to='/'> 
          <Image h='4' src ={logo} />
        </Link>
      </Center>
      <Spacer />
        <Center w='12' h='12'>
          <DrawerMenu />
        </Center>
    </Flex>
  )         
};

function DrawerMenu() {

  const btnRef = useRef() as any;
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const disclosure = useDisclosure();
  // const isOpen = disclosure.isOpen;
  // const onOpen = disclosure.onOpen;
  // const onClose = disclosure.onClose;

  return (
    <>
      <IconButton ref={btnRef} onClick={onOpen} aria-label='drawer-menu' icon={<HamburgerIcon />} variant='link' colorScheme='#000000' size='lg' />
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef} size='xs' >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody paddingY='12'>
            <Flex h='20' align='center' w='full'> 
              <Link to='/'>
                <Box w='100px' h='4' textAlign='left'>
                  <Text fontSize='ml' fontWeight='700'>Play a game</Text>
                </Box>
              </Link>
              <Spacer />
              <Link to='/'>
                <Box w='32px' h='4'>
                  <IconButton variant='link' colorScheme='#000000' aria-label='Advanced setting' icon={<MdNavigateNext />} size='lg'/>
                </Box>
              </Link>
            </Flex>
            <Flex h='20' align='center' w='full'> 
              <Link to='/'>
                <Box w='100px' h='4' textAlign='left'>
                  <Text fontSize='ml' fontWeight='700'>About iGYM</Text>
                </Box>
              </Link>
              <Spacer />
              <Link to='/'>
                <Box w='32px' h='4'>
                  <IconButton variant='link' colorScheme='#000000' aria-label='Advanced setting' icon={<MdNavigateNext />} size='lg'/>
                </Box>
              </Link>
            </Flex>
          </DrawerBody>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </>
  )
}

export { NavBar }
