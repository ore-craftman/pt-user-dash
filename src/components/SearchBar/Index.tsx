import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <CiSearch color="gray.300" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Type What You Are Looking For"
        borderRadius="full"
        fontSize="sm"
        _focus={{
          outlineColor: "none",
          ring: 1,
          ringColor: "primary.500",
          border: "none",
          color: "gray.800",
        }}
      />
    </InputGroup>
  );
};
