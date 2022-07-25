export const formatMinutesTimeRange = (minutes: number) => {
  const fullHours = Math.floor(minutes / 60);
  const minutesRemainder = minutes % 60;

  return `${fullHours}h ${minutesRemainder}min`;
};
