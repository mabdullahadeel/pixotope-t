import React, { useState } from "react";
import { Text, Card, CardBody, Flex } from "@chakra-ui/react";
import { TStateCameraResVal } from "../../types/camera-tracking.types";

interface CameraCardProps {
  camera: TStateCameraResVal;
}

export const CameraCard: React.FC<CameraCardProps> = ({ camera }) => {
  const [cameraState] = useState(() => {
    return {
      id: Object.keys(camera)[0],
      values: Object.values(camera)[0],
    };
  });

  return (
    <Card w="container.sm">
      <CardBody>
        <Flex justifyContent="space-between">
          <Text>{cameraState.values.Name}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
};
