export const FillInServerResponse = (data, formats) => {
  const formattedData = formats.map((format) => ({
    ...format,
    value: data[format.id] ?? null,
  }));

  return formattedData;
};
