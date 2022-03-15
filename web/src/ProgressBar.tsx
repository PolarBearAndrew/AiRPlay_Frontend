import React from 'react';
import ProgressSeparator from './comm/ProgressSeparator.svg';
import './PageStart.css';
import { PageStart } from './PageStart';
import { PageSetup } from './PageSetup';
import { PageAdvancedSetting } from './PageAdvancedSetting';
import { SimpleGrid, Box, Flex, Spacer, Center, Image, Circle, Text, VStack, propNames } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/react';
import { Route } from 'react-router-dom';


interface ProgressBarProps {
    Step: number;
}

function ProgressBar(props: ProgressBarProps) {
  return (
    <Flex p='2' h='20'>
        {/* <Spacer /> */}
        <Center>
            <Breadcrumb spacing='4' separator={<Image w='700' h='20' src={ProgressSeparator} />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>
                        <MyCircle IconStep='1' Active={props.Step >= 1} />
                        <Box fontSize='xs' fontWeight='bold' textAlign='center'>
                            Select
                        </Box>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>
                        <MyCircle IconStep='2' Active={props.Step >= 2} />
                        <Box fontSize='xs' fontWeight='bold' textAlign='center'>
                            Setup
                        </Box>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>
                        <MyCircle IconStep='3' Active={props.Step >= 3} />
                        <Box fontSize='xs' fontWeight='bold' textAlign='center'>
                            Play
                        </Box>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Center>
        {/* <Spacer /> */}
    </Flex>
  );
}

interface MyCircleProps {
    Active: boolean;
    IconStep: string;
}

function MyCircle(props: MyCircleProps) {

    if (props.Active) {
        return (
            <Circle size='10' fontWeight='bold' bg='#46a3f7' color='#000000'>
                { props.IconStep }
            </Circle>
        );
    };
    

    return (
        <Circle size='10' borderColor='#46a3f7' borderWidth='medium' fontWeight='bold'>
            { props.IconStep }
        </Circle>
    );

}

export { ProgressBar }
