import {
  Box,
  Heading,
  Text,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  keyframes,
  // Image,
  Button,
  Skeleton,
  Badge,
  // Link
} from "@chakra-ui/react";
import { InfoCard } from "../../components/User/InfoCard";
import { Layout } from "../../components/layout/Index";
import { TbFilterEdit } from "react-icons/tb";
import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from "react";
import { EnrollBanner } from "../../components/Banners/Enroll";
import { PreRecorded } from "../../components/Courses/PreRecorded";
// import SessionsImg from "../../assets/bg/sessions.svg";
import { SearchBar } from "../../components/SearchBar/Index";
import { useQuery } from "@tanstack/react-query";
import { getAllCourses, getUserProfile } from "../../services/api";
import type { ApiResult, Course } from "../../types";
import { Link } from "react-router-dom";
import moment from "moment";
import { Avatar } from "../../components/ui/Avatar";
const Courses = () => {
  const filterOptions = ["All", "Newest", "Higest Rated"];
  const { data, isLoading, error } = useQuery<ApiResult<Course[]>>({
    queryKey: ["courses"],
    queryFn: getAllCourses,
  });
  const { data: userProfile } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
  });

  console.log("Courses Data:", data?.data);
  console.log("Error:", error);
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
                Welcome {userProfile?.data?.first_name || "User"}, Are You Take
                Learning To The Next Level
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
              <SearchBar />
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
          {/* <Image src={SessionsImg} alt="" /> */}
          <Heading
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={400}
            marginBottom={8}
          >
            Live Sessions
          </Heading>
          <Flex flexDir={{ base: "column" }} gap={"24px"}>
            {isLoading &&
              [1, 2, 3].map((_, index) => (
                <Skeleton
                  key={index}
                  height="200px"
                  width="200px"
                  borderRadius="24px"
                />
              ))}
            {isLoading && (
              <Skeleton height="200px" width="200px" borderRadius="24px" />
            )}
            {!isLoading &&
              data?.data &&
              data?.data.map((course) => (
                <Flex
                  key={course.id}
                  gap={"24px"}
                  justifyContent="space-between"
                  alignItems={"center"}
                >
                  {/*  */}
                  <Flex gap={6} alignItems={"center"}>
                    <Box
                      borderRadius={"24px"}
                      width={"200px"}
                      border={"1px solid"}
                      height={"200px"}
                    >
                      {/* <Avatar
                        imgSrc={course?.tutor_pfp}
                        tutorName={course?.title}
                        className="!tw-w-[200px] !tw-h-[200px] !tw-rounded-[24px] !tw-bg-slate-200 "
                      /> */}
                    </Box>
                  </Flex>
                  <Flex
                    direction={"column"}
                    justifyContent="center"
                    alignItems={"flex-start"}
                    gap={"8px"}
                    flexGrow={8}
                  >
                    <Heading
                      fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
                      fontWeight={400}
                      textTransform={"capitalize"}
                    >
                      {course?.title}
                    </Heading>
                    <Flex
                      gap={"24px"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      width={"100%"}
                    >
                      <Flex gap={4} alignItems={"center"}>
                        <Box display={"flex"} alignItems={"center"} gap={2}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M8 2.5V5.5"
                              stroke="#782DF3"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16 2.5V5.5"
                              stroke="#782DF3"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3.5 9.58984H20.5"
                              stroke="#782DF3"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M19.21 16.2703L15.6701 19.8103C15.5301 19.9503 15.4 20.2103 15.37 20.4003L15.18 21.7503C15.11 22.2403 15.45 22.5803 15.94 22.5103L17.29 22.3203C17.48 22.2903 17.75 22.1603 17.88 22.0203L21.4201 18.4803C22.0301 17.8703 22.3201 17.1603 21.4201 16.2603C20.5301 15.3703 19.82 15.6603 19.21 16.2703Z"
                              stroke="#782DF3"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18.7002 16.7803C19.0002 17.8603 19.8402 18.7003 20.9202 19.0003"
                              stroke="#782DF3"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 22.5H8C4.5 22.5 3 20.5 3 17.5V9C3 6 4.5 4 8 4H16C19.5 4 21 6 21 9V12.5"
                              stroke="#782DF3"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.9955 14.2002H12.0045"
                              stroke="#782DF3"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.29431 14.2002H8.30329"
                              stroke="#782DF3"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.29431 17.2002H8.30329"
                              stroke="#782DF3"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <Text
                            fontSize={"19px"}
                            fontWeight={400}
                            color="#5F5D61"
                          >
                            {" "}
                            {moment(course?.session_date).format(
                              "ddd, MMM D, YYYY"
                            )}{" "}
                          </Text>
                        </Box>
                        <Box display={"flex"} alignItems={"center"} gap={"8px"}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M22 12.5C22 18.02 17.52 22.5 12 22.5C6.48 22.5 2 18.02 2 12.5C2 6.98 6.48 2.5 12 2.5C17.52 2.5 22 6.98 22 12.5Z"
                              stroke="#782DF3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.7099 15.6798L12.6099 13.8298C12.0699 13.5098 11.6299 12.7398 11.6299 12.1098V8.00977"
                              stroke="#782DF3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <Text
                            fontSize={"19px"}
                            fontWeight={400}
                            color="#5F5D61"
                          >
                            <span>
                              {moment(course?.start_time, "HH:mm").format(
                                "LTS"
                              )}
                            </span>

                            <span className="tw-space-x-1">-</span>
                            <span>
                              {moment(course?.end_time, "HH:mm").format("LTS")}
                            </span>
                          </Text>
                        </Box>
                      </Flex>

                      {course?.slots >= 0 && (
                        <Badge
                          colorScheme="green"
                          borderRadius={"4px"}
                          padding={"8px 16px"}
                          display={"flex"}
                          alignItems={"center"}
                          gap={"10px"}
                          textTransform={"capitalize"}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M21.2502 18.9701L19.6002 19.3601C19.2302 19.4501 18.9402 19.7301 18.8602 20.1001L18.5102 21.5701C18.3202 22.3701 17.3002 22.6201 16.7702 21.9901L13.7802 18.5501C13.5402 18.2701 13.6702 17.8301 14.0302 17.7401C15.8002 17.3101 17.3902 16.3201 18.5602 14.9101C18.7502 14.6801 19.0902 14.6501 19.3002 14.8601L21.5202 17.0801C22.2802 17.8401 22.0102 18.7901 21.2502 18.9701Z"
                              fill="#296621"
                            />
                            <path
                              d="M2.70016 18.9701L4.35016 19.3601C4.72016 19.4501 5.01016 19.7301 5.09016 20.1001L5.44016 21.5701C5.63016 22.3701 6.65016 22.6201 7.18016 21.9901L10.1702 18.5501C10.4102 18.2701 10.2802 17.8301 9.92016 17.7401C8.15016 17.3101 6.56016 16.3201 5.39016 14.9101C5.20016 14.6801 4.86016 14.6501 4.65016 14.8601L2.43016 17.0801C1.67016 17.8401 1.94016 18.7901 2.70016 18.9701Z"
                              fill="#296621"
                            />
                            <path
                              d="M12 2.5C8.13 2.5 5 5.63 5 9.5C5 10.95 5.43 12.28 6.17 13.39C7.25 14.99 8.96 16.12 10.95 16.41C11.29 16.47 11.64 16.5 12 16.5C12.36 16.5 12.71 16.47 13.05 16.41C15.04 16.12 16.75 14.99 17.83 13.39C18.57 12.28 19 10.95 19 9.5C19 5.63 15.87 2.5 12 2.5ZM15.06 9.28L14.23 10.11C14.09 10.25 14.01 10.52 14.06 10.72L14.3 11.75C14.49 12.56 14.06 12.88 13.34 12.45L12.34 11.86C12.16 11.75 11.86 11.75 11.68 11.86L10.68 12.45C9.96 12.87 9.53 12.56 9.72 11.75L9.96 10.72C10 10.53 9.93 10.25 9.79 10.11L8.94 9.28C8.45 8.79 8.61 8.3 9.29 8.19L10.36 8.01C10.54 7.98 10.75 7.82 10.83 7.66L11.42 6.48C11.74 5.84 12.26 5.84 12.58 6.48L13.17 7.66C13.25 7.82 13.46 7.98 13.65 8.01L14.72 8.19C15.39 8.3 15.55 8.79 15.06 9.28Z"
                              fill="#296621"
                            />
                          </svg>
                          <Text fontSize={"16px"} fontWeight={400}>
                            {course?.slots} slot
                            {course?.slots !== 1 ? "s" : ""} remaining
                          </Text>
                        </Badge>
                      )}
                    </Flex>
                    <Flex marginTop={"8px"} gap={"24px"} alignItems={"center"}>
                      <Flex gap={"8px"} alignItems={"flex-start"}>
                        <Avatar
                          imgSrc={course?.tutor_pfp}
                          tutorName={course?.tutor_name}
                        />
                        <Box>
                          <Text
                            color={"#0F061D"}
                            textTransform={"capitalize"}
                            fontWeight={400}
                            fontSize={"16px"}
                          >
                            {course?.tutor_name}
                          </Text>
                          <Text
                            color={"#969696"}
                            textTransform={"capitalize"}
                            fontWeight={400}
                            fontSize={"16px"}
                          >
                            By {course?.tutor_title}
                          </Text>
                        </Box>
                      </Flex>
                      <Link
                        to={`/courses/${course?.id}`}
                        className="tw-text-[#782DF3] tw-text-[19px]"
                      >
                        Learn More
                      </Link>
                    </Flex>
                  </Flex>
                  {/* </Flex> */}
                  {/* {course?.slots >= 0 && (
                    <Badge
                      colorScheme="green"
                      borderRadius={"4px"}
                      padding={"8px 16px"}
                      display={"flex"}
                      alignItems={"center"}
                      gap={"10px"}
                      textTransform={"capitalize"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M21.2502 18.9701L19.6002 19.3601C19.2302 19.4501 18.9402 19.7301 18.8602 20.1001L18.5102 21.5701C18.3202 22.3701 17.3002 22.6201 16.7702 21.9901L13.7802 18.5501C13.5402 18.2701 13.6702 17.8301 14.0302 17.7401C15.8002 17.3101 17.3902 16.3201 18.5602 14.9101C18.7502 14.6801 19.0902 14.6501 19.3002 14.8601L21.5202 17.0801C22.2802 17.8401 22.0102 18.7901 21.2502 18.9701Z"
                          fill="#296621"
                        />
                        <path
                          d="M2.70016 18.9701L4.35016 19.3601C4.72016 19.4501 5.01016 19.7301 5.09016 20.1001L5.44016 21.5701C5.63016 22.3701 6.65016 22.6201 7.18016 21.9901L10.1702 18.5501C10.4102 18.2701 10.2802 17.8301 9.92016 17.7401C8.15016 17.3101 6.56016 16.3201 5.39016 14.9101C5.20016 14.6801 4.86016 14.6501 4.65016 14.8601L2.43016 17.0801C1.67016 17.8401 1.94016 18.7901 2.70016 18.9701Z"
                          fill="#296621"
                        />
                        <path
                          d="M12 2.5C8.13 2.5 5 5.63 5 9.5C5 10.95 5.43 12.28 6.17 13.39C7.25 14.99 8.96 16.12 10.95 16.41C11.29 16.47 11.64 16.5 12 16.5C12.36 16.5 12.71 16.47 13.05 16.41C15.04 16.12 16.75 14.99 17.83 13.39C18.57 12.28 19 10.95 19 9.5C19 5.63 15.87 2.5 12 2.5ZM15.06 9.28L14.23 10.11C14.09 10.25 14.01 10.52 14.06 10.72L14.3 11.75C14.49 12.56 14.06 12.88 13.34 12.45L12.34 11.86C12.16 11.75 11.86 11.75 11.68 11.86L10.68 12.45C9.96 12.87 9.53 12.56 9.72 11.75L9.96 10.72C10 10.53 9.93 10.25 9.79 10.11L8.94 9.28C8.45 8.79 8.61 8.3 9.29 8.19L10.36 8.01C10.54 7.98 10.75 7.82 10.83 7.66L11.42 6.48C11.74 5.84 12.26 5.84 12.58 6.48L13.17 7.66C13.25 7.82 13.46 7.98 13.65 8.01L14.72 8.19C15.39 8.3 15.55 8.79 15.06 9.28Z"
                          fill="#296621"
                        />
                      </svg>
                      <Text fontSize={"16px"} fontWeight={400}>
                        {course?.slots} slot{course?.slots !== 1 ? "s" : ""}{" "}
                        remaining
                      </Text>
                    </Badge>
                  )} */}
                  <Flex
                    flexDir={"column"}
                    alignItems={"center"}
                    gap={3}
                    flexGrow={3}
                    justifyContent="center"
                  >
                    {course?.active ? (
                      <Link
                        className="tw-flex tw-items-center tw-justify-center tw-text-white tw-gap-2 tw-bg-[#782DF3] tw-p-2 tw-pl-4 tw-rounded-[32px] tw-capitalize tw-text-[19px] "
                        to={`/courses/${course?.id}`}
                      >
                        Enrol Now
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM14.79 12.53L11.26 16.06C11.11 16.21 10.92 16.28 10.73 16.28C10.54 16.28 10.35 16.21 10.2 16.06C9.91 15.77 9.91 15.29 10.2 15L13.2 12L10.2 9C9.91 8.71 9.91 8.23 10.2 7.94C10.49 7.65 10.97 7.65 11.26 7.94L14.79 11.47C15.09 11.76 15.09 12.24 14.79 12.53Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    ) : (
                      <Button disabled>Sold Out</Button>
                    )}
                    {course?.active && (
                      <Link
                        to={`/contact`}
                        className="tw-text-[#782DF3] tw-text-[19px]"
                      >
                        Contact us
                      </Link>
                    )}
                    {/* <Text color="gray.500">{course?.description}</Text> */}
                  </Flex>
                </Flex>
              ))}
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Courses;
