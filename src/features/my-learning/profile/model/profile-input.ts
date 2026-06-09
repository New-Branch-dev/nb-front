export const convertAgeInput = (value: string) =>
  value.replace(/\D/g, "").slice(0, 2);
