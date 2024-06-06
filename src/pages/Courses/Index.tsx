import {
  Box,
  Heading,
  Text,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  InputGroup,
  Input,
  InputLeftElement,
  keyframes,
  Image,
} from "@chakra-ui/react";
import { InfoCard } from "../../components/User/InfoCard";
import { Layout } from "../../components/layout/Index";
import { TbFilterEdit } from "react-icons/tb";
import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { EnrollBanner } from "../../components/Banners/Enroll";
import { PreRecorded } from "../../components/Courses/PreRecorded";
import SessionsImg from "../../assets/bg/sessions.svg";

const Courses = () => {
  const filterOptions = ["All", "Newest", "Higest Rated"];

  const [tabIndex, setTabIndex] = useState(0);

  const tabChangeHandler = (index: number) => {
    setTabIndex(index);
  };

  const moveReveal = keyframes`
   0% { 
    transform: translateX(100%); 
  } 
  100% { 
    transform: translateX(-100%); 
  } 

`;
  const moveRevealAnimation = `${moveReveal} infinite 30s linear`;
  return (
    <Layout>
      <Flex flexDir="column" gap={6} bg="#fff" borderRadius="2xl">
        <Box
          display="flex"
          flexDir="column"
          gap={6}
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

          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            color="gray.500"
          >
            <Box>
              <Flex
                borderWidth={1}
                borderColor="gray.300"
                borderRadius="full"
                px={2.5}
                py={1.5}
                alignItems="center"
                justifyContent="space=between"
                gap={2}
              >
                <TbFilterEdit />
                <Text fontSize="xs" mr={2}>
                  Filter
                </Text>
                <IoChevronDownSharp />
              </Flex>
            </Box>

            <Flex direction="column" alignItems="center" flexGrow={8}>
              <Tabs
                variant="unstyled"
                position="relative"
                onChange={tabChangeHandler}
              >
                <TabList>
                  {filterOptions.map((option, idx) => (
                    <Tab
                      key={idx}
                      p={1}
                      fontSize="sm"
                      mx={2}
                      color={idx == tabIndex ? "primary.500" : "gray.500"}
                    >
                      {option}
                    </Tab>
                  ))}
                </TabList>
                <TabIndicator
                  // mt="-1.5px"
                  height="2px"
                  bg="primary.500"
                  borderRadius="1px"
                />
              </Tabs>
            </Flex>

            <Box flexGrow={1}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <CiSearch color="gray.300" />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Type What You Are Looking For"
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
          </Flex>

          <EnrollBanner />

          <PreRecorded />
        </Box>
        <Box my={8} bgColor="#782ef3" p={4} w="full">
          <Text
            color="#fff"
            animation={moveRevealAnimation}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            Enroll In our live sessions class to get the chance to ask questions
            and learn extensively...
          </Text>
        </Box>

        <Box py={{ base: 3, lg: 4, xl: 5 }} px={{ base: 4, lg: 6, xl: 8 }}>
          <Image src={SessionsImg} alt="" />
        </Box>
      </Flex>
    </Layout>
  );
};

export default Courses;
