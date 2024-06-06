import { Box, Image, Badge, Heading, Text, Flex } from "@chakra-ui/react";
import RatingIcon from "../../assets/icons/rating.svg";
import { Link } from "react-router-dom";

export const PreviewCard = ({
  id,
  img,
  title,
  creator,
  rating,
  price,
  bestSeller,
  baseLink,
}: {
  id: string;
  img: string;
  title: string;
  creator: string;
  rating: number;
  price: string;
  baseLink?: string;
  bestSeller?: boolean;
}) => {
  return (
    <Link
      to={baseLink ? baseLink + id : "/courses/" + id}
      style={{ width: "100%" }}
    >
      <Box
        borderWidth={1}
        borderColor="gray.100"
        borderRadius="2xl"
        p={{ base: 2, md: 4, lg: 6 }}
        display="flex"
        flexDir="column"
        gap={4}
        w="full"
        minH="400px"
      >
        <Image
          src={img}
          alt={title + " PT Academy"}
          w={{ base: 310, xl: "100%" }}
          h={{ base: 180, xl: "230px" }}
          borderRadius="2xl"
          mx="auto"
        />
        <Box>
          <Heading
            fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
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

        <Flex justifyContent="space-between" alignItems="center">
          <Heading
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            fontWeight={400}
          >
            ₦{price}
          </Heading>
          {bestSeller && (
            <Badge colorScheme="green" fontWeight={400}>
              Best Seller
            </Badge>
          )}
        </Flex>
      </Box>
    </Link>
  );
};
