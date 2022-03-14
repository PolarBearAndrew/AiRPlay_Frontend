import React from 'react';
import { ProgressBar } from './ProgressBar';
import './PageStart.css';
import { SimpleGrid, Box, Flex, Spacer, Center, Image, Circle, Text, VStack } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark } from '@chakra-ui/react'
import { MdPlayArrow, MdNavigateNext, MdOutlineVolumeUp } from "react-icons/md";

function PageSetup() {
  return (
    <VStack width='390px' spacing='1' paddingBottom='8'>
      <Box h='16'/>
      {/* progress bar */}
        <ProgressBar Step={2}/>
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
            <Slider aria-label='volume-slider' defaultValue={30} min={0} max={100} step={10}>
              <SliderTrack bg='gray.300'>
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
    </VStack>
  );
}

export { PageSetup }

