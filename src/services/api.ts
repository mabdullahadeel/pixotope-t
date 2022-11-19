import {
  PixotopePayload,
  PixotopePublishPayload,
} from "../types/pixotope.types";
import { PIXOTOPE_GATEWAY_URL } from "../utils/constants";

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
};
