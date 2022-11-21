import { FormLabel, Select, Stack, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useGet } from "../../hooks/useGet";
import { useSet } from "../../hooks/useSet";

const optToVal = [
  { label: "Video space", value: "Video" },
  { label: "Linear Space", value: "Linear" },
];

const ColorSpaceTopic = {
  Name: "State.General.CompositingColorSpace",
  Target: "Store",
};

interface ColorSpaceProps {}

export const ColorSpace: React.FC<ColorSpaceProps> = ({}) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const { value } = useGet({ topic: ColorSpaceTopic });
  const set = useSet({ topic: ColorSpaceTopic });

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLoading(true);
    try {
      await set(e.target.value);
    } catch {
      toast({
        title: "Opps! Something went wrong",
        status: "error",
        duration: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack>
      <FormLabel>Compositing color space</FormLabel>
      <Select
        variant="filled"
        placeholder=""
        onChange={handleChange}
        value={value || ""}
        disabled={loading}
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
