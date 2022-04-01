import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, LinkBox, LinkOverlay, useDisclosure, Box, Flex, Spacer,Text, VStack, Icon, useColorModeValue, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { MdNavigateNext } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
interface SliderParameter {
  ariaLabel: string;
  defaultValue: number;
  min?: number;
  max?: number;
  step?: number;
  onChangeEndFunc: { (value: number): void };
}

export const AdvancedSettingSliders = ({ ariaLabel, defaultValue, min, max, step, onChangeEndFunc }: SliderParameter) => (
  <Slider aria-label={ariaLabel} defaultValue={defaultValue} min={min || 0} max={max || 100} step={step || 10} onChangeEnd={onChangeEndFunc}>
    <SliderTrack bg="grey">
      <SliderFilledTrack bg = {useColorModeValue( "gray.900", "blue.300")} />
    </SliderTrack>
    <SliderThumb boxSize="4" bg={useColorModeValue( "gray.900", "blue.400")} />
  </Slider>
);

interface SliderBoxParameter extends SliderParameter {
  name: string;
}

export const AdvancedSettingSliderBox = ({ name, ariaLabel, defaultValue, min, max, step, onChangeEndFunc }: SliderBoxParameter) => {
  return (
    <Flex h="4" align="center" w="full">
      <Box w="160px" h="4" textAlign="left">
        <Text fontSize="ml" fontWeight="500">
          {name}
        </Text>
      </Box>
      <Spacer />
      <Box w="100px" h="4">
        <AdvancedSettingSliders ariaLabel={ariaLabel} defaultValue={defaultValue} min={min} max={max} step={step} onChangeEndFunc={onChangeEndFunc} />
      </Box>
    </Flex>
  );
};

interface SettingLinkBoxParameter {
  name: string;
  link: string;
  ariaLabel: string;
  colorScheme?: string;
  textColor?: string;
}

export const SettingLinkBox = ({ name, link, ariaLabel, colorScheme, textColor }: SettingLinkBoxParameter) => {
  return (
    <LinkBox h="4" w="full">
      <Flex justify={"space-between"}>
        <Box h="4" textAlign="left">
          <Text fontSize="ml" fontWeight="700" textColor={textColor || ""}>
            {name}
          </Text>
        </Box>
        <LinkOverlay h="4" as={RouterLink} to={link}>
          <Icon as={MdNavigateNext} w={10} h={6} color={colorScheme || ""} />
        </LinkOverlay>
      </Flex>
    </LinkBox>
  );
};

interface SettingClickBoxParameter {
  name: string;
  ariaLabel: string;
  colorScheme?: string;
  textColor?: string;
  callback: { (): void };
}

export const SettingClickBox = ({ name, callback, ariaLabel, colorScheme, textColor }: SettingClickBoxParameter) => {
  return (
    <Flex
      as="button"
      h="4"
      w="full"
      justify={"space-between"}
      onClick={() => {
        callback();
      }}
    >
      <Box h="4" textAlign="left">
        <Text fontSize="ml" fontWeight="700" textColor={textColor || ""}>
          {name}
        </Text>
      </Box>
      <Icon as={MdNavigateNext} w={10} h={6} color={colorScheme || ""} />
    </Flex>
  );
};

interface SettingTutorialModalParameter {
  name: string;
  ariaLabel: string;
  colorScheme?: string;
  textColor?: string;
}

export const SettingTutorialModal = ({ name, ariaLabel, colorScheme, textColor }: SettingTutorialModalParameter) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack w="full">
      <Flex as="button" h="4" w="full" justify={"space-between"} onClick={onOpen}>
        <Box h="4" textAlign="left">
          <Text fontSize="ml" fontWeight="700" textColor={textColor || ""}>
            {name}
          </Text>
        </Box>
        <Icon as={MdNavigateNext} w={10} h={6} color={colorScheme || ""} />
      </Flex>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered size="xs">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tutorial</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            Move and use the circle on the floor to hit the ball! Shoot at the goal!
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </ModalBody>

          <ModalFooter />
        </ModalContent>
      </Modal>
    </VStack>
  );
};
