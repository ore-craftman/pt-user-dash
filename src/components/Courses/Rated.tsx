import { Box, Image, Text, Flex, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import RatingIcon from "../../assets/icons/rating.svg";

export const Rated = ({
  id,
  img,
  title,
  creator,
  duration,
  rating,
}: {
  id: string;
  img: string;
  title: string;
  creator: string;
  duration: string;
  rating: number;
}) => {
  const navigate = useNavigate();
  return (
    <Flex
      bgColor="#f3f3f380"
      p={{ base: 2, md: 4, lg: 6 }}
      borderRadius={"3xl"}
      direction={{ base: "column", lg: "row" }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex alignItems="center" gap={{ base: 2, md: 4 }}>
        <Image
          src={img}
          w={{ base: 70, lg: 90 }}
          h={{ base: 70, lg: 90 }}
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
            <Box mx={2}>
              <Image alt="" src={RatingIcon} w={4} h={4} />
            </Box>
            <Text color="gold">{rating} Rating</Text>
          </Flex>
        </Box>
      </Flex>
      <Flex
        gap={{ base: 2, md: 4, lg: 6 }}
        flexDir={{ base: "row-reverse", xl: "row" }}
        alignItems="center"
      >
        <Heading
          fontSize={{ base: "sm", xl: "lg" }}
          fontWeight={400}
          //   color="gray.500"
        >
          {duration}
        </Heading>

        <Button
          color="primary.500"
          onClick={() => navigate("/courses/" + id)}
          fontWeight={400}
          p={0}
          variant="ghost"
          _hover={{ opacity: 0.6, bgColor: "none" }}
        >
          View Course
        </Button>
      </Flex>
    </Flex>
  );
};
