import { useRef } from "react";
import logo from "../comm/Logo.svg";
import "../index.css";
import { Flex, Center, Image, Drawer, useDisclosure, IconButton, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useColorModeValue } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { SettingLinkBox } from "./LayoutComponents";
import { ColorModeButton } from "./ColorMode";

function NavBar() {
  return (
    <Flex w="full" p="2" h="16" bg={useColorModeValue("white", "gray.900")} justify="space-between" position="fixed" bgColor={useColorModeValue("white", "gray.900")} zIndex="99">
      <Center w="20" h="12">
        <Link to="/">
          <Image h="4" src={logo} />
        </Link>
      </Center>
      <Center w="20" h="12">
        <ColorModeButton />
        <DrawerMenu />
      </Center>
    </Flex>
  );
}

function DrawerMenu() {
  const btnRef = useRef() as any;
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const disclosure = useDisclosure();
  // const isOpen = disclosure.isOpen;
  // const onOpen = disclosure.onOpen;
  // const onClose = disclosure.onClose;

  return (
    <>
      <IconButton ref={btnRef} onClick={onOpen} aria-label="drawer-menu" icon={<HamburgerIcon />} variant="link" colorScheme="#000000" size="lg" />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody paddingY="12">
            <Flex h="20" align="center" w="full">
              <SettingLinkBox name="Play a game" link="/" ariaLabel="home-page" />
            </Flex>
            <Flex h="20" align="center" w="full">
              <SettingLinkBox name="About iGYM" link="/" ariaLabel="home-page" />
            </Flex>
          </DrawerBody>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export { NavBar };
