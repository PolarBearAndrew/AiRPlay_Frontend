import { SimpleGrid, Box, Center, Circle, Text, VStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { AdvancedSettingSliderBox } from "../../components/LayoutComponents";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getDataModel from "./DataModel";
import errorToast from "../../components/Toast";

const TabPanelContent = ({playerCircleSizeDefaultValue, expansionSizeDefaultValue, expansionSpeedDefaultValue, setPlayerCircleSize}:{playerCircleSizeDefaultValue:number,expansionSizeDefaultValue:number,expansionSpeedDefaultValue:number,setPlayerCircleSize:{(value: number): void}}) => (
  <VStack paddingY="4"spacing="8">
    <AdvancedSettingSliderBox
      name={"Player Circle Size"}
      ariaLabel={"player-circle-size-slider"}
      defaultValue={playerCircleSizeDefaultValue}
      onChangeEndFunc={setPlayerCircleSize}
    />
    <AdvancedSettingSliderBox
      name={"Expansion size"}
      ariaLabel={"expansion-size"}
      defaultValue={expansionSizeDefaultValue}
      onChangeEndFunc={(val) => {
        console.log("Expansion size: " + val);
      }}
    />
    <AdvancedSettingSliderBox
      name={"Expansion speed"}
      ariaLabel={"expansion-speed"}
      defaultValue={expansionSpeedDefaultValue}
      onChangeEndFunc={(val) => {
        console.log("Expansion speed: " + val);
      }}
    />
  </VStack>
);

const AirHockeyPageAdvancedSetting = () => {
  const airHockeyDataModel = getDataModel();
  const [airHockeyGameData, setAirHockeyGameData] = useState(airHockeyDataModel.getAirHockeyGameDataCopy())

  useEffect(() => {
    airHockeyDataModel.subscribeToUpdate(()=>{
      setAirHockeyGameData(airHockeyDataModel.getAirHockeyGameDataCopy())
    })
  },[airHockeyDataModel])

  return (
    <VStack width="390px" spacing="1" paddingBottom="8">

      {/* preview */}
      <VStack p="4" px="12" spacing="8" w="full">
        <Box w="full" h="8" textAlign="center">
          <Text fontSize="3xl" fontWeight="700">
            Advanced Setting
          </Text>
        </Box>
        <SimpleGrid w="full" columns={2} spacing="0" borderWidth="medium" borderColor="#000000">
          <Center bg="gray.300" height="100" fontSize="xx-large">
            <Circle size={airHockeyGameData.noCNTLRadius*10+"px"} borderWidth="thin" borderColor="#000000" borderStyle="dashed">
              👋
            </Circle>
          </Center>
          <Center bg="gray.300" height="100" fontSize="xx-large">
            <Circle size={airHockeyGameData.noCNTLRadius*10+"px"} borderWidth="thin" borderColor="#000000" borderStyle="dashed">
              👋 
            </Circle>
          </Center>
          <Center bg="gray.300" height="100" fontSize="xx-large">
            <Circle size={airHockeyGameData.CNTLRadius*10+"px"} borderWidth="thin" borderColor="#000000" borderStyle="dashed">
              🕹️
            </Circle>
          </Center>
          <Center bg="gray.300" height="100" fontSize="xx-large">
            <Circle size={airHockeyGameData.CNTLRadius*10+"px"} borderWidth="thin" borderColor="#000000" borderStyle="dashed">
              🕹️
            </Circle>
          </Center>
        </SimpleGrid>
        {/* court setting */}
        <Accordion w="full" defaultIndex={[0]} allowMultiple>
          <AccordionItem paddingY={2}>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Court settings
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={8}>
              <VStack paddingTop="4" paddingBottom="4" spacing="8">
                <AdvancedSettingSliderBox
                  name={"Ball Size"}
                  ariaLabel={"ball-size-slider"}
                  defaultValue={airHockeyGameData.ballRadius*10}
                  onChangeEndFunc={(val) => {
                    console.log("Ball Size: " + val);
                    airHockeyDataModel.setBallRadius(val/10);
                  }}
                />
                <AdvancedSettingSliderBox
                  name={"Ball Speed"}
                  ariaLabel={"ball-speed-slider"}
                  defaultValue={airHockeyGameData.ballSpeed*10}
                  onChangeEndFunc={(val) => {
                    console.log("Ball Speed: " + val);
                    airHockeyDataModel.setBallSpeed(val/10);
                  }}
                />Goal
                <AdvancedSettingSliderBox
                  name={"Goal size"}
                  ariaLabel={"goal-size-slider"}
                  defaultValue={airHockeyGameData.goalSize*10}
                  max = {50}
                  step = {10}
                  onChangeEndFunc={(val) => {
                    console.log("Goal size: " + val);
                    airHockeyDataModel.setGoalSize(val/10);
                  }}
                />
                <AdvancedSettingSliderBox
                  name={"Text size"}
                  ariaLabel={"text-size-slider"}
                  defaultValue={30}
                  onChangeEndFunc={(val) => {
                    console.log("Text size: " + val);
                    errorToast("Function not implemented","Coming soon");
                  }}
                />
                <AdvancedSettingSliderBox
                  name={"Friction"}
                  ariaLabel={"friction-slider"}
                  defaultValue={airHockeyGameData.friction*10}
                  onChangeEndFunc={(val) => {
                    console.log("Goal size: " + val);
                    airHockeyDataModel.setGoalSize(val/10);
                  }}
                />
                <AdvancedSettingSliderBox
                  name={"Bounciness"}
                  ariaLabel={"bounciness"}
                  defaultValue={40}
                  onChangeEndFunc={(val) => {
                    console.log("Bounciness: " + val);
                    errorToast("Function not implemented","Coming soon");
                  }}
                />

              </VStack>
            </AccordionPanel>
          </AccordionItem>
          {/* controller settings */}
          <AccordionItem paddingY={2}>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Controller settings
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Tabs w="full" isFitted variant="soft-rounded" colorScheme="tab">
                <TabList >
                  <Tab fontSize="sm">
                    👋 <br></br>No CNTL
                  </Tab>
                  <Tab fontSize="sm">
                    🕹️ <br></br>With CNTL
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <TabPanelContent playerCircleSizeDefaultValue={airHockeyGameData.noCNTLRadius*10} expansionSizeDefaultValue={30} expansionSpeedDefaultValue={40} setPlayerCircleSize={(val)=>{
                      airHockeyDataModel.setNoCNTLRadius(val/10)
                      }} />
                  </TabPanel>

                  <TabPanel>
                    <TabPanelContent playerCircleSizeDefaultValue={airHockeyGameData.CNTLRadius*10} expansionSizeDefaultValue={30} expansionSpeedDefaultValue={20} setPlayerCircleSize={(val)=>{
                      airHockeyDataModel.setCNTLRadius(val/10)
                      }}/>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </AccordionPanel>
          </AccordionItem>
          {/* developer mode */}
          <AccordionItem paddingY={2}>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                Developer mode
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Box paddingTop="4" paddingBottom="4">
                What should we put in here? Videos for CV team.
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Link to="/">
          <Button leftIcon={<MdKeyboardArrowLeft />} colorScheme="yellow" variant="outline">
            Back
          </Button>
        </Link>
      </VStack>
    </VStack>
  );
}

export { AirHockeyPageAdvancedSetting };
