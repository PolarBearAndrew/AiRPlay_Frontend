import './PageStart.css';
import { SimpleGrid, Box, Flex, Spacer, Center, Circle, Text, VStack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { MdPlayArrow, MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';

function PageAdvancedSetting() {
  return (
    <VStack width='390px' spacing='1' paddingBottom='8'>
      <Box h='16'/>
      {/* preview */}
      <VStack p='4' px='12' spacing='8' w='full'>
        <Box w='full' h='8' textAlign='center'>
          <Text fontSize='3xl' fontWeight='700'>Advanced Setting</Text>
        </Box>
        <SimpleGrid w='full' columns={2} spacing='0' borderWidth='medium' borderColor='#000000'>
          <Center bg='gray.300' height='100' fontSize='xx-large'>
            <Circle size='20' borderWidth='thin' borderColor='#000000' borderStyle='dashed'>
              🦁
            </Circle>
          </Center>
          <Center bg='gray.300' height='100' fontSize='xx-large'>
            <Circle size='14' borderWidth='thin' borderColor='#000000' borderStyle='dashed'>
              🐼
            </Circle>
          </Center>
          <Center bg='gray.300' height='100' fontSize='xx-large'>
            <Circle size='16' borderWidth='thin' borderColor='#000000' borderStyle='dashed'>
              🐶
            </Circle>
          </Center>
          <Center bg='gray.300' height='100' fontSize='xx-large'>
            <Circle size='12' borderWidth='thin' borderColor='#000000' borderStyle='dashed'>
              🐱 
            </Circle>
          </Center>
        </SimpleGrid>
        {/* Advanced setting */}
        <Accordion w='full' defaultIndex={[0]} allowMultiple>
          <AccordionItem paddingY={2}>
              <AccordionButton>
                <Box flex='1' textAlign='left' fontWeight='bold'>
                  Game setting
                </Box>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={8} >
              <VStack paddingTop='4' paddingBottom='4' spacing='8'>
                <Flex h='4' align='center' w='full'> 
                  <Box w='160px' h='4' textAlign='left'>
                    <Text fontSize='ml' fontWeight='500'>Ball Size</Text>
                  </Box>
                  <Spacer />
                  <Box w='100px' h='4'>
                    <Slider aria-label='ball-size-slider' defaultValue={20} min={0} max={100} step={10}>
                      <SliderTrack bg='grey'>
                        <SliderFilledTrack bg='#000000' />
                      </SliderTrack>
                      <SliderThumb boxSize='4' bg='#000000' />
                    </Slider>
                  </Box>
                </Flex>
                <Flex h='4' align='center' w='full'> 
                  <Box w='160px' h='4' textAlign='left'>
                    <Text fontSize='ml' fontWeight='500'>Ball Speed</Text>
                  </Box>
                  <Spacer />
                  <Box w='100px' h='4'>
                    <Slider aria-label='ball-speed-slider' defaultValue={10} min={0} max={100} step={10}>
                      <SliderTrack bg='grey'>
                        <SliderFilledTrack bg='#000000' />
                      </SliderTrack>
                      <SliderThumb boxSize='4' bg='#000000' />
                    </Slider>
                  </Box>
                </Flex>
                <Flex h='4' align='center' w='full'> 
                  <Box w='160px' h='4' textAlign='left'>
                    <Text fontSize='ml' fontWeight='500'>Circle electricity</Text>
                  </Box>
                  <Spacer />
                  <Box w='100px' h='4'>
                    <Slider aria-label='circle-electricity-slider' defaultValue={40} min={0} max={100} step={10}>
                      <SliderTrack bg='grey'>
                        <SliderFilledTrack bg='#000000' />
                      </SliderTrack>
                      <SliderThumb boxSize='4' bg='#000000' />
                    </Slider>
                  </Box>
                </Flex>
                <Flex h='4' align='center' w='full'> 
                  <Box w='160px' h='4' textAlign='left'>
                    <Text fontSize='ml' fontWeight='500'>Boundary electricity</Text>
                  </Box>
                  <Spacer />
                  <Box w='100px' h='4'>
                    <Slider aria-label='boundary-electricity-slider' defaultValue={20} min={0} max={100} step={10}>
                      <SliderTrack bg='grey'>
                        <SliderFilledTrack bg='#000000' />
                      </SliderTrack>
                      <SliderThumb boxSize='4' bg='#000000' />
                    </Slider>
                  </Box>
                </Flex>
                <Flex h='4' align='center' w='full'> 
                  <Box w='160px' h='4' textAlign='left'>
                    <Text fontSize='ml' fontWeight='500'>Text size</Text>
                  </Box>
                  <Spacer />
                  <Box w='100px' h='4'>
                    <Slider aria-label='text-size-slider' defaultValue={30} min={0} max={100} step={10}>
                      <SliderTrack bg='grey'>
                        <SliderFilledTrack bg='#000000' />
                      </SliderTrack>
                      <SliderThumb boxSize='4' bg='#000000' />
                    </Slider>
                  </Box>
                </Flex>
                
              </VStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem paddingY={2}>
              <AccordionButton>
                <Box flex='1' textAlign='left' fontWeight='bold'>
                  Controller setting
                </Box>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={4}>
              <Tabs w='full' isFitted variant='soft-rounded' colorScheme='#46a3f7' >
                <TabList>
                  <Tab fontSize='sm'>🦁 <br></br>No CNTL</Tab>
                  <Tab fontSize='sm'>🐼 <br></br>Hand CNTL</Tab>
                  <Tab fontSize='sm'>🐶 <br></br>Knee CNTL</Tab>
                  <Tab fontSize='sm'>🐱 <br></br>Touch CNTL</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <VStack paddingTop='4' paddingBottom='4' spacing='8'>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left' verticalAlign='center'>
                          <Text fontSize='ml' fontWeight='500'>Player Circle Size</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4' verticalAlign='center'>
                          <Slider aria-label='player-circle-size-slider' defaultValue={80} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Expansion size</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='expasion-size' defaultValue={40} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Expansion speed</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='expansion-speed' defaultValue={30} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                    </VStack>
                  </TabPanel>

                  <TabPanel>
                    <VStack paddingTop='4' paddingBottom='4' spacing='8'>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Player Circle Size</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='player-circle-size-slider' defaultValue={50} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Expansion size</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='expasion-size' defaultValue={90} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Expansion speed</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='expansion-speed' defaultValue={20} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                    </VStack>
                  </TabPanel>

                  <TabPanel>
                    <VStack paddingTop='4' paddingBottom='4' spacing='8'>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Player Circle Size</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='player-circle-size-slider' defaultValue={30} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Expansion size</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='expasion-size' defaultValue={60} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Expansion speed</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='expansion-speed' defaultValue={50} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                    </VStack>
                  </TabPanel>

                  <TabPanel>
                    <VStack paddingTop='4' paddingBottom='4' spacing='8'>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Player Circle Size</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='player-circle-size-slider' defaultValue={10} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Expansion size</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='expasion-size' defaultValue={20} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                      <Flex h='4' align='center' w='full'> 
                        <Box w='160px' h='4' textAlign='left'>
                          <Text fontSize='ml' fontWeight='500'>Expansion speed</Text>
                        </Box>
                        <Spacer />
                        <Box w='100px' h='4'>
                          <Slider aria-label='expansion-speed' defaultValue={30} min={0} max={100} step={10}>
                            <SliderTrack bg='grey'>
                              <SliderFilledTrack bg='#000000' />
                            </SliderTrack>
                            <SliderThumb boxSize='4' bg='#000000' />
                          </Slider>
                        </Box>
                      </Flex>
                    </VStack>
                  </TabPanel>

                </TabPanels>
              </Tabs>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem paddingY={2}>
              <AccordionButton>
                <Box flex='1' textAlign='left' fontWeight='bold'>
                  Developer mode
                </Box>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={4} >
              <Box paddingTop='4' paddingBottom='4'>
               What should we put in here?
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Link to='/airhockey/setup'>
          <Button leftIcon={<MdKeyboardArrowLeft />} colorScheme='yellow' variant='outline'>
            Back
          </Button>
        </Link>
      </VStack>
    </VStack>
  );
}

export { PageAdvancedSetting }

