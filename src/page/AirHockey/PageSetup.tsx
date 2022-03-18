import { useState } from "react";
import { ProgressBar } from "../../components/ProgressBar";
import { Box, Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { MdPlayArrow, MdOutlineVolumeUp, MdPause, MdKeyboardArrowLeft, MdOutlineRestartAlt } from "react-icons/md";
import { useTimer } from "react-timer-hook";
import getDataModel from "./DataModel";
import { SettingClickBox, SettingLinkBox } from "../../components/LayoutComponents";
import { Link } from "react-router-dom";

function AirHockeyPageSetup() {
  const [myStep, setMyStep] = useState(2);

  const totalSeconds = 10; //next step - set timer
  const time = new Date();
  time.setSeconds(time.getSeconds() + totalSeconds);

  const timerConfig = {
    autoStart: false,
    expiryTimestamp: time
    // onExpire: () => <EndModal />,
  };

  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer(timerConfig);

  const minutesSt = minutes + "";
  const secondsSt = seconds + "";

  // Connection to data
  const airHockeyDataModel = getDataModel();

  return (
    <VStack width="full" spacing="1" paddingBottom="8">
      {/* progress bar */}
      <ProgressBar Step={myStep} />
      {/* game setup */}
      <VStack p="4" px="12" spacing="8" w="full">
        <Box w="full" h="8" textAlign="center">
          <Text fontSize="3xl" fontWeight="700">
            Air Hockey
          </Text>
        </Box>
        <CircularProgress value={getMyProgress(seconds, minutes, totalSeconds)} color="#46a3f7" capIsRound size="60" thickness="8">
          <CircularProgressLabel fontSize="5xl" fontWeight="500">
            {minutesSt.padStart(2, "0")}:{secondsSt.padStart(2, "0")}
          </CircularProgressLabel>
        </CircularProgress>
        {isRunning ? (
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
                        variant="outline"
                        onClick={() => {
                          setMyStep(2);
                          start()}}
                      >
                        Start
                      </Button>
                ) : ( (minutes < 1) && (seconds < 1 ) ? (
                          <Button
                            w="24"
                            leftIcon={<MdOutlineRestartAlt />}
                            colorScheme="yellow"
                            variant="outline"
                            onClick={() => {
                              const time = new Date();
                              time.setSeconds(time.getSeconds() + totalSeconds);
                              setMyStep(2);
                              restart(time)}}
                          >
                            Restart
                          </Button>
                    ) : (
                          <Button
                            w="24"
                            leftIcon={<MdOutlineRestartAlt />}
                            colorScheme="yellow"
                            variant="outline"
                            onClick={() => {
                              setMyStep(2);
                              resume()}}
                          >
                            Resume
                          </Button>
                        )))
        }
        {/* <Button onClick={() => setMyStep((previousVal) => (previousVal + 1))}>Next step</Button> */}
        <Spacer />
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
                <SliderFilledTrack bg="#000000" />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color="#000000" as={MdOutlineVolumeUp} />
              </SliderThumb>
            </Slider>
          </Box>
        </Flex>
        <SettingLinkBox name = "Setting" link = "/airhockey/setting" ariaLabel="Advanced setting"/>
        <SettingLinkBox name = "Tutorial" link = "/" ariaLabel="Tutorial"/>
        <SettingClickBox name = "Recapture Background" callback={()=>{airHockeyDataModel.setCapture();}}  ariaLabel="recapture-background"/>
        <Spacer h="4px" />
        <Link to="/airhockey/setup">
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

function getMyProgress(currSec: number, currMin: number, totalTime: number) {
  const currTotalSec = currSec + currMin * 60;
  const currProgress = (currTotalSec / totalTime) * 100;
  return currProgress;
}

export { AirHockeyPageSetup };
