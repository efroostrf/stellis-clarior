import { transliterate } from "transliteration";

export const translite = (value: string): string => {
  return transliterate(value, {
    trim: true,
    replace: {
      " ": "-",
      '"': "",
      "'": "",
      "`": "",
      "«": "",
      "»": "",
      ",": "",
    },
  })
    .toLowerCase()
    .replace(/-+/g, "-");
};
