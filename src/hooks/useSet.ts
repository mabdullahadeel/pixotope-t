import { useCallback } from "react";
import { api } from "../services/api";
import {
  PixotopePayload,
  PixotopePublishPayload,
} from "../types/pixotope.types";

interface Props {
  topic: Omit<PixotopePayload["Topic"], "Type">;
}

export const useSet = ({ topic }: Props) => {
  const set = useCallback(
    async <TRes>(val: string | null) => {
      const payload = {
        ...{ ...topic, Type: "Set" },
        Value: val,
      };
      return api.publishViaGet<TRes>(payload);
    },
    [topic]
  );

  return set;
};
