import { Box, Heading, Flex } from "@chakra-ui/react";
import { PreviewCard } from "./PreviewCard";

export const OnGoingCourses = () => {
  const videos = [
    {
      id: "0",
      img: "https://picsum.photos/500/300?random=1",
      title: "Investigative journalism",
      creator: "PT Academy",
      rating: 4.9,
      price: "23, 000",
      bestSeller: true,
    },
    {
      id: "0",
      img: "https://picsum.photos/500/300?random=1",
      title: "Press freedom",
      creator: "PT Academy",
      rating: 4.9,
      price: "72, 000",
      bestSeller: true,
    },
    {
      id: "0",
      img: "https://picsum.photos/500/300?random=1",
      title: "Fact checking and verification",
      creator: "PT Academy",
      rating: 4.9,
      price: "52, 000",
      bestSeller: true,
    },
  ];
  return (
    <Box>
      <Heading
        fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
        fontWeight={400}
        my={4}
      >
        My Courses
      </Heading>

      <Flex gap={4} flexWrap={{ base: "wrap" }}>
        {videos.map(
          ({ id, img, title, creator, rating, price, bestSeller }, idx) => (
            <Flex
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              key={idx}
              width={{ base: "100%", md: "49%", lg: "32%" }}
            >
              <PreviewCard
                id={id}
                baseLink="/library/"
                img={img}
                title={title}
                creator={creator}
                rating={rating}
                price={price}
                bestSeller={bestSeller}
              />
            </Flex>
          )
        )}
      </Flex>
    </Box>
  );
};
