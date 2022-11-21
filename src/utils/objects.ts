export const createQueryParamFromObj = (obj: Record<string, any>) => {
  return Object.keys(obj)
    .map((key) => `${key}=${encodeURIComponent(obj[key])}`)
    .join("&");
};
