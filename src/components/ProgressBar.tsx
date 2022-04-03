import { Box, Flex, Center, Circle, VStack } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


interface ProgressBarProps {
    Step: number;
}

function ProgressBar(props: ProgressBarProps) {
  return (
    <Flex p='2' h='20'>
        {/* <Spacer /> */}
        <Center>
            <Breadcrumb spacing='4' separator={<Box borderTop='1px' w='50px' h='20px'/>}>
                <BreadcrumbItem>
                    <Link to={ (props.Step >= 1) ? '/' : '#' }>
                        <VStack spacing='1'>
                            <MyCircle IconStep='1' Active={props.Step >= 1} />
                            <Box fontSize='xs' fontWeight='bold' textAlign='center'>
                                Select
                            </Box>
                        </VStack>
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to={ (props.Step >= 2) ? '/airhockey/setup' : '#' }>
                        <VStack spacing='1'>
                            <MyCircle IconStep='2' Active={props.Step >= 2} />
                            <Box fontSize='xs' fontWeight='bold' textAlign='center'>
                                Setup
                            </Box>
                        </VStack>
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <VStack spacing='1'>
                        <MyCircle IconStep='3' Active={props.Step >= 3} />
                        <Box fontSize='xs' fontWeight='bold' textAlign='center'>
                            Play
                        </Box>
                    </VStack>  
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
            <Circle size='10' fontWeight='bold' bg='blue.400' color='gray.900'>
                { props.IconStep }
            </Circle>
        );
    };
    

    return (
        <Circle size='10' borderColor='blue.400' borderWidth='medium' fontWeight='bold'>
            { props.IconStep }
        </Circle>
    );

}

export { ProgressBar }
