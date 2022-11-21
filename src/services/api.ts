import {
  PixotopePayload,
  PixotopePublishPayload,
} from "../types/pixotope.types";
import { PIXOTOPE_GATEWAY_URL } from "../utils/constants";
import { createQueryParamFromObj } from "../utils/objects";

interface TRestResponse<TMessage> {
  Topic: {
    Type: string;
    Target: string;
    Source: string;
    Name: string;
  };
  Message: TMessage;
}

export const api = {
  publish: async <TRes>(payload: PixotopePayload | PixotopePublishPayload) => {
    const response = await fetch(`${PIXOTOPE_GATEWAY_URL}/publish`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return (await response.json()) as Array<TRestResponse<TRes>>;
  },
  publishViaGet: async <TRes>(
    payload: Record<string, string | number | boolean>
  ) => {
    const query = createQueryParamFromObj(payload);
    const response = await fetch(`${PIXOTOPE_GATEWAY_URL}/publish?${query}`);
    return (await response.json()) as TRes;
  },
};
