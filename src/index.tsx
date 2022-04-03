import React, {  } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { PageStart } from './page/PageStart';
import { AirHockeyPageSetup } from './page/AirHockey/PageSetup';
import { AirHockeyPageAdvancedSetting } from './page/AirHockey/PageAdvancedSetting';
import { NavBar } from './components/NavBar';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, VStack } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import theme from './lib/theme';

interface RootProps {
}

const totalSeconds = 10; //next step - set timer

function getNextAlertTime(): Date {
  const time = new Date();
  time.setSeconds(time.getSeconds() + totalSeconds);
  return time
}

function Root(props: RootProps) {
  const timerResult = useTimer({ expiryTimestamp: new Date() });

  return ( 
    <VStack spacing='1' paddingBottom='8'>
      <NavBar />
      <Routes>
        <Route path='/' element={<PageStart />} />
        <Route path='/airhockey/setup' element={
          <AirHockeyPageSetup
            {...timerResult}
            totalSeconds={totalSeconds}
            start={() => { timerResult.restart(getNextAlertTime()) }}
            restart={() => { timerResult.restart(getNextAlertTime()) }}
          />
        }/>
        <Route path='/airhockey/setting' element={<AirHockeyPageAdvancedSetting />} />
      </Routes>
    </VStack>
  )
}

ReactDOM.render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Root/>
        </BrowserRouter> 
      </ChakraProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
