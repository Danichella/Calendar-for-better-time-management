export const FormatArrayOfDays = (month) => {
  const dayOfWeek = new Date(new Date().getFullYear(), month, 1).getDay();
  const daysInMonth = new Date(new Date().getFullYear(), month, 0).getDate();
  const daysInPrevMonth = new Date(
    new Date().getFullYear(),
    month > 0 ? month - 1 : 11,
    0
  ).getDate();
  const beforeActive = [
    ...Array(dayOfWeek > 0 ? dayOfWeek - 1 : dayOfWeek),
  ].map((_element, index) => ({
    type: 'inactive',
    day: daysInPrevMonth - index,
  }));
  const active = [...Array(daysInMonth)].map((_element, index) => ({
    type: 'active',
    day: index + 1,
  }));
  const currentLength = active.length + beforeActive.length;
  if (currentLength % 7 === 0) return [...beforeActive, ...active];

  const afterActive = [...Array(7 - (currentLength % 7))].map(
    (_element, index) => ({ type: 'inactive', day: index + 1 })
  );

  return [...beforeActive, ...active, ...afterActive];
};
