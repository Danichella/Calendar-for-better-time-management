export const PrepareDataForRequest = (data) => {
  const result = {};
  data.forEach((element) => {
    result[element.id] = element.value;
  });

  return result;
};
