import { useCallback, useState, useEffect } from "react";
import { api } from "../services/api";
import { PixotopePayload } from "../types/pixotope.types";

interface Props {
  topic: Omit<PixotopePayload["Topic"], "Type">;
  subscribe?: boolean;
  tick?: number;
  select?: (data: Awaited<ReturnType<typeof api.publish>>) => any;
}

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
      const response = await api.publish<{ Value: string }>({
        Topic: { ...topic, Type: "Get" },
      });
      setValue(select?.(response) || (response[0]?.Message.Value as TVal));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [topic]);

  useEffect(() => {
    get();
    if (subscribe) {
      const interval = setInterval(() => get(), tick || 1000);
      return () => clearInterval(interval);
    }
  }, [topic, subscribe, tick, get]);

  return { value, error, loading };
};
