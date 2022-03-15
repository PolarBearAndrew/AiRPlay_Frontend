import React, { useState } from 'react';
import { ProgressBar } from './ProgressBar';
import './PageStart.css';
import { Box, Flex, Spacer, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Button, IconButton } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react'
import { MdPlayArrow, MdNavigateNext, MdOutlineVolumeUp, MdPause } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTimer } from 'react-timer-hook';



function PageSetup() {

  const [myStep, setMyStep] = useState(2);
  
  const totalSeconds = 10; //next step - set timer
  const time = new Date();
  time.setSeconds(time.getSeconds() + totalSeconds); 

  const timerConfig = {
    autoStart: false,
    expiryTimestamp: time,
    // onExpire: () => <EndModal />,
  };

  const {
    seconds, // next step - two digit
    minutes,
    isRunning,
    start,
    pause,
    // resume,
    // restart,
  } = useTimer(timerConfig);

  const minutesSt = minutes + '';
  const secondsSt = seconds + '';

  return (
    <VStack width='390px' spacing='1' paddingBottom='8'>
      <Box h='16'/>
      {/* progress bar */}
        <ProgressBar Step={myStep}/>
      {/* game setup */}
      <VStack p='4' px='12' spacing='8' w='full'>
        <Box w='full' h='8' textAlign='center'>
          <Text fontSize='3xl' fontWeight='700'>Air Hockey</Text>
        </Box>
        <CircularProgress value={getMyProgress(seconds, minutes, totalSeconds)} color='#46a3f7' capIsRound size='60' thickness='8'>
          <CircularProgressLabel fontSize='5xl' fontWeight='500'>
            {minutesSt.padStart(2,'0')}:{secondsSt.padStart(2,'0')}
          </CircularProgressLabel>
        </CircularProgress>
        {isRunning?     
          <Button 
            w ='24'
            leftIcon={<MdPause />} 
            colorScheme='yellow' 
            variant='outline' 
            onClick={() => {setMyStep(2); pause()}}
          >
            Pause
          </Button>
          : 
          <Button 
          w ='24'
          leftIcon={<MdPlayArrow />} 
          colorScheme='yellow' 
          variant='solid' 
          onClick={() => {setMyStep(3); start()}}
        >
          Play
        </Button> 
        }
        {/* <Button onClick={() => setMyStep((previousVal) => (previousVal + 1))}>Next step</Button> */}
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
          <Link to='/'>
            <Box w='100px' h='4' textAlign='left'>
              <Text fontSize='ml' fontWeight='700' textColor='red'>Exit</Text>
            </Box>
          </Link>
          <Spacer />
          <Link to='/'>
            <Box w='32px' h='4'>
              <IconButton variant='link' colorScheme='red' aria-label='Advanced setting' icon={<MdNavigateNext />} size='lg'/>
            </Box>
          </Link>
        </Flex>
      </VStack>
    </VStack>
  );
}


// function PlayBtN(){
  

  
//   return(
//     <Button 
//       w ='24'
//       leftIcon={<MdPlayArrow />} 
//       colorScheme='yellow' 
//       variant='solid' 
//       onClick={() => { this.PageSetup(setMyStep(3)); this.PageSetup(start())}}
//     >
//       Play
//     </Button>
//   )  
// }

// function PauseBtN(){
//   return(
//     <Button 
//       w ='24'
//       leftIcon={<MdPause />} 
//       colorScheme='yellow' 
//       variant='outline' 
//       // onClick={() => {setMyStep(2)}}
//     >
//       Pause
//     </Button>
//   )  
// }

// function EndModal() {
  
//   const { isOpen, onClose } = useDisclosure()

//   return (
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader />
//           <ModalBody textAlign='center' fontSize='x-large' fontWeight='bold'>
//             Nice Play
//           </ModalBody>
//           <ModalFooter>
//             <Link to='/'>
//               <Button>Restart</Button>
//             </Link>
//             <Link to='/airhockey/setup'>
//               <Button>End</Button>
//             </Link>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//   )
// }

function getMyProgress(currSec: number, currMin: number, totalTime: number) {
  const currTotalSec = currSec + currMin * 60;
  const currProgress = (currTotalSec / totalTime) * 100
  return currProgress
}

export { PageSetup }

