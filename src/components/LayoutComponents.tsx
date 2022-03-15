import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { SimpleGrid, Box, Flex, Spacer, Center, Circle, Text, VStack } from "@chakra-ui/react";

interface SliderParameter {
  ariaLabel: string;
  defaultValue: number;
  min?: number;
  max?: number;
  step?: number;
  onChangeEndFunc: {(value: number): void};
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
  name:string;
}

export const AdvancedSettingSliderBox = ({name, ariaLabel, defaultValue, min, max, step, onChangeEndFunc} : SliderBoxParameter) => {
  return (
    <Flex h="4" align="center" w="full">
    <Box w="160px" h="4" textAlign="left">
      <Text fontSize="ml" fontWeight="500">
        {name}
      </Text>
    </Box>
    <Spacer />
    <Box w="100px" h="4">
      <AdvancedSettingSliders
        ariaLabel= {ariaLabel}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        onChangeEndFunc={onChangeEndFunc}
      />
    </Box>
  </Flex>
  )
}