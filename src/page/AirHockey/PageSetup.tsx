import { useState } from "react";
import { ProgressBar } from "../../components/ProgressBar";
import { Box, Center, Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, useColorModeValue } from "@chakra-ui/react";
import { MdPlayArrow, MdOutlineVolumeUp, MdPause, MdKeyboardArrowLeft, MdOutlineRestartAlt } from "react-icons/md";
import { useStopwatch } from "react-timer-hook";
import getDataModel from "./DataModel";
import { SettingClickBox, SettingLinkBox, SettingTutorialModal } from "../../components/LayoutComponents";
import { Link } from "react-router-dom";
import {clockState, getClockDataModel} from "./ClockDataModel";

function AirHockeyPageSetup() {
  const [myStep, setMyStep] = useState(2);

  // const totalSeconds = 10; //next step - set timer
  // const time = new Date();
  // time.setSeconds(time.getSeconds() + totalSeconds);

  // const timerConfig = {
  //   autoStart: false,
  //   expiryTimestamp: time
  //   // onExpire: () => <EndModal />,
  // };

  // const {
  //   seconds,
  //   minutes,
  //   isRunning,
  //   start,
  //   pause,
  //   resume,
  //   restart,
  // } = useTimer(timerConfig);



  // Connection to data
  const airHockeyDataModel = getDataModel();

  const clockDataModel = getClockDataModel();

  const { seconds, minutes, isRunning, start, pause} = useStopwatch({ autoStart:  clockDataModel.state === clockState.isRunning, offsetTimestamp: (clockDataModel.state === clockState.isUnstart)? new Date(): clockDataModel.getOffSet()});

  const minutesSt = minutes + "";
  const secondsSt = seconds + "";

  return (
    <VStack width={{ base: "full", sm: "390px" }} spacing="1" paddingBottom="8">
      <Box w="full" h="16" />
      {/* progress bar */}
      <Center w="full" position="fixed" top="16" zIndex="11" bg={useColorModeValue("white","gray.800")}>
        <ProgressBar Step={myStep} />
      </Center>
      {/* game setup */}
      <VStack p="4" px="12" spacing="8" w="full" position="fixed" bg={useColorModeValue("white","gray.800")} zIndex={10}>
        <Box w="full" h="12" />
        <Box w="full" h="8" textAlign="center">
          <Text fontSize="3xl" fontWeight="700">
            Air Hockey
          </Text>
        </Box>
        <CircularProgress value={100} color="blue.300" capIsRound size="60" thickness="8">
          {/* We do not have a time limit in our real game. So we should just display how long we have played right not*/}
          <CircularProgressLabel fontSize="5xl" fontWeight="500">
            {minutesSt.padStart(2, "0")}:{secondsSt.padStart(2, "0")}
          </CircularProgressLabel>
        </CircularProgress>
        {/* {isRunning ? (
          <Button
            w="24"
            leftIcon={<MdPause />}
            colorScheme="yellow"
            variant="outline"
            onClick={() => {
              setMyStep(2);
              pause();
            }}
          >
            Pause
          </Button>
          ) : ( (totalSeconds == minutes*60 + seconds) ? (
                      <Button
                        w="24"
                        leftIcon={<MdPlayArrow />}
                        colorScheme="yellow"
                        variant="solid"
                        onClick={() => {
                          setMyStep(3);
                          start()}}
                      >
                        Start
                      </Button>
                ) : ( (minutes < 1) && (seconds < 1 ) ? (
                          <Button
                            w="24"
                            leftIcon={<MdOutlineRestartAlt />}
                            colorScheme="yellow"
                            variant="solid"
                            onClick={() => {
                              const time = new Date();
                              time.setSeconds(time.getSeconds() + totalSeconds);
                              setMyStep(3);
                              restart(time)}}
                          >
                            Restart
                          </Button>
                    ) : (
                          <Button
                            w="24"
                            leftIcon={<MdOutlineRestartAlt />}
                            colorScheme="yellow"
                            variant="solid"
                            onClick={() => {
                              setMyStep(3);
                              resume()}}
                          >
                            Resume
                          </Button>
                        )))
        } */}
        {/* <Button onClick={() => setMyStep((previousVal) => (previousVal + 1))}>Next step</Button> */}

        {isRunning ? (
          <Button
            w="24"
            leftIcon={<MdPause />}
            colorScheme="yellow"
            variant="outline"
            onClick={() => {
              setMyStep(2);
              pause();
              clockDataModel.pause();
            }}
          >
            Pause
          </Button>
        ) : minutes < 1 && seconds < 1 ? (
          <Button
            w="24"
            leftIcon={<MdOutlineRestartAlt />}
            colorScheme="yellow"
            variant="solid"
            onClick={() => {
              // const time = new Date();
              // time.setSeconds(time.getSeconds() + totalSeconds);
              setMyStep(3);
              start();
              clockDataModel.start();
            }}
          >
            Start
          </Button>
        ) : (
          <Button
            w="24"
            leftIcon={<MdOutlineRestartAlt />}
            colorScheme="yellow"
            variant="solid"
            onClick={() => {
              setMyStep(3);
              start();
              clockDataModel.resume();
            }}
          >
            Resume
          </Button>
        )}
      </VStack>
      <VStack spacing="8" px="12">
        <Box w="full" h="420" />
        <Flex h="4" align="center" w="full">
          <Box w="100px" h="4" textAlign="left">
            <Text fontSize="ml" fontWeight="700">
              Volume
            </Text>
          </Box>
          <Spacer />
          <Box w="200px" h="4">
            <Slider aria-label="volume-slider" defaultValue={30} min={0} max={100} step={10}>
              <SliderTrack bg="gray.300">
                <SliderFilledTrack bg="gray.900" />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color="gray.900" as={MdOutlineVolumeUp} />
              </SliderThumb>
            </Slider>
          </Box>
        </Flex>
        <SettingLinkBox name="Setting" link="/airhockey/setting" ariaLabel="Advanced setting" />
        <SettingTutorialModal name="Tutorial" ariaLabel="Tutorial" />
        <SettingClickBox
          name="Recapture Background"
          callback={() => {
            airHockeyDataModel.setCapture();
          }}
          ariaLabel="recapture-background"
        />
        <Spacer h="4px" />
        <Link to="/">
          <Button leftIcon={<MdKeyboardArrowLeft />} colorScheme="red" variant="outline">
            Exit
          </Button>
        </Link>
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

// function getMyProgress(currSec: number, currMin: number, totalTime: number) {
//   const currTotalSec = currSec + currMin * 60;
//   const currProgress = (currTotalSec / totalTime) * 100;
//   return currProgress;
// }

export { AirHockeyPageSetup };
