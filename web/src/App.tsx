import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MdBuild , MdCall } from 'react-icons/md';
import { Button, Stack, Text } from '@chakra-ui/react';
import { BigText, SmallText } from './comm/text'

function PageStart() {
  let h = 300;
  // view
  return (
    <div className="App">
      <BigText content='Here is BigText'></BigText>
      <SmallText content='Here is SmallText'></SmallText>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Joanne React
        </a>
        <Stack direction='row' spacing={4}>
          <Button leftIcon={<MdBuild />} colorScheme='yellow' variant='ghost' height={h}>
            Settings
          </Button>
          <Button rightIcon={<MdCall />} colorScheme='blue' variant='outline'>
            Call us
          </Button>
        </Stack>
      </header>
    </div>
  );
}

function PageSetting() {

  return (
    <Text size='36'>Here is PageSetting</Text>
  )
}

// export {PageStart};

// basic 
// export let AllComponents = {
//   PageStart: PageStart
// }

// 簡化 1
export { PageStart, PageSetting }

