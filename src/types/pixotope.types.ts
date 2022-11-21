export type SupportedTopicTypes = "Set" | "Get";

interface Message<TVal = string> {
  Message: {
    Value: TVal;
  };
}

interface PixotopeBasePayload {
  Topic: {
    Type: SupportedTopicTypes;
    Name: string;
    Target: string;
  };
}

export type PixotopePayload = PixotopeBasePayload;

export type PixotopePublishPayload = PixotopeBasePayload & Message;
