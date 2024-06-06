import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { IoBookmarksOutline } from "react-icons/io5";
import { RxFileText } from "react-icons/rx";
import { CiCalendarDate } from "react-icons/ci";
import { TbMessage2Question } from "react-icons/tb";

export const Sidebar = () => {
  const { pathname } = useLocation();
  const navItems = [
    {
      icon: <BiSolidDashboard fontSize={"16px"} />,
      title: "Dashboard",
      route: "/dashboard",
    },
    {
      icon: <RxFileText fontSize={"16px"} />,
      title: "Courses",
      route: "/courses",
    },
    {
      icon: <IoBookmarksOutline fontSize={"14px"} />,
      title: "My Library",
      route: "/library",
    },
    {
      icon: <CiCalendarDate fontSize={"18px"} />,
      title: "Events",
      route: "/events",
    },
  ];

  return (
    <Box py={10} pl={{ base: 2, lg: 4 }}>
      <Heading
        color="primary.500"
        fontSize={{ base: "lg", lg: "xl" }}
        as={"h2"}
        px={{ base: 0, lg: 2, xl: 6 }}
      >
        PT Academy
      </Heading>

      <Box
        mt={20}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
      >
        <Box w="full" px={{ base: 2, lg: 4, xl: 6 }}>
          <Text color="gray.500" fontSize={{ base: "md", lg: "lg" }} mb={6}>
            Overview
          </Text>
          <Flex flexDir={"column"} gap={4}>
            {navItems.map((item) => (
              <Link to={item.route} key={item.route}>
                <Flex
                  alignItems={"center"}
                  gap={4}
                  _hover={{ color: "primary.500" }}
                  color={
                    item.route.includes(pathname.split("/")[1])
                      ? "primary.500"
                      : "gray.500"
                  }
                >
                  {item.icon}

                  <Text
                    fontWeight={400}
                    // display={{base: "none", }}
                    fontSize={{ base: "sm", lg: "md" }}
                  >
                    {item.title}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Flex>
        </Box>

        <Box mt={28} w="full" px={{ base: 2, lg: 4, xl: 6 }}>
          <Text color="gray.500" fontWeight={500} fontSize={"13px"} mb={4}>
            Do you have a problem?
          </Text>

          <Link to={"/#"}>
            <Flex
              alignItems={"center"}
              gap={4}
              _hover={{ color: "primary.500" }}
              color={
                "/#".includes(pathname.split("/")[1])
                  ? "primary.500"
                  : "gray.500"
              }
            >
              <TbMessage2Question fontSize={"18px"} />

              <Text fontWeight={400} fontSize={{ base: "sm", lg: "md" }}>
                FAQ
              </Text>
            </Flex>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
