export const handlerSortAndStringOptions = (language1, language2) => {
  const sortLanguages = [];
  sortLanguages.push(language1);
  sortLanguages.push(language2);
  sortLanguages.sort();
  return sortLanguages[0] + '-' + sortLanguages[1];
};
