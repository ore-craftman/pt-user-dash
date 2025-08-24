import {
  Heading,
  Box,
  Text,
  Input,
  InputGroup,
  Button,
} from "@chakra-ui/react";

import { BsEnvelope, BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../services/api";
import { authUtils } from "../../utils/auth-util";
import type { ApiResult } from "../../types";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useNavigate();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      signIn(data.email, data.password),
    onSuccess: (data: ApiResult<{ access: string; refresh: string }>) => {
      console.log("Login successful:", data);
      if (data.status) {
        authUtils.setToken(data.data!.access);
        router("/dashboard");
      } else {
        console.error("Login failed:", data.msg);
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ email, password });
  };
  return (
    <Box className="tw-grid tw-grid-cols-1 tw-p-4 sm:tw-p-10 md:tw-p-16 md:tw-grid-cols-2 tw-h-screen tw-w-full bg-login">
      <section>{/* Your content */}</section>
      <form
        onSubmit={submitHandler}
        className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-[90%] tw-my-auto tw-py-16 tw-bg-white  tw-rounded-[48px]"
      >
        <Heading
          as="h3"
          className="welcome-gradient tw-text-[33px] tw-font-bold tw-leading-[140%] tw-capitalize"
        >
          welcome back
        </Heading>
        <Text className="text-center mt-4 text-base text-gray-500">
          PT Academy - Bridging the Gap in Journalism Education
        </Text>
        <Box w={"calc(100% - 100px)"}>
          <InputGroup mt={6} position="relative">
            <Box
              as="span"
              position="absolute"
              left="20px"
              top="50%"
              width="24px"
              height="24px"
              transform="translateY(-50%)"
              color="gray.400"
            >
              <BsEnvelope className="tw-w-full tw-h-full" />
            </Box>
            <Input
              p={"24px"}
              pl="50px"
              focusBorderColor="#782DF3"
              fontSize={"16px"}
              lineHeight={"140%"}
              placeholder="Enter your email"
              type="email"
              className="tw-rounded-lg tw-bg-white"
              size="2xl"
              onChange={(e) => setEmail(e.target.value)}
              borderRadius="md"
            />
          </InputGroup>
          <InputGroup mt={4} position="relative">
            <Box
              as="span"
              position="absolute"
              left="20px"
              top="50%"
              width="24px"
              height="24px"
              transform="translateY(-50%)"
              color="gray.400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
                  stroke="#969696"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
                  stroke="#969696"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
                  stroke="#969696"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Box>
            <Input
              p={"24px"}
              pl="50px"
              pr={"50px"}
              focusBorderColor="#782DF3"
              fontSize={"16px"}
              lineHeight={"140%"}
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              className="tw-rounded-lg tw-bg-white tw-p-6 tw-pr-[50px] tw-pl-[50px]"
              // size="2xl"
              borderRadius="md"
            />
            <Box
              as="span"
              position="absolute"
              right="20px"
              top="50%"
              transform="translateY(-50%)"
              color="gray.400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <BsEyeSlash className="tw-w-full tw-h-full" />
              ) : (
                <BsEye className="tw-w-full tw-h-full" />
              )}
            </Box>
          </InputGroup>

          <Link to="/forgot-password">
            <Text className="tw-text-[#782DF3] tw-text-base tw-mt-2 tw-text-right tw-cursor-pointer">
              Can't remember password?
            </Text>
          </Link>

          <Button
            type="submit"
            mt={"48px"}
            w={"full"}
            bg={"#782DF3"}
            color={"white"}
            p={"24px"}
            fontSize={"16px"}
            isLoading={isPending}
            loadingText="Logging in..."
          >
            Login
          </Button>

          <Box mt={4} textAlign="center">
            {isError && (
              <Text color="red.500">
                {(error as any)?.response?.data?.msg || "Login failed"}
              </Text>
            )}
          </Box>
        </Box>
      </form>
    </Box>
  );
};
export default Login;
