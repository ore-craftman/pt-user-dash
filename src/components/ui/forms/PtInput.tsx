import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import React, { FC } from "react";

export const PtInput: FC<{
  startElement: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ startElement, value, onChange }) => {
  return (
    <InputGroup p={"0px"}>
      <InputLeftElement
        pointerEvents="none"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="24px"
        paddingLeft={"24px"}
      >
        {startElement}
      </InputLeftElement>
      <Input
        value={value}
        p={"24px"}
        borderColor={"#F0F0F0"}
        paddingLeft={"3rem"}
        borderRadius={"8px"}
        focusBorderColor={"purple.500"}
        onChange={onChange}
      />
    </InputGroup>
  );
};
