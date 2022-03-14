import React from 'react';
import ReactDOM from 'react-dom';
import logo from './comm/Logo.svg';
import './index.css';
import { PageStart } from './PageStart';
import { PageSetup } from './PageSetup';
import { PageAdvancedSetting } from './PageAdvancedSetting';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, Spacer, VStack, Flex, Center, Image } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* navigation bar */}
      <VStack width='390px' spacing='1' paddingBottom='8'>
        <Flex position='fixed' w='full' p='2' h='16' bg='white'>
          <Center w='20' h='12'>
            <Image h='4' src ={logo} />
          </Center>
          <Spacer />
            <Center w='12' h='12'>
          <HamburgerIcon w='6' h='6' />
          </Center>
        </Flex>
        <PageStart />
        <PageSetup />
        <PageAdvancedSetting />
      </VStack>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


