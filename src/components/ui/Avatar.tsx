import { FC, useState } from "react";
import { Image, Box, Text } from "@chakra-ui/react";
export const Avatar: FC<{ imgSrc: string; tutorName: string;className?:string }> = ({
  imgSrc,
  tutorName,
  className
}) => {
  const [imgErr, setImgErr] = useState(false);

  const name = tutorName.split(" ");
  const firstName = name[0] || "";
  const lastName = name[1] || "";

  return (
    <Box
      width={"50px"}
      height={"50px"}
      borderRadius={"50px"}
      background={imgErr ? "#782DF3" : "transparent"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      className={className}
    >
      {!imgErr && imgSrc ? (
        <Image
          src={imgSrc}
          onError={() => setImgErr(true)}
          width={"100%"}
          height={"100%"}
          objectFit={"cover"}
          alt={`${firstName} ${lastName}`}
        />
      ) : (
        <Text color="white" fontWeight="bold" fontSize="xl">
          {firstName[0]?.toUpperCase() || "?"}{" "}
          {lastName[0]?.toUpperCase() || "?"}
        </Text>
      )}
    </Box>
  );
};
