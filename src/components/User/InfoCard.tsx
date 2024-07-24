import { Box, Flex, Button, Heading, Text, Avatar } from "@chakra-ui/react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoChevronDownSharp } from "react-icons/io5";

export const InfoCard = () => {
  return (
    <Box>
      <Flex justifyContent="space-between">
        <Flex gap={2} fontSize="lg">
          <Flex
            alignItems="center"
            justifyContent="center"
            borderRadius="full"
            w={8}
            h={8}
            bgColor="gray.100"
          >
            <IoIosNotificationsOutline fontSize="16px" />
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            borderRadius="full"
            w={8}
            h={8}
            bgColor="gray.100"
          >
            <PiShoppingCartLight fontSize="16px" />
          </Flex>
        </Flex>

        <Flex gap={1}>
          <Box mx={2}>
            <Heading
              fontSize={{ base: "11px", xl: "13px" }}
              fontWeight={400}
              m={0}
            >
              Adekunle Adedayo
            </Heading>
            <Text color="gray.500" fontSize={{ base: "8px", xl: "10px" }} m={0}>
              kayfun@gmail.com
            </Text>
          </Box>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            size="sm"
          />
          <Button p={0} variant="ghost" color="gray.500">
            <IoChevronDownSharp />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
