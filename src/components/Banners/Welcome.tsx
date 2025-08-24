import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import WelcomeBg from "../../assets/bg/welcome-bg.svg";
import { useNavigate } from "react-router-dom";
export const WelcomeBanner = ({ firstName }: { firstName: string }) => {
  const navigate = useNavigate();
  return (
    <Box
      backgroundImage={WelcomeBg}
      bgRepeat="no-repeat"
      backgroundSize="cover"
      py={10}
      px={{ base: 4, md: 6 }}
      borderRadius="3xl"
    >
      <Flex>
        <Box display="flex" flexDir="column">
          <Heading
            color="primary.500"
            fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
            fontWeight={500}
          >{`Welcome, ${firstName}`}</Heading>
          <Text
            color="primary.500"
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            fontWeight={200}
          >
            keep pushing, it can be difficult but pays off
          </Text>
          <Box mt={2.5}>
            <Button
              rightIcon={<IoChevronForwardCircleSharp />}
              color="white"
              bgColor="primary.500"
              _hover={{ opacity: 0.9 }}
              borderRadius="full"
              onClick={() => navigate("/courses")}
              fontWeight={400}
            >
              Buy Now
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
