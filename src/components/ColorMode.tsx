import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, Button, IconButton, useColorModeValue } from "@chakra-ui/react";

export const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <IconButton bg={useColorModeValue("transparent", "transparent")} aria-label="Toggle theme" onClick={toggleColorMode} icon={useColorModeValue(<SunIcon />, <MoonIcon />)}></IconButton>;
};
