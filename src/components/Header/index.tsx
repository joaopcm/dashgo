import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "../Header/Logo";
import { SearchBox } from "../Header/SearchBox";
import { NotificationsNav } from "../Header/NotificationsNav";
import { Profile } from "../Header/Profile";

export function Header() {
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
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
