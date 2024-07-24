import {
  Flex,
  Box,
  Heading,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  Image,
  Button,
} from "@chakra-ui/react";
import { Layout } from "../../components/layout/Index";
import { InfoCard } from "../../components/User/InfoCard";
import ReactPlayer from "react-player/lazy";
import { SlBookOpen } from "react-icons/sl";
import UserImg from "../../assets/icons/user.svg";
import Topics from "../../assets/bg/topics.svg";

const SingleCourse = () => {
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
              Courses
            </Heading>
            <Text color="gray.500">
              Welcome Adekunle, Are You Take Learning To The Next Level
            </Text>
          </Box>

          <Box flexGrow={1}>
            <InfoCard />
          </Box>
        </Flex>

        <Flex gap={{ base: 4, md: 6 }} mt={10}>
          <Box
            width={{ base: "100%", md: "70%" }}
            display={"flex"}
            flexDir={"column"}
            gap={{ base: 4, md: 6 }}
          >
            <Flex alignItems="flex-start">
              <Box flexGrow={8}>
                <Heading
                  fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                  fontWeight={400}
                >
                  Investigative journalism for beginners
                </Heading>
                <Text color="gray.500">Lesson 12 - investigating inside</Text>
              </Box>
            </Flex>

            <Box>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=OrliU0e09io&ab_channel=uidotdev"
                style={{ borderRadius: "2em" }}
              />
            </Box>
            <Flex fontSize="sm" alignItems="center">
              <Text color="primary.500">Overview</Text>
              <Box mx={2} color="gray.400">
                <SlBookOpen />
              </Box>
              <Text color="gray.400">My Notes</Text>
            </Flex>

            <Text fontSize="sm" color="gray.500">
              {`
              Uncover the secrets of impactful storytelling and unveil the truth
              with our Investigative Journalism Masterclass. This comprehensive
              course...
              
              `}
            </Text>

            <Box>
              <Text>50 comments</Text>
              <Flex
                justifyContent="space-between"
                gap={{ base: 2, md: 4, lg: 6 }}
              >
                <Box flexGrow={1}>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <Image alt="" src={UserImg} w={8} h={8} />
                    </InputLeftElement>
                    <Input
                      type="text"
                      placeholder="Write Your Comment Here"
                      borderRadius="full"
                      fontSize="sm"
                      _focus={{
                        outlineColor: "none",
                        ring: 1,
                        ringColor: "primary.500",
                        border: "none",
                        color: "gray.800",
                      }}
                    />
                  </InputGroup>
                </Box>
                <Box>
                  <Button fontSize="xs" color="#fff" bgColor="primary.500">
                    Comment
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box width={{ base: "100%", md: "28%" }}>
            <Image alt="" src={Topics} />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default SingleCourse;
