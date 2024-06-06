import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Prog0 from "../../assets/bg/prog-0.svg";
import Prog1 from "../../assets/bg/prog-1.svg";

export const ProgressBanner = ({
  completedCourses,
  coursesInProgress,
}: {
  completedCourses: number;
  coursesInProgress: number;
}) => {
  return (
    <Flex gap={{ base: 4, lg: 6 }} direction={{ base: "column", md: "row" }}>
      <Box
        width={{ base: "100%", md: "49%" }}
        backgroundImage={Prog0}
        bgRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition={"top"}
        height={{ base: "200px", xl: "240px" }}
        px={{ base: 4, md: 6 }}
        borderRadius="3xl"
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
        <Heading
          color="primary.500"
          fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
          fontWeight={600}
        >{`${completedCourses - 1}+`}</Heading>
        <Text
          color="primary.500"
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
          fontWeight={400}
        >
          Courses You <br /> Have Completed
        </Text>
      </Box>
      <Box
        width={{ base: "100%", md: "49%" }}
        backgroundImage={Prog1}
        bgRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition={"top"}
        height={{ base: "200px", xl: "240px" }}
        px={{ base: 4, md: 6 }}
        borderRadius="3xl"
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
        <Heading
          color="primary.500"
          fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
          fontWeight={600}
        >{`${coursesInProgress - 1}+`}</Heading>
        <Text
          color="primary.500"
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
          fontWeight={400}
        >
          Courses You Are <br /> Studying Now
        </Text>
      </Box>
    </Flex>
  );
};
