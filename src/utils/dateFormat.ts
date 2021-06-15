export const isoToBrDate = (string: string) => {
  const [year, month, day] = string.split("T")[0].split("-");
  return `${day}/${month}/${year}`;
};
