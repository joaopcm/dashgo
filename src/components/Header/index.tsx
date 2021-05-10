import { Flex, IconButton, useBreakpointValue, Icon } from "@chakra-ui/react";
import { Logo } from "../Header/Logo";
import { SearchBox } from "../Header/SearchBox";
import { NotificationsNav } from "../Header/NotificationsNav";
import { Profile } from "../Header/Profile";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      as="header"
      maxWidth="1480px"
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          onClick={onOpen}
          fontSize="24"
          mr="2"
          icon={<Icon as={RiMenuLine} />}
          variant="unstyled"
        ></IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
