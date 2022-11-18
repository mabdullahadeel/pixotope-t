import {
  PixotopePayload,
  PixotopePublishPayload,
} from "../types/pixotope.types";
import { PIXOTOPE_GATEWAY_URL } from "../utils/constants";

export const api = {
  publish: async (payload: PixotopePayload | PixotopePublishPayload) => {
    const response = await fetch(`${PIXOTOPE_GATEWAY_URL}/publish`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return response.json();
  },
};
