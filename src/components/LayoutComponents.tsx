import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, IconButton, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Box, Flex, Spacer, Center, Circle, Text, VStack } from "@chakra-ui/react";
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
      <SliderFilledTrack bg="#000000" />
    </SliderTrack>
    <SliderThumb boxSize="4" bg="#000000" />
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
          <Text fontSize="ml" fontWeight="700" textColor={textColor ? textColor : "black"}>
            {name}
          </Text>
        </Box>
        <LinkOverlay h="4" as={RouterLink} to={link}>
          <IconButton variant="link" colorScheme={colorScheme ? colorScheme : "black"} aria-label={ariaLabel} icon={<MdNavigateNext />} size="lg" />
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
      <Flex as='button' h="4" w="full" justify={"space-between"} onClick={()=>{callback();}}>
        <Box h="4" textAlign="left">
          <Text fontSize="ml" fontWeight="700" textColor={textColor ? textColor : "black"}>
            {name}
          </Text>
        </Box>
          <IconButton variant="link" colorScheme={colorScheme ? colorScheme : "black"} aria-label={ariaLabel} icon={<MdNavigateNext />} size="lg" />
      </Flex>
  );
};