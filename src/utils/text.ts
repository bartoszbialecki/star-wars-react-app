export const truncateText = (text: string, charactersCount: number): string => (text.length > charactersCount ? `${text.substring(0, charactersCount)}...` : text);
