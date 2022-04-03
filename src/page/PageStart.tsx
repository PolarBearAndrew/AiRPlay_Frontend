import AiRHockeyVideo from '../comm/AirHockeyVideo.gif';
import { ProgressBar } from '../components/ProgressBar';
import './PageStart.css';
import { Box, Center, Image, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { Link } from "react-router-dom";


function PageStart() {
  return (
  
    <VStack width={{base:"full", sm:"390px"}} spacing='1' paddingBottom='8'>
      <Box w="full" h="16" />
      {/* progress bar */}
      <Center w="full" position="fixed" top="14" zIndex="10" bg={useColorModeValue("white","gray.800")}>
        <ProgressBar Step={1}/>
      </Center>
      {/* game selection */}
      <VStack p='4' px='12' spacing='8' w='full'>
        <Box w="full" h="12" />
        <Box position='relative' w='full' h='200' rounded='12' overflow='hidden' boxShadow='sm'>
          <Link to='/airhockey/setup'>
            <Box position='absolute' w='full' h='200' rounded='12' overflow='hidden' boxShadow='sm' alignItems='center' verticalAlign='center'>
              <Image src={AiRHockeyVideo} alt='AirHockeyVideo' h='full'/>
            </Box>
            <Center position='absolute' w='full' h='200'>
                <Text textAlign='center' color='blue.400' fontWeight='bold' fontSize='4xl'>Air Hockey</Text>
            </Center>
          </Link>
        </Box>
        <Center w='full' h='200' bg='gray.400' rounded='12' overflow='hidden' boxShadow='sm'>
          More to come....
        </Center>
        <Center w='full' h='200' bg='gray.400' rounded='12' overflow='hidden' boxShadow='sm'>
          More to come....
        </Center>
      </VStack>
    </VStack>
  );
}

export { PageStart }

