import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { PtInput } from "../../components/ui/forms/PtInput";
import { useMutation } from "@tanstack/react-query";
import { registerEmail } from "../../services/api";
const SignUp: FC<{}> = () => {
  const [email, setEmail] = useState("");
  const { mutate: registerEmailMutation,  } = useMutation({
    mutationFn: registerEmail,
    mutationKey: ["registerEmail"],
  });
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      registerEmailMutation(email);
    } else {
      console.error("Email is required");
      // Handle case where email is not provided, e.g., show an error message
    }
  };

  return (
    <Box
      p={4}
      w={"100%"}
      h={"100vh"}
      display={"flex"}
      borderWidth={1}
      borderRadius="md"
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"white"}
      backgroundImage={"/pt-acad-auth-bg.png"}
      backgroundSize={"cover"}
    >
      <Flex
        flexDirection={"column"}
        w={"100%"}
        maxW={"1023px"}
        p={"82px"}
        height={"100%"}
        maxH={"909px"}
        borderRadius="48px"
        backgroundColor={"white"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box>
          <Heading
            as={"h1"}
            fontSize={"33px"}
            fontWeight={"normal"}
            lineHeight={"140%"}
            textTransform={"capitalize"}
            color={"#782DF3"}
            textAlign={"center"}
          >
            hey, create an account for free
          </Heading>
          <Text
            fontSize={"16px"}
            fontWeight={"normal"}
            lineHeight={"140%"}
            textTransform={"capitalize"}
            color={"gray"}
            textAlign={"center"}
            mt={2}
          >
            your learning is about to get more fun when you start with us.
          </Text>
        </Box>
        <form onSubmit={submitHandler} style={{ width: "100%" }}>
          <FormControl
            mt={"3rem"}
            w={"100%"}
            style={{ maxWidth: "calc(100% - 82px)" }}
          >
            <PtInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              startElement={
                <Text color={"gray"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                      stroke="#969696"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                      stroke="#969696"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Text>
              }
            />
          </FormControl>
          <Button
            mt={"3rem"}
            w={"100%"}
            typeof="submit"
            style={{ maxWidth: "calc(100% - 82px)" }}
            colorScheme={"purple"}
            borderRadius={"8px"}
            padding={"24px"}
            type="submit"
            // isLoading={isLoading}
            // isLoading={isLoading}
          >
            Create Account
          </Button>
        </form>
      </Flex>
    </Box>
  );
};
export default SignUp;
