export const Stories = {
  RAMAYANA: "ramayana",
  // MAHABHARATA: "mahabharata",
};

export const getChapters = (story) => {
  if (!story) return 0;
  switch (story) {
    case Stories.RAMAYANA: {
      return 14;
    }
  }
};
