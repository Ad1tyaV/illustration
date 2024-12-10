export const Stories = {
  RAMAYANA: "ramayana",
  SAI_BABA: "saibaba"
  // MAHABHARATA: "mahabharata",
};

export const getChapters = (story) => {  
  if (!story) return 0;
  switch (story) {
    case "RAMAYANA": {
      return 14;
    }
    case "SAI_BABA": {
      return 15;
    }
  }
};
