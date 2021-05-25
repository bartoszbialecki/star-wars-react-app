export const truncateText = (text: string, charactersCount: number) => {
  return text.length > charactersCount
    ? text.substring(0, charactersCount) + "..."
    : text;
};
