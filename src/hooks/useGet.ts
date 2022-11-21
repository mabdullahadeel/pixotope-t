/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState, useEffect } from "react";
import { api } from "../services/api";
import {
  PixotopePayload,
  PixotopePublishPayload,
} from "../types/pixotope.types";

interface Props {
  topic: Omit<PixotopePayload["Topic"], "Type">;
  subscribe?: boolean;
  tick?: number;
  select?: (data: Awaited<ReturnType<typeof api.publishViaGet>>) => any;
}

type TGetRes = Awaited<Array<PixotopePublishPayload>>;

const DEFAULT_TICK = 3000;

export const useGet = <TVal = string>({
  topic,
  tick,
  subscribe = true,
  select,
}: Props) => {
  const [value, setValue] = useState<TVal | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const get = useCallback(async () => {
    setLoading(true);
    try {
      const payload = {
        ...{ ...topic, Type: "Get" },
      };
      const response = await api.publishViaGet<TGetRes>(payload);
      setValue(select?.(response) || (response[0]?.Message.Value as TVal));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [topic]);

  let interval: NodeJS.Timeout | null = null;

  useEffect(() => {
    get();
    if (subscribe) {
      if (interval) {
        clearInterval(interval);
      }
      interval = setInterval(() => get(), tick || DEFAULT_TICK);
    }
  }, [subscribe, tick]);

  useEffect(() => {
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return { value, error, loading };
};
