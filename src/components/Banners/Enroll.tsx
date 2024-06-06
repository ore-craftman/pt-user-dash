import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import EnrollBg from "../../assets/bg/enroll.svg";
import { useNavigate } from "react-router-dom";

export const EnrollBanner = () => {
  const navigate = useNavigate();
  return (
    <Box
      backgroundImage={EnrollBg}
      bgRepeat="no-repeat"
      backgroundSize="cover"
      py={10}
      px={{ base: 4, md: 6 }}
      borderRadius="3xl"
      height="300px"
      maxH="100%"
    >
      <Flex>
        <Box position="relative" w="full" flexDir="column">
          <Box position="absolute" top={20} left={2}>
            <Heading
              color="primary.500"
              fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
              fontWeight={400}
            >
              Join Our Online Live Sessions To Sharpen Your Skills
            </Heading>

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
                Enroll Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
