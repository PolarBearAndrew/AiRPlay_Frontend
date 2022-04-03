import { useState } from "react";
import { ProgressBar } from "../../components/ProgressBar";
import { Box, Center, Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, useColorModeValue } from "@chakra-ui/react";
import { MdOutlineVolumeUp, MdPause, MdKeyboardArrowLeft, MdOutlineRestartAlt, MdPlayArrow } from "react-icons/md";
import { TimerResult } from "react-timer-hook";
import getDataModel from "./DataModel";
import { SettingClickBox, SettingLinkBox, SettingTutorialModal } from "../../components/LayoutComponents";
import { Link } from "react-router-dom";

interface IAirHockeyPageSetupProps extends TimerResult {
  totalSeconds: number
  restart: () => void
}

function AirHockeyPageSetup(props: IAirHockeyPageSetupProps) {
  const [myStep, setMyStep] = useState(2);
  const airHockeyDataModel = getDataModel();
  const {
    isRunning, seconds, minutes, totalSeconds,
    start, pause, resume, restart
  } = props;

  

  const minutesSt = props.minutes + "";
  const secondsSt = props.seconds + "";

  return (
    <VStack width={{ base: "full", sm: "390px" }} spacing="1" paddingBottom="8">
      <Box w="full" h="16" />
      {/* progress bar */}
      <Center w="full" position="fixed" top="14" zIndex="11" bg={useColorModeValue("white","gray.800")}>
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
          ) : ( (totalSeconds === minutes*60 + seconds) ? (
                      <Button
                        w="24"
                        leftIcon={<MdPlayArrow />}
                        colorScheme="yellow"
                        variant="solid"
                        onClick={() => {
                          setMyStep(3);
                          start()
                        }}
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
                              setMyStep(3);
                              restart()
                            }}
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
        }
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
                <SliderFilledTrack bg={useColorModeValue( "gray.900", "blue.300")} />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color={useColorModeValue( "gray.900", "blue.400")} as={MdOutlineVolumeUp} />
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

export { AirHockeyPageSetup };
