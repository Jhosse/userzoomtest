export const formatToDateString = (str: Date): string => {
  const newDate = new Date(str);
  
  return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
}
