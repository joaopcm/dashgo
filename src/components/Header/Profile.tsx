import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Joao Melo</Text>
        <Text color="gray.300" fontSize="small">
          jopcmelo@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Joao Melo" src="https://github.com/joaopcm.png" />
    </Flex>
  );
}
