import React from 'react';
import logo from './comm/Logo.svg';
import ProgressSeparator from './comm/ProgressSeparator.svg';
import './PageStart.css';
import { SimpleGrid, Box, Flex, Spacer, Center, Image, Circle, Text } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'


function PageStart() {
  return (
    <SimpleGrid minChildWidth="390px" spacing='1'>
      {/* navigation bar */}
      <Flex p='2' h='16'>
        <Center w='20' h='12'>
          <Image h='4' src ={logo} />
        </Center>
        <Spacer />
          <Center w='12' h='12'>
        <HamburgerIcon w='6' h='6' />
        </Center>
      </Flex>
      {/* progress bar */}
      <Flex p='2' h='20'>
        <Spacer />
        <Center>
          <Breadcrumb spacing='4' separator={<Image w='700' h='20' src={ProgressSeparator} />}>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>
                  <Circle size='10' bg='#46a3f7' color='#000000' fontWeight='bold'>
                    1
                  </Circle>
                  <Box fontSize='xs' fontWeight='bold' textAlign='center'>
                    Select
                  </Box>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>
                <Circle size='10' bg='#46a3f7' color='#000000' fontWeight='bold'>
                    2
                </Circle>
                <Box fontSize='xs' fontWeight='bold' textAlign='center'>
                  Setup
                </Box>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>
                <Circle size='10' bg='#46a3f7' color='#000000' fontWeight='bold'>
                      3
                </Circle>
                <Box fontSize='xs' fontWeight='bold' textAlign='center'>
                  Play
                </Box>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Center>
        <Spacer />
      </Flex>
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

