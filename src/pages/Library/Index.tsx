import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Button,
} from "@chakra-ui/react";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { InfoCard } from "../../components/User/InfoCard";
import { Layout } from "../../components/layout/Index";
import { useNavigate } from "react-router-dom";
import { OnGoingCourses } from "../../components/Courses/OnGoing";

const Library = () => {
  const navigate = useNavigate();
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
        <Flex justifyContent="space-between">
          <Box flexGrow={8}>
            <Heading
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={400}
            >
              My Library
            </Heading>
            <Text color="gray.500">
              Welcome Adekunle, Are You Take Learning To The Next Level
            </Text>
          </Box>

          <Box flexGrow={1}>
            <InfoCard />
          </Box>
        </Flex>

        <Box
          p={{ base: 2, lg: 4 }}
          borderWidth={1}
          borderColor="gray.100"
          borderRadius="2xl"
        >
          <Flex gap={{ base: 2, md: 4, xl: 6 }} alignItems="center">
            <Image
              alt=""
              src="https://picsum.photos/500/300?random=1"
              w={{ base: 300 }}
              h={{ base: 225 }}
              borderRadius="2xl"
            />
            <Flex flexDir="column" gap={4}>
              <Text fontSize="sm">
                <b color="#000">Lesson 12</b>/36
              </Text>
              <Box>
                <Heading
                  fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                  fontWeight={400}
                >
                  Investigative journalism for beginners
                </Heading>
                <Text
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  fontWeight={200}
                >
                  Learn from industry professionals and master in less than 100
                  days. this course is for both beginners and amateurs
                </Text>
              </Box>

              <Flex>
                <Box flexGrow={2}>
                  <Heading
                    color="primary.500"
                    fontSize={{ base: "md", md: "lg", lg: "xl" }}
                    fontWeight={500}
                  >
                    35% Completed
                  </Heading>
                  <Slider defaultValue={35} width={{ base: "100%", md: "80%" }}>
                    <SliderTrack>
                      <SliderFilledTrack bgColor="primary.500" />
                    </SliderTrack>
                  </Slider>
                </Box>
                <Button
                  rightIcon={<IoChevronForwardCircleSharp />}
                  color="white"
                  bgColor="primary.500"
                  _hover={{ opacity: 0.9 }}
                  borderRadius="full"
                  onClick={() =>
                    navigate("/library/" + Math.floor(Math.random() * 10))
                  }
                  fontWeight={400}
                >
                  Back To Course
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>

        <OnGoingCourses />
      </Flex>
    </Layout>
  );
};

export default Library;
