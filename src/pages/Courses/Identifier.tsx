import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Badge,
  Button,
} from "@chakra-ui/react";
import { Layout } from "../../components/layout/Index";
import { InfoCard } from "../../components/User/InfoCard";
import { SearchBar } from "../../components/SearchBar/Index";
import RatingIcon from "../../assets/icons/rating.svg";
import GlobeIcon from "../../assets/icons/globe.svg";
import VideoIcon from "../../assets/icons/video.svg";
import BookIcon from "../../assets/icons/book.svg";
import FilesIcon from "../../assets/icons/note.svg";
import keyIcon from "../../assets/icons/key.svg";
import GradIcon from "../../assets/icons/grad.svg";
import TagIcon from "../../assets/icons/tag.svg";
import ReactPlayer from "react-player";
import { IoCartOutline } from "react-icons/io5";

export const CourseDetails = () => {
  const courseContent = [
    { icon: VideoIcon, desc: "54 hours on-demand video" },
    { icon: BookIcon, desc: "Assignments & quizzes" },
    { icon: FilesIcon, desc: "22 articles" },
    { icon: keyIcon, desc: "1 year access" },
    { icon: GradIcon, desc: "Certificate of completion" },
  ];

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
        <Box>
          <Flex>
            <Box flexGrow={8}>
              <SearchBar />
            </Box>
            <Box flexGrow={3}></Box>
            <Box flexGrow={1}>
              <InfoCard />
            </Box>
          </Flex>
        </Box>

        <Flex gap={{ base: 4, md: 6 }} mt={10}>
          <Box
            width={{ base: "100%", md: "55%" }}
            display={"flex"}
            flexDir={"column"}
            gap={{ base: 4, md: 6 }}
            // borderWidth={1}
            // borderColor="red"
          >
            <Box>
              <Heading
                fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
                fontWeight={400}
              >
                Investigative Journalism for beginners
              </Heading>
              <Text color="gray.500" mt={4} mb={2}>
                Learn from industry professionals and master in less than 100
                days. this course is for both beginners and amateurs
              </Text>

              <Flex fontSize="sm" alignItems="center">
                <Text color="gray.500">By PT Academy</Text>

                <Box mx={2}>
                  <Image alt="" src={RatingIcon} w={4} h={4} />
                </Box>
                <Text color="gold">4.7 Rating</Text>
                <Box mx={2}>
                  <Image alt="" src={GlobeIcon} w={4} h={4} />
                </Box>
                <Text color="gray.500">English</Text>
              </Flex>

              <Flex fontSize="sm" alignItems="center" mt={4} gap={2}>
                <Heading
                  fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                  fontWeight={500}
                >
                  ₦23,000
                </Heading>

                <Badge colorScheme="green" fontWeight={400}>
                  Best Seller
                </Badge>
              </Flex>

              <Box pt={4}>
                <Text color="#000" mt={4} mb={2}>
                  This course includes:
                </Text>

                {courseContent.map((content) => (
                  <Flex
                    fontSize="sm"
                    alignItems="center"
                    key={content.desc}
                    mb={1}
                  >
                    <Image alt="" src={content.icon} w={4} h={4} />
                    <Text color="gray.500" ml={2}>
                      {content.desc}
                    </Text>
                  </Flex>
                ))}

                <Text color="#000" mt={6} mb={2}>
                  Course Details
                </Text>
                <Text mt={2} color="gray.500">
                  Overview: Uncover the secrets of impactful storytelling and
                  unveil the truth with our Investigative Journalism
                  Masterclass. This comprehensive course is designed for
                  aspiring journalists, media enthusiasts, and anyone passionate
                  about digging deep to discover and share untold stories.{" "}
                  <br />
                  <br />
                  Highlights: Fundamentals of Investigative Reporting: Learn the
                  foundational principles of investigative journalism, including
                  research techniques, source identification, and data analysis.
                  Interviewing and Interrogation Skills: Hone your interviewing
                  skills to extract valuable information and build compelling
                  narratives. Gain insights into effective questioning and
                  ethical considerations. Digital Tools for Investigations:
                  Explore cutting-edge digital tools and technologies to enhance
                  your investigative capabilities. Understand data mining,
                  online research, and social media analysis. <br /> <br />
                  Ethics and Legalities: Navigate the ethical dilemmas and legal
                  considerations specific to investigative journalism.
                  Understand the responsibilities and challenges associated with
                  exposing truth. Case Studies and Real-world Applications: Dive
                  into real-world case studies of groundbreaking investigative
                  journalism. Analyze successful stories and understand the
                  strategies behind them. Collaborative Reporting: Explore the
                  dynamics of collaborative reporting and teamwork. Work on
                  group projects to simulate real-world investigative scenarios.
                  Building a Compelling Narrative: Master the art of
                  storytelling. Learn how to craft compelling narratives that
                  engage and inform your audience while maintaining journalistic
                  integrity.
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            width={{ base: "100%", md: "42%" }}
            // borderWidth={1}
            // borderColor="red"
          >
            <Box>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=OrliU0e09io&ab_channel=uidotdev"
                style={{ borderRadius: "2em" }}
              />

              <Flex alignItems="center" mt={4}>
                <Image alt="" src={TagIcon} w={12} h={12} />
                <Heading
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  fontWeight={600}
                >
                  ₦23,000
                </Heading>
              </Flex>

              <Button
                mt={4}
                color="#fff"
                bgColor="primary.500"
                w="full"
                py={6}
                size="medium"
                rightIcon={<IoCartOutline color="#fff" fontSize="20px" />}
              >
                Add To Cart
              </Button>

              <Button
                my={4}
                color="#000"
                borderColor="gray.300"
                variant="outline"
                w="full"
                py={6}
                size="medium"
              >
                Buy Now
              </Button>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};
