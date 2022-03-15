import React from 'react';
import {Text, Stack } from '@chakra-ui/react';

interface IBigTextProps {
  content: string;
}

function BigText(props: IBigTextProps) {
  return (
    <Stack spacing={3}>
      <Text fontSize='xs'>
        { props.content }
      </Text>
    </Stack>
  )
}

function SmallText(props: IBigTextProps) {
    return (
        <Stack spacing={3}>
          <Text fontSize='ms'>
            { props.content }
          </Text>
        </Stack>
      )
    }

export { BigText, SmallText }