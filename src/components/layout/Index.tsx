import { Box, Flex, Container } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";

export const Layout = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <Container
      maxW={"containter.sm"}
      px={6}
      bgGradient="linear(to-l, #fbf9fe, #fbf9fe)"
    >
      <Flex gap={4}>
        <Box
          width={{ base: "18%", xl: "15%" }}
          height={"98vh"}
          borderBottomEndRadius={"2rem"}
          borderTopEndRadius={"2rem"}
          px={2}
          bgColor={"#fff"}
          position={"fixed"}
          left={0}
          top={0}
        >
          <Sidebar />
        </Box>
        <Box width={{ base: "18%", xl: "15%" }}></Box>
        <Box minHeight={"100vh"} flexGrow={1} py={4}>
          {children}
        </Box>
      </Flex>
    </Container>
  );
};
