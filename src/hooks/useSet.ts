import { useCallback } from "react";
import { api } from "../services/api";
import {
  PixotopePayload,
  PixotopePublishPayload,
} from "../types/pixotope.types";

interface Props {
  topic: Omit<PixotopePayload["Topic"], "Type">;
  message: PixotopePublishPayload["Message"];
}

export const useSet = ({ topic, message }: Props) => {
  const set = useCallback(async <TRes>() => {
    return api.publish<TRes>({
      Topic: { ...topic, Type: "Set" },
      Message: message,
    });
  }, [topic, message]);

  return set;
};
