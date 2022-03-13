import React from 'react';
import logo from './comm/Logo.svg';
import ProgressSeparator from './comm/ProgressSeparator.svg';
import AiRHockeyVideo from './comm/AirHockeyVideo.gif';
import './PageStart.css';
import { SimpleGrid, Box, Flex, Spacer, Center, Image, Circle, Text, VStack } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/react';
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { MdPlayArrow, MdNavigateNext, MdOutlineVolumeUp } from "react-icons/md";


function PageStart() {
  return (
    <SimpleGrid minChildWidth="390px" spacing='1' paddingBottom='8'>
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
                <Circle size='10' borderColor='#46a3f7' borderWidth='medium'  color='#000000' fontWeight='bold'>
                    2
                </Circle>
                <Box fontSize='xs' fontWeight='bold' textAlign='center'>
                  Setup
                </Box>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>
                <Circle size='10' borderColor='#46a3f7' borderWidth='medium' color='#000000' fontWeight='bold'>
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
      <VStack p='4' px='12' spacing='8' w='full'>
        <Box w='full' h='200' bg='yellow' rounded='12' overflow='hidden' boxShadow='sm'>
          <Image src={AiRHockeyVideo} alt='AirHockeyVideo' h='full'/>
        </Box>
        <Center w='full' h='200' bg='lightgrey' rounded='12' overflow='hidden' boxShadow='sm'>
          More to come....
        </Center>
        <Center w='full' h='200' bg='lightgrey' rounded='12' overflow='hidden' boxShadow='sm'>
          More to come....
        </Center>
      </VStack>
    </SimpleGrid>
  );
}

function PageSetup() {
  return (
    <SimpleGrid minChildWidth="390px" spacing='1' paddingBottom='8'>
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
                  <Circle size='10' borderColor='#46a3f7' borderWidth='medium' color='#000000' fontWeight='700'>
                    1
                  </Circle>
                  <Box fontSize='xs' fontWeight='700' textAlign='center'>
                    Select
                  </Box>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>
                <Circle size='10' bg='#46a3f7' color='#000000' fontWeight='bold'>
                    2
                </Circle>
                <Box fontSize='xs' fontWeight='700' textAlign='center'>
                  Setup
                </Box>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>
                <Circle size='10' borderColor='#46a3f7' borderWidth='medium' color='#000000' fontWeight='bold'>
                      3
                </Circle>
                <Box fontSize='xs' fontWeight='700' textAlign='center'>
                  Play
                </Box>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Center>
        <Spacer />
      </Flex>
      {/* game setup */}
      <VStack p='4' px='12' spacing='8' w='full'>
        <Box w='full' h='8' textAlign='center'>
          <Text fontSize='3xl' fontWeight='700'>Air Hockey</Text>
        </Box>
        <CircularProgress value={100} color='#46a3f7' capIsRound size='60' thickness='8'>
          <CircularProgressLabel fontSize='5xl' fontWeight='500'>10:00</CircularProgressLabel>
        </CircularProgress>
        <Button leftIcon={<MdPlayArrow />} colorScheme='yellow' variant='solid'>
          Play
        </Button>
        <Spacer />
        <Flex h='4' align='center' w='full'> 
          <Box w='100px' h='4' textAlign='left'>
            <Text fontSize='ml' fontWeight='700'>Volume</Text>
          </Box>
          <Spacer />
          <Box w='200px' h='4'>
            <Slider aria-label='slider-ex-4' defaultValue={30}>
              <SliderTrack bg='grey'>
                <SliderFilledTrack bg='#000000' />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color='#000000' as={MdOutlineVolumeUp} />
              </SliderThumb>
            </Slider>
          </Box>
        </Flex>
        <Flex h='4' align='center' w='full'> 
          <Box w='100px' h='4' textAlign='left'>
            <Text fontSize='ml' fontWeight='700'>Setting</Text>
          </Box>
          <Spacer />
          <Box w='32px' h='4'>
            <IconButton variant='link' colorScheme='#000000' aria-label='Advanced setting' icon={<MdNavigateNext />} size='lg'/>
          </Box>
        </Flex>
        <Flex h='4' align='center' w='full'> 
          <Box w='100px' h='4' textAlign='left'>
            <Text fontSize='ml' fontWeight='700'>Tutorial</Text>
          </Box>
          <Spacer />
          <Box w='32px' h='4'>
            <IconButton variant='link' colorScheme='#000000' aria-label='Advanced setting' icon={<MdNavigateNext />} size='lg'/>
          </Box>
        </Flex>
        <Flex h='4' align='center' w='full'> 
          <Box w='100px' h='4' textAlign='left'>
            <Text fontSize='ml' fontWeight='700' textColor='red'>Exit</Text>
          </Box>
          <Spacer />
          <Box w='32px' h='4'>
            <IconButton variant='link' colorScheme='red' aria-label='Advanced setting' icon={<MdNavigateNext />} size='lg'/>
          </Box>
        </Flex>
      </VStack>
    </SimpleGrid>
  );
}

// export {PageStart};

// basic 
// export let AllComponents = {
//   PageStart: PageStart
// }

// 簡化 1
export { PageStart, PageSetup }

