import { FormLabel, Select, Stack } from "@chakra-ui/react";
import React from "react";
import { useGet } from "../../hooks/useGet";

const optToVal = [
  { label: "Video space", value: "Video" },
  { label: "Linear Space", value: "Linear" },
];

interface ColorSpaceProps {}

export const ColorSpace: React.FC<ColorSpaceProps> = ({}) => {
  const { value } = useGet({
    topic: {
      Name: "State.General.CompositingColorSpac",
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
