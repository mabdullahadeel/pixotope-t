import { FormLabel, Select, Stack, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useGet } from "../../hooks/useGet";
import { useSet } from "../../hooks/useSet";

interface InputOutputProps {}

const optToVal = [
  { label: "AJA", value: "AJA" },
  { label: "BMD", value: "BMD" },
  { label: "NDI", value: "NDI" },
  { label: "Tracking Only", value: "TrackingOnly" },
  { label: "File (Experimental)", value: "File" },
];

const IOTopic = {
  Name: "State.Defaults.Type",
  Target: "Store",
};

export const InputOutput: React.FC<InputOutputProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { value } = useGet({ topic: IOTopic });
  const set = useSet({ topic: IOTopic });

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
        disabled={loading}
        value={value || ""}
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
