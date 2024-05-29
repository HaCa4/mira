export const convertFirstLettersToUpperCase = (text: string) => {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const removeUnderscores = (text: string) => {
  return text.replaceAll("_", " ");
};
