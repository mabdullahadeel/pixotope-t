import { FormLabel, Select, Stack } from "@chakra-ui/react";
import React from "react";
import { useGet } from "../../hooks/useGet";

interface InputOutputProps {}

const optToVal = [
  { label: "AJA", value: "AJA" },
  { label: "BMD", value: "BMD" },
  { label: "NDI", value: "NDI" },
  { label: "Tracking Only", value: "TrackingOnly" },
  { label: "File (Experimental)", value: "File" },
];

export const InputOutput: React.FC<InputOutputProps> = ({}) => {
  const { value } = useGet({
    topic: {
      Name: "State.Defaults.Type",
      Target: "Store",
    },
    subscribe: false,
  });

  return (
    <Stack>
      <FormLabel>Compositing color space</FormLabel>
      <Select
        variant="filled"
        placeholder=""
        onChange={(e) => console.log(e.target.value)}
      >
        {optToVal.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
    </Stack>
  );
};
