import {
  Center,
  Spinner,
  Text,
  Card,
  CardBody,
  Stack,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useGet } from "../../hooks/useGet";
import { TStateCameraResVal } from "../../types/camera-tracking.types";
import { CameraCard } from "./CameraCard";

interface CameraTrackingProps {}

const camerasTopic = {
  Name: "State.Cameras",
  Target: "Store",
};

export const CameraTracking: React.FC<CameraTrackingProps> = ({}) => {
  const { value } = useGet<TStateCameraResVal>({
    topic: camerasTopic,
    tick: 4000,
  });

  if (value === null) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  return (
    <Stack spacing={2}>
      {Object.keys(value)?.map((key) => {
        const obj = value[key];
        return <CameraCard key={value[key].Name} camera={{ [key]: obj }} />;
      })}
    </Stack>
  );
};
