import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Joao Melo</Text>
          <Text color="gray.300" fontSize="small">
            jopcmelo@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Joao Melo" src="https://github.com/joaopcm.png" />
    </Flex>
  );
}
