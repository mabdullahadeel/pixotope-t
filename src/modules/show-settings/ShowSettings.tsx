import { FormLabel, Select, Stack } from "@chakra-ui/react";
import React from "react";

interface ShowSettingsProps {}

export const ShowSettings: React.FC<ShowSettingsProps> = ({}) => {
  return (
    <Stack spacing={3}>
      <Stack>
        <FormLabel>Compositing color space</FormLabel>
        <Select
          variant="filled"
          placeholder=""
          onChange={(e) => console.log(e.target.value)}
        >
          <option value="Video">Video space</option>
          <option value="Linear">Linear Space</option>
        </Select>
      </Stack>
      <Stack>
        <FormLabel>Input/Output</FormLabel>
        <Select
          variant="filled"
          placeholder=""
          onChange={(e) => console.log(e.target.value)}
        >
          <option value="AJA">AJA</option>
          <option value="BMD">BMD</option>
        </Select>
      </Stack>
    </Stack>
  );
};
