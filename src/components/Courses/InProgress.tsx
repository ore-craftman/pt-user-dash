import { Box, Image, Text, Flex, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const InProgress = ({
  id,
  img,
  title,
  creator,
  chapter,
  currentLesson,
  totalLessons,
}: {
  id: string;
  img: string;
  title: string;
  creator: string;
  chapter: number;
  currentLesson: number;
  totalLessons: number;
}) => {
  const navigate = useNavigate();
  return (
    <Flex
      bgColor="#fff"
      p={{ base: 2, md: 4, lg: 6 }}
      borderRadius={"3xl"}
      direction={{ base: "column", lg: "row" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex alignItems="center" gap={{ base: 2, md: 4 }}>
        <Image
          src={img}
          w={{ base: 70, lg: 100 }}
          h={{ base: 70, lg: 100 }}
          borderRadius="full"
        />
        <Box>
          <Heading
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            fontWeight={400}
          >
            {title}
          </Heading>
          <Flex fontSize="sm" alignItems="center">
            <Text color="gray.500">By {creator}</Text>
            <Box w={1} h={1} borderRadius="full" bgColor="gold" mx={2} />
            <Text color="gold">In Progress</Text>
          </Flex>
        </Box>
      </Flex>
      <Flex
        gap={{ base: 2, md: 4, lg: 6 }}
        flexDir={{ base: "row-reverse", xl: "row" }}
      >
        <Box>
          <Heading
            fontSize={{ base: "sm", xl: "lg" }}
            fontWeight={400}
            color="gray.500"
          >
            Chapter {chapter}
          </Heading>
          <Text>
            Lesson {currentLesson}/
            <span style={{ color: "#949494" }}>{totalLessons}</span>
          </Text>
        </Box>

        <Button
          color="white"
          bgColor="primary.500"
          _hover={{ opacity: 0.9 }}
          borderRadius="full"
          onClick={() => navigate("/courses/" + id)}
          fontWeight={400}
        >
          Continue
        </Button>
      </Flex>
    </Flex>
  );
};
