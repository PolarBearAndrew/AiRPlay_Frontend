import React, { useState } from 'react';
import { ProgressBar } from './ProgressBar';
import './PageStart.css';
import { Box, Flex, Spacer, Text, VStack } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Button, IconButton } from '@chakra-ui/react'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react'
import { MdPlayArrow, MdNavigateNext, MdOutlineVolumeUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTimer } from 'react-timer-hook';


function getMyProgress(currSec: number, currMin: number, totalTime: number) {
  const currTotalSec = currSec + currMin * 60;
  const currProgress = (currTotalSec / totalTime) * 100
  return currProgress
}

function PageSetup() {
  const totalSeconds = 300; //next step - set timer
  const [myStep, setMyStep] = useState(2)

  const time = new Date();
  time.setSeconds(time.getSeconds() + totalSeconds); 

  const timerConfig = {
    autoStart: false,
    expiryTimestamp: time,
    onExpire: () => alert('timer on expire')
  }

  const {
    seconds, // next step - two digit
    minutes,
    // isRunning,
    start,
    // pause,
    // resume,
    // restart,
  } = useTimer(timerConfig);

  return (
    <VStack width='390px' spacing='1' paddingBottom='8'>
      <Box h='16'/>
      {/* progress bar */}
        <ProgressBar Step={myStep}/>
        {/* <MyTimer expiryTimestamp={time} /> */}
      {/* game setup */}
      <VStack p='4' px='12' spacing='8' w='full'>
        <Box w='full' h='8' textAlign='center'>
          <Text fontSize='3xl' fontWeight='700'>Air Hockey</Text>
        </Box>
        {/* <Button onClick={() => setMyProgress(myProgress - 5)}>Next step</Button> */}
        <CircularProgress value={getMyProgress(seconds, minutes, totalSeconds)} color='#46a3f7' capIsRound size='60' thickness='8'>
          <CircularProgressLabel fontSize='5xl' fontWeight='500'>{minutes}:{seconds}</CircularProgressLabel>
        </CircularProgress>
        <Button leftIcon={<MdPlayArrow />} colorScheme='yellow' variant='solid' onClick={() => {
          setMyStep(3);
          start();
        }}>
          Play
        </Button>
        {/* <Button onClick={() => setMyStep(myStep + 1)}>Next step</Button>
        <Button onClick={() => setMyStep((previousVal) => (previousVal + 1))}>Next step</Button> */}
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
          <Link to='/airhockey/setting'>
            <Box w='100px' h='4' textAlign='left'>
              <Text fontSize='ml' fontWeight='700'>Setting</Text>
            </Box>
          </Link>
          <Spacer />
          <Link to='/airhockey/setting'>
            <Box w='32px' h='4'>
              <IconButton variant='link' colorScheme='#000000' aria-label='Advanced setting' icon={<MdNavigateNext />} size='lg'/>
            </Box>
          </Link>
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

