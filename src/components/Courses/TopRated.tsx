import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { LuMoveRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { Rated } from "./Rated";

export const TopRated = () => {
  const navigate = useNavigate();
  const courses = [
    {
      id: "1",
      img: "https://picsum.photos/500/300?random=1",
      title: "Social Media Journalism",
      creator: "PT Academy",
      duration: "6h 20mins",
      rating: 4.2,
    },
    {
      id: "2",
      img: "https://picsum.photos/500/300?random=1",
      title: "Press Freedom",
      creator: "PT Academy",
      duration: "3h 45mins",
      rating: 4.6,
    },
    {
      id: "3",
      img: "https://picsum.photos/500/300?random=1",
      title: "Writing & Reporting",
      creator: "PT Academy",
      duration: "12h 30mins",
      rating: 4.3,
    },
    {
      id: "4",
      img: "https://picsum.photos/500/300?random=1",
      title: "Fact Checking",
      creator: "PT Academy",
      duration: "3h 25mins",
      rating: 4.8,
    },
  ];
  return (
    <Box bgColor="#fff" p={{ base: 2, md: 4, lg: 6 }} borderRadius={"3xl"}>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading fontSize={{ base: "md", md: "lg", lg: "xl" }} fontWeight={400}>
          Top Rated Courses
        </Heading>

        <Button
          rightIcon={<LuMoveRight />}
          variant="ghost"
          color="primary.500"
          _hover={{ opacity: 0.9 }}
          borderRadius="full"
          onClick={() => navigate("/courses")}
          fontWeight={400}
        >
          See All
        </Button>
      </Flex>

      <Flex direction="column" gap={4} py={2}>
        {courses.map(({ id, img, title, creator, duration, rating }, idx) => {
          return (
            <Box key={idx}>
              <Rated
                id={id}
                img={img}
                title={title}
                creator={creator}
                duration={duration}
                rating={rating}
              />
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};
