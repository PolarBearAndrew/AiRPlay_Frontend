import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { PageStart } from './page/PageStart';
import { AirHockeyPageSetup } from './page/AirHockey/PageSetup';
import { AirHockeyPageAdvancedSetting } from './page/AirHockey/PageAdvancedSetting';
import { NavBar } from './components/NavBar';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, VStack } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from './lib/theme';

interface RootProps {
  children: JSX.Element[];
}

function Root(props: RootProps) {
  return (
    <VStack spacing='1' paddingBottom='8'>
      {props.children}
    </VStack>
  )
}

ReactDOM.render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Root>
            <NavBar />
            <Routes>
              <Route path='/' element={<PageStart />} />
              <Route path='/airhockey/setup' element={<AirHockeyPageSetup />} />
              <Route path='/airhockey/setting' element={<AirHockeyPageAdvancedSetting />} />
            </Routes>
          </Root>
        </BrowserRouter> 
      </ChakraProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

// function PageStartRoute() {
//   return (
//       <nav>
//         <Link to="/">About</Link>
//       </nav>
//     </>
//   );
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
