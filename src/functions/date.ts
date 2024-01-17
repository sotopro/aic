export const getTimestamp = (timestamp?: string) => {
  if (!timestamp) {
    return '';
  }
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
};

export const getTimestampUTC = (timestamp?: string) => {
  if (!timestamp) {
    return '';
  }
  const date = new Date(timestamp);
  return date.toISOString();
};
