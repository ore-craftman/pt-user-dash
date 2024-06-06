import { Box, Flex, Button, Heading, Text, Avatar } from "@chakra-ui/react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoChevronDownSharp } from "react-icons/io5";

export const InfoCard = () => {
  return (
    <Box>
      <Flex justifyContent="space-between">
        <Flex gap={2} fontSize="lg">
          <Button px={1.5} py={1} borderRadius="full">
            <IoIosNotificationsOutline />
          </Button>
          <Button px={1.5} py={1} borderRadius="full">
            <PiShoppingCartLight />
          </Button>
        </Flex>

        <Flex gap={1}>
          <Box mr={2}>
            <Heading fontSize={{ base: "13px" }} fontWeight={400} m={0}>
              Adekunle Adedayo
            </Heading>
            <Text color="gray.500" fontSize="11px" m={0}>
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
