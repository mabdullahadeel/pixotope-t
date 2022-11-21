import { Stack } from "@chakra-ui/react";
import React from "react";
import { ColorSpace } from "./ColorSpace";
import { InputOutput } from "./InputOutput";

interface ShowSettingsProps {}

export const ShowSettings: React.FC<ShowSettingsProps> = ({}) => {
  return (
    <Stack spacing={3}>
      <ColorSpace />
      <InputOutput />
    </Stack>
  );
};
