import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";

interface SliderParameter {
  ariaLabel: string;
  defaultValue: number;
  min: number;
  max: number;
  step: number;
  onChangeEndFunc: {(value: number): void};
}

export const AdvancedSettingSliders = ({ ariaLabel, defaultValue, min, max, step, onChangeEndFunc }: SliderParameter) => (
  <Slider aria-label={ariaLabel} defaultValue={defaultValue} min={min} max={max} step={step} onChangeEnd={onChangeEndFunc}>
    <SliderTrack bg="grey">
      <SliderFilledTrack bg="#000000" />
    </SliderTrack>
    <SliderThumb boxSize="4" bg="#000000" />
  </Slider>
);
