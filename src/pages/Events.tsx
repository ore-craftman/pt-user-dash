import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";
import { Layout } from "../components/layout/Index";
import Eve from "../assets/bg/eve.svg";
import { EnrollBanner } from "../components/Banners/Enroll";

const Events = () => {
  return (
    <Layout>
      <Flex
        flexDir="column"
        gap={6}
        bg="#fff"
        borderRadius="2xl"
        py={{ base: 3, lg: 4, xl: 5 }}
        px={{ base: 4, lg: 6, xl: 8 }}
      >
        <EnrollBanner />

        <Box>
          <Heading
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={400}
          >
            Events
          </Heading>
          <Text color="gray.500">
            Welcome Adekunle, we suggest you attend events to the next level
          </Text>
        </Box>
        <Image alt="" src={Eve} width={{ base: "100%", lg: "60%" }} />
      </Flex>
    </Layout>
  );
};

export default Events;
